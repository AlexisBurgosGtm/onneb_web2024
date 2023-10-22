function getView(){
    let view = {
        login : ()=>{
            return `
        <div class="row">
     
            <div class="col-md-3 col-sm-0 col-lg-0 col-lx-0">
            </div>

            <div class="col-md-6 col-sm-12 col-lg-6 col-lx-6">
   
                <div class="card shadow p-2 card-rounded border-primary">
                    <div class="card-header text-center bg-white">
                        <div class="row">
                            <div class="col-12">
                                <img id="imgLogo" src="./favicon.png" width="110" height="80" ondblclick="send_test()">                            
                            </div>    
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="" id="frmLogin" autocomplete="off">
                           
                            <div class="form-group">
                                <label class="negrita text-primary">Usuario:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="fal fa-user"></i>
                                        </span>
                                    </div>
                                    <input class="form-control" type="text" id="txtUser" placeholder="Escriba su usuario" required="true">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="negrita text-primary">Clave:</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="fal fa-lock"></i>
                                        </span>
                                    </div>
                                    <input class="form-control" type="password" id="txtPass" placeholder="Escriba su contraseña" required="true">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6" align="left">  
                                    <small class="text-secondary negrita">${versionapp}</small>
                                </div>
                                <div class="col-6" align="right">
                                    <button class="btn btn-primary btn-xl shadow btn-circle" id="btnIniciar">
                                        <i class="fal fa-unlock"></i>  
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="col-md-3 col-sm-0 col-lg-3 col-lx-3">
            </div>
            `
        }
    };

    root.innerHTML = view.login();
};


function addListeners(){
  

        TOKEN = '';
        data_empresas = [];
        cmbEmpresa.innerHTML = `<option value=''>No hay empresas disponibles...</option>`;

        let btnIniciar = document.getElementById('btnIniciar');
        btnIniciar.addEventListener('click',()=>{
            
            let u = document.getElementById('txtUser').value || '';
            let p = document.getElementById('txtPass').value || '';

            btnIniciar.innerHTML = `<i class="fal fa-unlock fa-spin"></i>`;
            btnIniciar.disabled = true;

            login(u,p)
            .then((data)=>{
                
                btnIniciar.innerHTML = `<i class="fal fa-lock"></i>`;
                btnIniciar.disabled = false;

                data_empresas = data.recordset;

                //btnMenu.style = "visibility:visible";
                //GlobalEmpnit = '';
                
                GlobalUsuario = u;
                let str = '';
                data_empresas.map((r)=>{
                    TOKEN = r.TOKEN;
                    str += `<option value='${r.EMPNIT}'>${r.EMPNOMBRE}</option>`
                });
                cmbEmpresa.innerHTML = str;

                Navegar.mantenimientos_productos();
            })
            .catch(()=>{
                
                btnIniciar.innerHTML = `<i class="fal fa-lock"></i>`;
                btnIniciar.disabled = false;

                GlobalEmpnit='';
                funciones.AvisoError('No se pudo iniciar sesión');
            })
        })


};


function initView(){
   getView();
   addListeners();

};




function login(u,p){
    
    
    return new Promise((resolve,reject)=>{

        let data = [{EMPNIT:'ZPRUEBAS',TOKEN:'ONNE'}]

        //resolve(data);
        //return;

        axios.post(GlobalUrlCalls + '/general/login',
            {
                u:u,
                p:p
            })
        .then((response) => {
            if(response.status.toString()=='200'){
                let data = response.data;
                if(Number(data.rowsAffected[0])>0){
                    resolve(data);             
                }else{
                    reject();
                }            
            }else{
                reject();
            }             
        }, (error) => {
            reject();
        });
    })   

};