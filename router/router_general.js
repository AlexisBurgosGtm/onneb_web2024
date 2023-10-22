const execute = require('./../connection');
const express = require('express');
const router = express.Router();


router.post("/login", async(req,res)=>{
   
    const { u,p } = req.body;

    let qry = `
        SELECT 
            TOKEN_USUARIOS.USUARIO, 
            TOKEN_USUARIOS.TOKEN, 
            TOKEN_EMPRESAS.EMPNIT, 
            TOKEN_EMPRESAS.EMPNOMBRE
        FROM TOKEN_USUARIOS LEFT OUTER JOIN
            TOKEN_EMPRESAS ON TOKEN_USUARIOS.TOKEN = TOKEN_EMPRESAS.TOKEN
        WHERE (TOKEN_USUARIOS.USUARIO = '${u}') 
            AND (TOKEN_USUARIOS.PASS = '${p}')`
    
    execute.QueryLogin(res,qry);
     
});








module.exports = router;