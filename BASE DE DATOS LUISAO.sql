use luisao;
select*from usuarios;
select*from proveedores;
select*from productos;
select*from clientes;
select*from pagos;
select*from cajas;
select*from ventas;
select*from cierre_caja;
select*from detalles_pago;
select*from detalles_venta;
select*from movimientos_caja;

-- agrgando datos tabla usuarios 
insert into usuarios values(1,'Fernando','12345','Roque suarez','admin','2025-11-08 19:00:00');
 insert into usuarios values (2,'ROMINA','123456','ROMINA DAIANA GONZALEZ','admin','2025-11-08 10:00:00');
 insert into usuarios values (3,'LUIS','123456','LUIS CARLOS MEDINA','ADMIN','2025-11-08  10:15:00');
 
 


 -- cargando info productos
insert into productos values (1,'001','Pantalon combate','pantalon tactico de alta resistencia para operaciones especiales',8,2025-12-05);
insert into productos values(2,'002','Camisa chaterrera','camisa diseñada para ser funcional y duradera resistente al desgaste con propiedades de transpirabilidad y secado rapido',8,'2025-11-01  10:00:00');
insert into productos values (3,'003','Botas tacticas acero','botas de alta resistencia en terrenos dificiles',8,'2025-11-02 11:00:00');
insert into productos values (4,'004','Guantes tacticos','guantes de alta resistencia para proteccion de mano',8,'2025-11-03 10:30:00');
insert into productos values (5,'005','CINTO TACTICO','ALTA RESISTENCIA',8,'2025-11-05 12:00:00');
insert into productos values (6,'006','mochila tactic','resistente',8,'2025-11-06 13:00:00');

-- agregando info proveedores
insert into proveedores values (1,'RERDA','SALVERDI',20-12345678-2,12345678,'AV Belgrano','3813005349','2025-10-01 10:00:00');
 insert into proveedores values (2,'ACERO BOTAS','FRANCA',20-24680246-6,24680246,'Distrito industrial','551698145','2025-10-02 10:30:00');
 insert into proveedores values (3,'TACTICAL PREMIL','CASARES',20-17123456-6,17123456,'Carlos castelar','5523568880','2025-10-02 11:00:00');
 insert into proveedores values (4,'CONDOR OUTDOOR','SPENCER TIEN',20-16123456-6,'16123456','San german','9782144858','2025-10-02 11:30:00');
 

 -- agreando info clientes 
 insert into clientes values(1,'Raul','Lopez','3813123456','rl@gmail.com','44123456','Alvarez Condarco','2025-12-01 09:00:00');
 insert into clientes values (2,'Esteban',' Diaz','381223344','ESTa@gmail.com','44123765','Aveaneda','2025-12-01 10:30:00');
 insert into clientes values (3,'Liliana','Diaz','381556432','LD@gmail.com','41265432','Hpolito Yrigoyen','2025-12-02 10:45:00');
 insert into clientes values (4,'CAMILA','GONZALEZ','381564387','cg@gmail.com','35765423','avellaneda','2025-12-02 13:00:00');


-- actualizando cuit proveedores
update proveedores set cuit = '12345661' where id_proveedor =1;
update proveedores set cuit = '201234566' where id_proveedor =2;
 update proveedores set cuit = '201265437' where id_proveedor =3;
update proveedores set cuit= '2016345765' where id_proveedor =4;

-- agregando datos precios 
insert into precios values (1,1,1,15.000,'2021-12-01');
insert into precios values (2,2,1,20.000,'2025-12-01');
insert into precios values (3,3,1,125.000,'2025-12-02');
insert into precios values (4,4,2,50.000,'2025-12-02');
 
 
-- agregando info ventas 
insert  into ventas  values(1,1,1,'2025-12-04 10:00:00',35.000,'pendiente');
insert  into ventas values (2,2,2,'2025-12-04  11:00:00',125.000,'pagada');
 insert  into ventas  values(3,3,1,'2025-12-04 10:00:00',50.000,'pendiente');
 
