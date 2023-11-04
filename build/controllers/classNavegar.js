let lbForm = document.getElementById('lbForm');

let Navegar = {
    login:()=>{
        funciones.loadScript('../views/login/view_login.js','root')
        .then(async()=>{
            initView();
        })
    },
    inicio:()=>{
        switch (Number(GlobalNivelUsuario)) {
            case 1:
                Navegar.inicio_administrador();
                break;
            case 2:

                break;
            case 3:
                Navegar.inicio_ventas();
                break;
        }
    },
    inicio_administrador:()=>{
        funciones.loadScript('../views/inicio_administrador.js','root')
        .then(async()=>{
            initView();
        })
    },
    inicio_ventas:()=>{
        funciones.loadScript('../views/inicio_ventas.js','root')
        .then(async()=>{
            initView();
        })
    },
    pos:()=>{
        funciones.loadScript('../views/pos/view_pos.js','root')
        .then(async()=>{
            initView();
        })
    },
    app_autoventa:()=>{
        funciones.loadScript('../views/apps/app_autoventa.js','root')
        .then(async()=>{
            initView();
        })
    },
    mantenimientos_productos:()=>{
        funciones.loadScript('../views/productos/view_productos.js','root')
        .then(async()=>{
            initView();
        })
    },
    mantenimientos_empleados:()=>{
        funciones.loadScript('../views/empleados/view_empleados.js','root')
        .then(async()=>{
            //lbForm.innerText = "Empleados";
            initView();
        })
    },
 
}