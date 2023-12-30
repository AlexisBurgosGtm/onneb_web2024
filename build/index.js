
let versionapp = "Modif: 29.12.2023"

var sceneL = document.getElementById('sceneL');
var parallaxInstanceL = new Parallax(sceneL);




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


Mousetrap.bind(['command+e', 'ctrl+e'], function(e) {
  $('#modalErrores').modal('show');
  
  return false;
});


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
