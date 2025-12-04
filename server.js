
//server.js
import express from "express";
import cors from "cors";
import { pool } from "./db.js";
import bcrypt from "bcrypt";

// === IMPORTAR RUTAS (CON LOS NOMBRES EXACTOS DE TU CARPETA) ===
import productosRoutes from "./routes/productos.routes.js";
import clientesRoutes from "./routes/clientes.routes.js";
import proveedoresRoutes from "./routes/proveedores.routes.js";
import ventasRoutes from "./routes/ventas.routes.js";
import usuariosRoutes from "./routes/usuarios.routes.js";
import pagosRoutes from "./routes/pagos.routes.js";
import movimientosCajaRoutes from "./routes/movimientosCaja.routes.js";
import cierresCajaRoutes from "./routes/cierresCaja.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

/* ============================================================
   LOGIN
============================================================ */
app.post("/api/login", async (req, res) => {
  const { nombre_usuario, contraseña } = req.body;

  if (!nombre_usuario || !contraseña) {
    return res.status(400).json({ error: "Faltan credenciales" });
  }

  try {
    const [rows] = await pool.query(
      "SELECT * FROM usuarios WHERE nombre_usuario = ?",
      [nombre_usuario]
    );

    if (rows.length === 0) {
      return res.status(401).json({ error: "Usuario no encontrado" });
    }

    const user = rows[0];

    const match = await bcrypt.compare(contraseña, user.contraseña);
    if (!match) {
      return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    delete user.contraseña;
    res.json({ ok: true, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error servidor" });
  }
});

/* ============================================================
   USAR LAS RUTAS (TODAS LAS QUE TENÉS EN LA CARPETA)
============================================================ */
app.use("/api/productos", productosRoutes);
app.use("/api/clientes", clientesRoutes);
app.use("/api/proveedores", proveedoresRoutes);
app.use("/api/ventas", ventasRoutes);
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/pagos", pagosRoutes);
app.use("/api/movimientos-caja", movimientosCajaRoutes);
app.use("/api/cierres-caja", cierresCajaRoutes);

/* ============================================================
   INICIAR SERVIDOR
============================================================ */
app.listen(3000, () =>
  console.log("API escuchando en http://localhost:3000")
);