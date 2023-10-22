
let versionapp = "OnneBusiness - modif:21/10/2023"

//document.getElementById('lbVersion').innerText = versionapp;
//<h5 class="text-white" id="lbVersion"></h5>


/*
document.getElementById('btnLogout').addEventListener('click',()=>{
    funciones.Confirmacion('¿Está seguro que desea Salir?')
    .then((value)=>{
      if(value==true){
        
          btnMenu.style="visibility:hidden";
          classNavegar.login();
          document.getElementById('menu_open').checked=false;

      }
    })
    
});
*/


//inicializa la instalacion de la app
funciones.instalationHandlers('btnInstalarApp');


function InicializarServiceWorkerNotif(){
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () =>
   navigator.serviceWorker.register('./sw.js')
    .then(registration => console.log('Service Worker registered'))
    .catch(err => 'SW registration failed'));
  };

 
  requestPermission();
}

if ('Notification' in window) {};

function requestPermission() {
  if (!('Notification' in window)) {
    //alert('Notification API not supported!');
    return;
  }
  
  Notification.requestPermission(function (result) {
    //$status.innerText = result;
  });
}


InicializarServiceWorkerNotif();




Navegar.login();


/* 
let btnMenuConfiguraciones = document.getElementById('btnMenuConfiguraciones');
btnMenuConfiguraciones.addEventListener('click',()=>{classNavegar.configuraciones()});

let btnMenuMantenimientos = document.getElementById('btnMenuMantenimientos');
btnMenuMantenimientos.addEventListener('click',()=>{classNavegar.mantenimientos()});

let btnMenuEmpleados = document.getElementById('btnMenuEmpleados');
btnMenuEmpleados.addEventListener('click',()=>{classNavegar.empleados()});

let btnMenuEnvioVoucher = document.getElementById('btnMenuEnvioVoucher');
btnMenuEnvioVoucher.addEventListener('click',()=>{classNavegar.enviar()});

let btnMenuTrabajarNomina = document.getElementById('btnMenuTrabajarNomina');
btnMenuTrabajarNomina.addEventListener('click',()=>{classNavegar.nomina()});
*/
