const execute = require('../connection');
const express = require('express');
const router = express.Router();


router.post("/ordenes_pendientes", async(req,res)=>{
   
    const { token, sucursal } = req.body;

    let qry = `
        SELECT  ORDENES_SOPORTE.NOORDEN, 
                ORDENES_SOPORTE.FECHA, 
                CLIENTES.NOMBRECLIENTE AS NOMCLIE, 
                CLIENTES.TELEFONOCLIENTE AS TELCLIE, 
                ORDENES_SOPORTE.CONTACTO, 
                EQUIPOS.CODEQUIPO, 
                EQUIPOS.MARCA, 
                EQUIPOS.MODELO, 
                ORDENES_SOPORTE.ESTADO_EQUIPO, 
                ORDENES_SOPORTE.DESCRIPCION_FALLA, 
                ORDENES_SOPORTE.ACCESORIOS, 
                ORDENES_SOPORTE.CLAVE, 
                ORDENES_SOPORTE.PATRON, 
                ORDENES_SOPORTE.FECHA_ENTREGA, 
                ORDENES_SOPORTE.STATUS, 
                ORDENES_SOPORTE.NOTAS_FINALES, 
                ORDENES_SOPORTE.COBRO_INSUMOS, 
                ORDENES_SOPORTE.COBRO_MANO_OBRA
        FROM ORDENES_SOPORTE LEFT OUTER JOIN
                EQUIPOS ON ORDENES_SOPORTE.EMPNIT = EQUIPOS.EMPNIT AND ORDENES_SOPORTE.CODEQUIPO = EQUIPOS.CODEQUIPO LEFT OUTER JOIN
                CLIENTES ON ORDENES_SOPORTE.EMPNIT = CLIENTES.EMPNIT AND ORDENES_SOPORTE.CODCLIENTE = CLIENTES.CODCLIENTE
        WHERE (ORDENES_SOPORTE.STATUS <> 'FINALIZADO') 
                AND (ORDENES_SOPORTE.EMPNIT = '${sucursal}');`;
    

    execute.QueryToken(res,qry,token);
     
});


router.post("/detalle_orden", async(req,res)=>{
   
    const { token, sucursal, coddoc, correlativo } = req.body;

    let qry = `  `;
    

    
    execute.QueryToken(res,qry,token);
     
});





module.exports = router;


