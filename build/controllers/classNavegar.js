let lbForm = document.getElementById('lbForm');

let Navegar = {
    login:()=>{
        funciones.loadScript('../views/login/view_login.js','root')
        .then(async()=>{
            lbForm.innerText = "Inicio de Sesión";
            initView();
        })
    },
    pos:()=>{
        funciones.loadScript('../views/pos/view_pos.js','root')
        .then(async()=>{
            lbForm.innerText = "Punto de Venta (POS)";
            initView();
        })
    },
    mantenimientos_productos:()=>{
        funciones.loadScript('../views/productos/view_productos.js','root')
        .then(async()=>{
            lbForm.innerText = "Catálogo de Productos y Precios";
            initView();
        })
    },
 
}