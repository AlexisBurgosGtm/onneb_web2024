function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado() + view.modal_opciones_producto()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_ficha_producto() + view.modal_nuevo_precio()}
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            
                        </div>
                        <div class="tab-pane fade" id="cuatro" role="tabpanel" aria-labelledby="home-tab">
                            
                        </div>
                        <div class="tab-pane fade" id="cinco" role="tabpanel" aria-labelledby="home-tab">
                            
                        </div>    
                    </div>

                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-uno" data-toggle="tab" href="#uno" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-dos" data-toggle="tab" href="#dos" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-tres" data-toggle="tab" href="#tres" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-cuatro" data-toggle="tab" href="#cuatro" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-cinco" data-toggle="tab" href="#cinco" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>         
                    </ul>
                </div>
               
            `
        },
        vista_listado:()=>{
            return `
            <div class="card card-rounded col-12 border-primary">
                <div class="card-body p-4">

                    <div class="row">
                        <div class="col-6">
                            <h5 class="text-primary negrita">Catálogo de Productos</h5>
                            
                            <select class="form-control" id="cmbTipoLista">
                                <option value="SI" class="negrita text-info">HABILITADOS</option>
                                <option value="NO" class="negrita text-danger">DESHABILITADOS</option>
                            </select>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label>Total Productos</label>
                                <h4 class="negrita text-danger" id="lbTotalProductos">000000</h4>
                            </div>
                        </div>
                      
                    </div>    

                </div>
            </div>
            <br>
            <div class="card card-rounded col-12 border-primary">
                <div class="card-body p-2">

                    <div class="form-group">
                        <label>Búsqueda de productos</label>
                        <input type="text" class="form-control border-primary negrita text-primary" oninput="funciones.FiltrarTabla('tblProductos','txtBuscar')" placeholder="Escriba para filtrar..." id="txtBuscar">
                    </div>
                    <table class="table table-responsive h-full" id="tblProductos">
                        <thead class="bg-primary text-white f-med">
                            <tr>
                                <td>CÓDIGO</td>
                                <td>DESCRIPCIÓN</td>
                                <td>COSTO</td>
                                <td>MARCA</td>
                                <td>TIPO</td>
                                <td>UXC</td>
                                <td>ACT</td>
                                <td>EXISTENCIA</td>
                            </tr>
                        </thead>
                        <tbody id="tblDataProductos">
                        </tbody>
                    </table>
                
                </div>
            </div>

            <button class="btn btn-success btn-bottom-r btn-circle btn-xl hand shadow" id="btnNuevoProducto">
                <i class="fal fa-plus"></i>
            </button>


            `
        },
        modal_opciones_producto:()=>{
            return `
            

            
            `
        },
        vista_ficha_producto:()=>{
            return `
            <div class="card card-rounded col-12 border-primary">
                <div class="card-body p-4" style="font-size:80%"> 
                    <div class="row">
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="form-group">
                                <label class="negrita text-primary">Código</label>
                                <input type="text" class="form-control" id="txtCodprod">
                            </div>
                            <div class="form-group">
                                <label class="negrita text-primary">Código Alterno (Barras)</label>
                                <input type="text" class="form-control" id="txtCodprod2">
                            </div>
                            <div class="form-group">
                                <label class="negrita text-primary">Descripción</label>
                                <input type="text" class="form-control" id="txtDesprod">
                            </div>
                            <div class="form-group">
                                <label class="negrita text-primary">Descripción 2</label>
                                <input type="text" class="form-control" id="txtDesprod2">
                            </div>
                            <div class="form-group">
                                <label class="negrita text-primary">Descripción 3</label>
                                <input type="text" class="form-control" id="txtDesprod3">
                            </div>
                            <div class="form-group">
                                <label class="negrita text-primary">Unidades por Caja (UxC)</label>
                                <input type="text" class="form-control" id="txtUxc">
                            </div>
                        </div>

                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        </div>
                        
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        </div>

                    </div>                   
                </div>
            </div>
            <br>
            <div class="card card-rounded col-12 border-primary">
                <div class="card-body p-2">                    
                </div>
            </div>

            <button class="btn btn-secondary btn-bottom-l btn-xl btn-circle hand shadow" id="btnAtrasTabDos">
                <i class="fal fa-arrow-left"></i>
            </button>
            `
        },
        modal_nuevo_precio:()=>{
            return `
            

            
            `
        }
    }
    
    root.innerHTML = view.body();

};

function addListeners(){

    listeners_listado();
    

    funciones.slideAnimationTabs();

};

function listeners_listado(){
    cmbEmpresa.removeEventListener('change', handle_empresa_change)
    cmbEmpresa.addEventListener('change', handle_empresa_change)

    document.getElementById('cmbTipoLista').addEventListener('change',()=>{
        get_tbl_productos();
    })

    document.getElementById('btnAtrasTabDos').addEventListener('click',()=>{
        document.getElementById('tab-uno').click();
    });
    
    let btnNuevoProducto = document.getElementById('btnNuevoProducto');
    btnNuevoProducto.addEventListener('click',()=>{
        document.getElementById('tab-dos').click();
    });

    
    get_tbl_productos();

};


function initView(){

    getView();
    addListeners();

};


function handle_empresa_change(){
    get_tbl_productos();
};

function data_productos_listado(){
    
    
    let habilitado = document.getElementById('cmbTipoLista').value;

    return new Promise((resolve,reject)=>{

        axios.post(GlobalUrlCalls + '/productos/listado',
            {
                sucursal:cmbEmpresa.value,
                token:TOKEN,
                habilitado:habilitado
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

function get_tbl_productos(){


    let container = document.getElementById('tblDataProductos');
    container.innerHTML = GlobalLoader;

    let lbTotalProductos = document.getElementById('lbTotalProductos');
    lbTotalProductos.innerText = '-----'

    let str = '';


    data_productos_listado()
    .then((data)=>{
        
        let conteo = 0;
        data.recordset.map((r)=>{
            let strClass= ''; if(Number(r.EXISTENCIA)>0){strClass='text-success'}else{strClass='text-danger'};
            conteo += 1;
            str += `
                <tr class="hand border-bottom border-primary" 
                onclick="get_detalle_producto('${r.CODPROD}','${r.DESPROD}','${r.DESPROD2}','${funciones.setMoneda(r.COSTO,'Q')}','${funciones.convertDateNormal(r.LASTUPDATE)}')">
                    <td>${r.CODPROD}</td>
                    <td>${r.DESPROD}</td>
                    <td>${funciones.setMoneda(r.COSTO,'Q')}</td>
                    <td>${r.DESMARCA}</td>
                    <td>${r.TIPOPROD}</td>
                    <td>${r.UXC}</td>
                    <td>${funciones.convertDateNormal(r.LASTUPDATE)}</td>
                    <td class="negrita ${strClass}">${r.EXISTENCIA}</td>
                </tr>
            `
        })
        container.innerHTML = str;
        lbTotalProductos.innerText = conteo;
    })
    .catch((err)=>{
        container.innerHTML = 'No hay datos para mostrar...';
        lbTotalProductos.innerText = '-----';
    })

};


function get_detalle_producto(codprod,desprod,desprod2,costo,lastupdate){



    

};


//----------------
//nuevo producto

function insert_producto(){
    

    return new Promise((resolve,reject)=>{

        axios.post(GlobalUrlCalls + '/productos/insert_producto',
            {
                sucursal:cmbEmpresa.value,
                token:TOKEN,
                codprod,
                codprod2,
                desprod,
                desprod2,
                desprod3,
                uxc,
                costo,
                codmarca,
                codclaseuno,
                codclasedos,
                codclasetres,
                lastupdate,
                tipoprod,
                exento,
                nf
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

//nuevo producto
//----------------
