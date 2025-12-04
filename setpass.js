
import bcrypt from 'bcrypt';
import { pool } from './db.js';

// Este script está diseñado para ejecutarse a través de npm run setpass -- <usuario> <contraseña>

async function setPassword() {
    // Los argumentos vienen en process.argv[2] (usuario) y process.argv[3] (contraseña)
    const username = process.argv[2];
    const plainPassword = process.argv[3];

    if (!username || !plainPassword) {
        console.error('❌ Uso incorrecto: Debes proporcionar el nombre de usuario y la nueva contraseña.');
        console.log('Ejemplo: npm run setpass -- admin 123456');
        process.exit(1);
    }

    let connection;
    try {
        console.log(`Buscando usuario: ${username}...`);
        
        // 1. Verificar si el usuario existe
        const [rows] = await pool.query(
            'SELECT id_usuario FROM usuarios WHERE nombre_usuario = ?', 
            [username]
        );

        if (rows.length === 0) {
            console.error(`❌ Error: El usuario "${username}" no fue encontrado en la tabla "usuarios".`);
            process.exit(1);
        }

        const userId = rows[0].id_usuario;
        
        // 2. Generar el hash de la contraseña
        console.log('Generando hash...');
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

        // 3. Actualizar la base de datos
        console.log(`Actualizando contraseña para el usuario ID ${userId}...`);
        await pool.query(
            'UPDATE usuarios SET contraseña = ? WHERE id_usuario = ?',
            [hashedPassword, userId]
        );

        console.log(`
✅ ÉXITO: Contraseña actualizada correctamente.
   Usuario: ${username}
   Nueva Contraseña (Hashada): ${hashedPassword.substring(0, 30)}...
        `);

    } catch (error) {
        // Esto captura errores de conexión (ej. DB no activa, credenciales incorrectas)
        console.error('❌ ERROR FATAL: Fallo al intentar actualizar la contraseña.');
        console.error('Mensaje de MySQL:', error.message);
        console.error('Verifica que tu servidor MySQL (Workbench) esté activo y las credenciales de .env sean correctas.');
        process.exit(1);
    }
}

setPassword();
