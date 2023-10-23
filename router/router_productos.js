const execute = require('./../connection');
const express = require('express');
const router = express.Router();



router.post("/insert_producto", async(req,res)=>{
   
    const {token,sucursal,codprod,codprod2,
        desprod,desprod2,desprod3,uxc,costo,
        codmarca,codclaseuno,codclasedos,codclasetres,
        lastupdate,tipoprod,exento,nf} = req.body;

    let qry = `
    INSERT INTO PRODUCTOS (EMPNIT,CODPROD,CODPROD2,DESPROD,
        DESPROD2,DESPROD3,UXC,CODMEDIDACOMPRA,COSTO,
        CODMARCA,CODCLAUNO,CODCLADOS,CODCLATRES,
        HABILITADO,VENCIMIENTO,INVMINIMO,EXENTO,
        NF,TIPOPROD,EXISTENCIA,LASTUPDATE)
    VALUES ('${sucursal}','${codprod}','${codprod2}',
    '${desprod}','${desprod2}','${desprod3}',${uxc},
    'UNIDAD',${costo},${codmarca},${codclaseuno},${codclasedos},
    ${codclasetres},'SI','2000-01-01',0,${exento},
    ${nf},'${tipoprod}',0,'${lastupdate}');
    `
    
    execute.QueryToken(res,qry,token);
     
});

router.post("/listado", async(req,res)=>{
   
    const { token, sucursal, habilitado } = req.body;

    let qry = `
        SELECT PRODUCTOS.CODPROD, 
            PRODUCTOS.DESPROD, PRODUCTOS.DESPROD2, PRODUCTOS.DESPROD3, 
            PRODUCTOS.UXC, PRODUCTOS.COSTO, 
            PRODUCTOS.CODMARCA, MARCAS.DESMARCA, 
            PRODUCTOS.TIPOPROD, 
            ISNULL(PRODUCTOS.LASTUPDATE,'2020-01-01') AS LASTUPDATE, 
            PRODUCTOS.EXISTENCIA
        FROM PRODUCTOS LEFT OUTER JOIN
        MARCAS ON PRODUCTOS.CODMARCA = MARCAS.CODMARCA AND PRODUCTOS.EMPNIT = MARCAS.EMPNIT
        WHERE (PRODUCTOS.HABILITADO = '${habilitado}') 
        AND (PRODUCTOS.EMPNIT = '${sucursal}')
        ORDER BY PRODUCTOS.CODPROD
    `
    
  
  
    execute.QueryToken(res,qry,token);
     
});





router.post("/listado_marcas", async(req,res)=>{
   
    const { token, sucursal } = req.body;

    let qry = `
        SELECT CODMARCA, DESMARCA FROM MARCAS WHERE EMPNIT='${sucursal}';
    `
    
  
    execute.QueryToken(res,qry,token);
     
});

router.post("/listado_claseuno", async(req,res)=>{
   
    const { token, sucursal } = req.body;

    let qry = `
        SELECT CODCLAUNO, DESCLAUNO FROM CLASIFICACIONUNO  
        WHERE EMPNIT='${sucursal}';
    `
    
  
    execute.QueryToken(res,qry,token);
     
});

router.post("/listado_proveedores", async(req,res)=>{
   
    const { token, sucursal } = req.body;

    let qry = `
        SELECT CODPROV, EMPRESA FROM PROVEEDORES  
        WHERE EMPNIT='${sucursal}';
    `
    
  
    execute.QueryToken(res,qry,token);
     
});

router.post("/listado_clasedos", async(req,res)=>{
   
    const { token, sucursal } = req.body;

    let qry = `
        SELECT CODCLADOS, DESCLADOS FROM CLASIFICACIONDOS  
        WHERE EMPNIT='${sucursal}';
    `
    
  
    execute.QueryToken(res,qry,token);
     
});





module.exports = router;