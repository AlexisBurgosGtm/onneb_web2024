function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                            ${view.vista_listado() + view.modal_detalle_orden()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_nuevo() + view.modal_buscar_cliente() + view.modal_buscar_equipo()}
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_listado_finalizas()}
                        </div>
                        <div class="tab-pane fade" id="cuatro" role="tabpanel" aria-labelledby="home-tab">
                           
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
                            <a class="nav-link negrita text-danger" id="tab-cuatro" data-toggle="tab" href="#tres" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>         
                    </ul>
                </div>
               
            `
        },
        vista_listado:()=>{
            return `
            <div class="card card-rounded shadow">
                <div class="card-body p-2">
                    <div class="row">
                        <div class="col-6">
                            <h5 class="negrita text-personal">Órdenes de Trabajo Pendientes</h5>
                            <button class="btn btn-outline-danger hand shadow" id="btnListaFinalizadas">
                                <i class="fal fa-list"></i> Órdenes Finalizadas
                            </button>
                        </div>
                        <div class="col-6">
                            <h5 class="negrita text-danger" id="lbTotalOrdenes">--</h5>
                        </div>
                    </div>
                    <hr class="solid">
                    <div class="table-responsive col-12">
                        <table class="table table-responsive table-hover col-12">
                            <thead class="bg-personal text-white" id="tblOrdenes">
                                <tr>
                                    <td>FECHA / ORDEN NO.</td>
                                    <td>EQUIPO</td>
                                    <td>CLIENTE</td>
                                    <td>FECHA ENTREGA</td>
                                    <td>STATUS</td>
                                </tr>
                            </thead>
                            <tbody id="tblDataOrdenes">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <button class="btn btn-circle btn-xl btn-success btn-bottom-r hand shadow" id="btnNuevo">
                <i class="fal fa-plus"></i>
            </button>
            `
        },
        vista_nuevo:()=>{
            return `
            <div class="row">

                <div class="col-sm-12 col-md-6 col-xl-6 col-lg-6">
                    <div class="card card-rounded shadow">
                        <div class="card-body p-4" style="font-size:90%">

                            <h5 class="text-danger negrita">Datos de la orden</h5>
                            
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group">
                                        <label class="">Fecha</label>
                                        <input id="txtFecha" class="form-control negrita" type="date">
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label class="">Fecha Entrega</label>
                                        <input id="txtFechaEntrega" class="form-control negrita" type="date">
                                    </div>
                                </div>
                            </div>
                            
                            <br>

                            <div class="form-group">
                                <label class="">Cliente</label>
                                <div class="input-group">
                                    <input id="txtNomclie" class="form-control negrita" type="text" placeholder="" disabled>
                                    <button class="btn btn-info hand" id="btnBuscarCliente">
                                        <i class="fal fa-search"></i>
                                    </button>
                                </div>
                            </div>

                            <div class="form-group">
                                <label class="">Contacto</label>
                                <input id="txtContacto" class="form-control negrita" type="text">
                            </div>
                        
                        </div>
                    </div>
                </div>

                <div class="col-sm-12 col-md-6 col-xl-6 col-lg-6">
                    <div class="card card-rounded shadow">
                        <div class="card-body p-4" style="font-size:90%">
                            
                            <h5 class="text-danger negrita">Datos del Equipo</h5>
                           
                            <div class="form-group">
                                <label class="">Nombre del Equipo</label>
                                <div class="input-group">
                                    <input id="txtEquipo" class="form-control negrita" type="text" placeholder="" disabled>
                                    <button class="btn btn-info hand" id="btnBuscarEquipo">
                                        <i class="fal fa-search"></i>
                                    </button>
                            </div>
                            <br>
                            <div class="form-group">
                                <label class="">Marca</label>
                                <input id="txtMarca" class="form-control negrita" type="text" placeholder="" disabled>
                            </div>
                            <div class="form-group">
                                <label class="">Modelo</label>
                                <input id="txtModelo" class="form-control negrita" type="text" placeholder="" disabled>
                            </div>
                                                
                        </div>
                    </div>
                </div>

            </div>
        </div>
            
            <hr class="solid">

            <div class="card card-rounded shadow col-12 h-full">
                <div class="card-body p-4" style="font-size:90%">
                    
                    <div class="row">
                        <div class="col-6 text-left">
                            <h5 class="text-danger negrita">Detalles de la Orden</h5>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label>Contraseña / PIN</label>
                                <input type="text" class="form-control negrita text-danger" id="txtClave">
                            </div>
                        </div>
                    </div>
                    
                    <br>

                    <div class="row">
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="form-group">
                                <label class="">Estado del Equipo</label>
                                <textarea id="txtEstado" class="form-control negrita" rows="2"></textarea>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="form-group">
                                <label class="">Descripción de la Falla</label>
                                <textarea id="txtFalla" class="form-control negrita" rows="2"></textarea>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="form-group">
                                <label class="">Accesorios</label>
                                <textarea id="txtAccesorios" class="form-control negrita" rows="2"></textarea>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
                
            <button class="btn btn-circle btn-xl btn-secondary btn-bottom-l hand shadow" onclick="document.getElementById('tab-uno').click()">
                <i class="fal fa-arrow-left"></i>
            </button>

            <button class="btn btn-circle btn-xl btn-info btn-bottom-r hand shadow" id="btnGuardarOrden">
                <i class="fal fa-save"></i>
            </button>
            `
        },
        modal_buscar_cliente:()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_clientes">
                <div class="modal-dialog modal-dialog-left modal-lg">
                    <div class="modal-content">
                        <div class="modal-body p-4" style="font-size:80%">

                            <div class="card card-rounded shadow col-12">
                                <div class="card-body">
                                    <h5 class="negrita text-danger">Datos del Cliente</h5>
                                    <div class="">
                                        <label>Nombre cliente</label>
                                        <input type="text" class="form-control" id="txtCNomclie">
                                    </div>
                                    <div class="">
                                        <label>Contacto</label>
                                        <input type="text" class="form-control" id="txtCContacto">
                                    </div>
                                   
                                    <button class="btn btn-info hand shadow" id="btnCGuardar">
                                        <i class="fal fa-save"></i> Guardar Cliente
                                    </button>
                                </div>
                            </div>
                                    
                            <div class="table-responsive col-12">
                                
                                <input placeholder="Escriba para filtrar" type="text" class="form-control bg-amarillo" oninput="funciones.FiltrarTabla('tblClientes','txtBuscarCliente')" id="txtBuscarCliente">
                                <br>
                                <table class="table table-responsive h-full" id="tblClientes">
                                    <thead class="bg-secondary text-white">
                                        <tr>
                                            <td>CLIENTE</td>
                                            <td>CONTACTO</td>
                                        </tr>
                                    </thead>
                                    <tbody id="tblDataClientes"></tbody>
                                </table>
                        </div>
            
                           
                           
                        </div>
                        <div class="modal-footer text-left">
                            <button class="btn btn-secondary btn-circle btn-xl hand shadow" data-dismiss="modal">
                                <i class="fal fa-arrow-left"></i>
                            </button>
                        </div>      
                    </div>
                </div>
            </div>
            `
        },
        modal_buscar_equipo:()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_equipos">
                <div class="modal-dialog modal-dialog-right modal-lg">
                    <div class="modal-content">

                        <div class="modal-body p-4" style="font-size:80%">
                        
                            <div class="card card-rounded shadow col-12">
                                <div class="card-body">

                                    <h5 class="negrita text-danger">Datos del Equipo</h5>
                                    <div class="">
                                        <label>Descripción del Equipo</label>
                                        <input type="text" class="form-control" id="txtEDescripcion">
                                    </div>
                                    <div class="">
                                        <label>Marca</label>
                                        <input type="text" class="form-control" id="txtEMarca">
                                    </div>
                                    <div class="">
                                        <label>Modelo/serie</label>
                                        <input type="text" class="form-control" id="txtEModelo">
                                    </div>

                                    <button class="btn btn-info hand shadow" id="btnEGuardar">
                                        <i class="fal fa-save"></i> Guardar Equipo
                                    </button>

                                </div>
                            </div>

                           <hr class="solid">

                           <div class="table-responsive col-12">
                                
                                <input placeholder="Escriba para filtrar" type="text" class="form-control bg-amarillo" oninput="funciones.FiltrarTabla('tblEquipos','txtBuscarEquipo')" id="txtBuscarEquipo">
                                <br>
                                <table class="table table-responsive h-full" id="tblEquipos">
                                    <thead class="bg-secondary text-white">
                                        <tr>
                                            <td>DESCRIPCIÓN</td>
                                            <td>MARCA</td>
                                            <td>MODELO/SERIE</td>
                                        </tr>
                                    </thead>
                                    <tbody id="tblDataEquipos"></tbody>
                                </table>
                           </div>
                           
                        </div>
                        <div class="modal-footer text-left">
                            <button class="btn btn-secondary btn-circle btn-xl hand shadow" data-dismiss="modal">
                                <i class="fal fa-arrow-left"></i>
                            </button>
                        </div>  

                    </div>
                </div>
            </div>
            `
        },
        vista_finalizar:()=>{
            return `
                <div class="card card-rounded shadow">
                    <div class="card-body p-2">
                
                
                    </div>
                </div>
                <button class="btn btn-circle btn-xl btn-secondary btn-bottom-l hand shadow" onclick="document.getElementById('tab-uno').click()">
                    <i class="fal fa-arrow-left"></i>
                </button>
            `
        },
        modal_detalle_orden:()=>{
            return `
            <div class="modal fade js-modal-settings modal-backdrop-transparent modal-with-scroll" tabindex="-1" role="dialog" aria-hidden="true" id="modal_detalle">
                <div class="modal-dialog modal-dialog-right modal-xl">
                    <div class="modal-content">
                        <div class="modal-body p-4" style="font-size:80%">
                        
                            <div class="card card-rounded shadow col-12">
                                <div class="card-body">

                                    <div class="row">
                                        <div class="col-6">
                                            <label class="negrita text-personal">No. Orden: </label><label class="negrita text-danger" id="lbDetNoorden"></label>
                                        </div>
                                        <div class="col-6">
                                            <label class="negrita text-personal">Fecha:</label>
                                            <input type="date" class="form-control" id="txtDetFecha">
                                        </div>
                                    </div>
                                  

                                    <div class="form-group col-12">
                                        <label class="negrita text-personal">Equipo</label>
                                        <input type="text" class="form-control" id="txtDetDesesquipo">
                                        <label class="negrita text-personal">Contraseña / PIN</label>
                                        <input type="text" class="form-control" id="txtDetClave">
                                    </div>

                                    <div class="form-group col-12">
                                        <label class="negrita text-personal">Estado del Equipo</label>
                                        <textarea class="form-control" id="txtDetEstado"></textarea>
                                    
                                        <label class="negrita text-personal">Descripción de la Falla</label>
                                        <textarea class="form-control" id="txtDetFalla"></textarea>
                                    
                                        <label class="negrita text-personal">Accesorios del Equipo</label>
                                        <textarea class="form-control" id="txtDetAccesorios"></textarea>
                                    </div>

                                    <div class="row">
                                        <div class="col-4">
                                            <button class="btn btn-warning hand shadow" id="btnDetIniciar">
                                                <i class="fal fa-sync"></i> Iniciar
                                            </button> 
                                        </div>
                                        <div class="col-4">
                                            <button class="btn btn-success hand shadow" id="btnDetFinalizar">
                                                <i class="fal fa-check"></i> Finalizar
                                            </button> 
                                        </div>
                                        <div class="col-4">
                                            <button class="btn btn-danger hand shadow" id="btnDetEliminar">
                                                <i class="fal fa-trash"></i> Eliminar
                                            </button> 
                                        </div>
                                    </div>


                         
                                </div>
                            </div>

                            

                           
                        </div>
                        <div class="modal-footer">
                            <div class="row">
                                <div class="col-6 text-left">
                                    <button class="btn btn-secondary btn-circle btn-xl hand shadow" data-dismiss="modal">
                                        <i class="fal fa-arrow-left"></i>
                                    </button>
                                </div>
                            </div>
                        </div>    

                    </div>
                </div>
            </div>
            `
        },
        vista_listado_finalizas:()=>{
        return `
            <div class="card card-rounded shadow">
                <div class="card-body p-2">

                    <div class="row">
                        <div class="col-6">
                            <h5 class="negrita text-danger">Órdenes de Trabajo Finalizadas</h5>
                            <div class="form-group">
                                <label>Seleccione mes y año</label>

                                <div class="input-group">
                                    <select class="negrita form-control" id="cmbMes"></select>
                                    <select class="negrita form-control" id="cmbAnio"></select>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <h5 class="negrita text-danger" id="lbTotalOrdenesF">--</h5>
                        </div>
                    </div>

                    <hr class="solid">

                    <div class="table-responsive col-12">
                        <table class="table table-responsive table-hover col-12">
                            <thead class="bg-personal text-white" id="tblOrdenesF">
                                <tr>
                                    <td>FECHA / ORDEN NO.</td>
                                    <td>CLIENTE / EQUIPO</td>
                                    <td>FALLA DEL EQUIPO</td>
                                    <td>DIAGNOSTICO</td>
                                    <td>FINALIZADO</td>
                                    <td>COBRO</td>
                                    <td>INSUMOS</td>
                                </tr>
                            </thead>
                            <tbody id="tblDataOrdenesF">
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            
            <button class="btn btn-circle btn-xl btn-secondary btn-bottom-l hand shadow" onclick="document.getElementById('tab-uno').click()">
                <i class="fal fa-arrow-left"></i>
            </button>
            `
        }
    }

    root.innerHTML = view.body();

};

function addListeners(){

    cmbEmpresa.removeEventListener('change', handle_empresa_change)
    cmbEmpresa.addEventListener('change', handle_empresa_change)

    
    document.getElementById('cmbMes').innerHTML = funciones.ComboMeses();
    document.getElementById('cmbAnio').innerHTML = funciones.ComboAnio();
    let f = new Date();
    document.getElementById('cmbMes').value = f.getMonth()+1;
    document.getElementById('cmbAnio').value = f.getFullYear();
   
    document.getElementById('btnNuevo').addEventListener('click',()=>{
        document.getElementById('tab-dos').click();
        clean_nuevo();
    });



    document.getElementById('btnBuscarCliente').addEventListener('click',()=>{
        $("#modal_clientes").modal('show');
        classClientes.listado('tblDataClientes');

    });

    document.getElementById('btnBuscarEquipo').addEventListener('click',()=>{
        $("#modal_equipos").modal('show');
        classEquipos.listado('tblDataEquipos');

    });


    // ORDENES
    //--------------------------------

    get_listado_ordenes();

    let btnGuardarOrden = document.getElementById('btnGuardarOrden');
    btnGuardarOrden.addEventListener('click',()=>{

        funciones.Confirmacion('¿Está seguro que desea GENERAR esta NUEVA ORDEN?')
        .then((value)=>{
            if(value==true){



                let contacto = document.getElementById('txtContacto').value || 'SN';
                let estado = document.getElementById('txtEstado').value || 'SN';
                let falla = document.getElementById('txtFalla').value || 'SN';
                let accesorios = document.getElementById('txtAccesorios').value || 'SN';
                let clave = document.getElementById('txtClave').value || 'SN';
                
                if(GlobalSelectedCodclie==0){funciones.AvisoError('Seleccione un cliente');return;}
                if(GlobalSelectedCodEquipo==0){funciones.AvisoError('Seleccione un equipo');return;}
                if(contacto=='SN'){funciones.AvisoError('Debes agregar el contacto');return;}
                if(estado=='SN'){funciones.AvisoError('Debes indicar el Estado del Equipo');return;}
                if(falla=='SN'){funciones.AvisoError('Debes indicar la Falla del Equipo');return;}
                

                let data = {
                    token:TOKEN, 
                    sucursal:cmbEmpresa.value, 
                    fecha:funciones.devuelveFecha('txtFecha'), 
                    codcliente:GlobalSelectedCodclie, 
                    contacto:contacto, 
                    codequipo:GlobalSelectedCodEquipo, 
                    estado:funciones.limpiarTexto(estado), 
                    falla:funciones.limpiarTexto(falla), 
                    accesorios:funciones.limpiarTexto(accesorios), 
                    clave:clave, 
                    patron:'', 
                    fecha_entrega:funciones.devuelveFecha('txtFechaEntrega')
                }

                
                btnGuardarOrden.disabled = true;
                btnGuardarOrden.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                insert_orden(data)
                .then((data)=>{
                    funciones.Aviso('Orden ingresada exitosamente !!');
                    document.getElementById('tab-uno').click();

                    get_listado_ordenes();

                    btnGuardarOrden.disabled = false;
                    btnGuardarOrden.innerHTML = `<i class="fal fa-save"></i>`;
    
                })
                .catch(()=>{
                    btnGuardarOrden.disabled = false;
                    btnGuardarOrden.innerHTML = `<i class="fal fa-save"></i>`;
    
                })



            }
        })

    });

    let btnDetIniciar = document.getElementById('btnDetIniciar');
    btnDetIniciar.addEventListener('click',()=>{

        funciones.Confirmacion('¿Está seguro que desea marcar esta orden como iniciada?')
        .then((value)=>{
            if(value==true){

                btnDetIniciar.disabled = true;

                iniciar_orden(GlobalSelectedNoOrden)
                .then(()=>{
                    funciones.Aviso('Orden iniciada exitosamente!!');
                    btnDetIniciar.disabled = false;
                    $("#modal_detalle").modal('hide');
                    get_listado_ordenes();
                })
                .catch(()=>{
                    btnDetIniciar.disabled = false;
                    funciones.AvisoError('No se pudo iniciar esta orden');
                })

            }
        })
    });

    let btnDetEliminar = document.getElementById('btnDetEliminar');
    btnDetEliminar.addEventListener('click',()=>{

        funciones.Confirmacion('¿Está seguro que desea ELIMINAR esta orden?')
        .then((value)=>{
            if(value==true){
                
                btnDetEliminar.disabled = true;

                eliminar_orden(GlobalSelectedNoOrden)
                .then(()=>{
                    funciones.Aviso('Orden ELIMINADA exitosamente!!');
                    btnDetEliminar.disabled = false;
                    $("#modal_detalle").modal('hide');
                    get_listado_ordenes();
                })
                .catch(()=>{
                    btnDetEliminar.disabled = false;
                    funciones.AvisoError('No se pudo ELIMINAR esta orden');
                })

            }
        })
    });


    //--------------------------------
    // ORDENES
    

    //------------------------------------------------
    //equipos



    let btnEGuardar = document.getElementById('btnEGuardar');
    btnEGuardar.addEventListener('click',()=>{

        funciones.Confirmacion('¿Está seguro que desea CREAR este equipo?')
        .then((value)=>{
            if(value==true){


                let descripcion = document.getElementById('txtEDescripcion').value || 'SN';
                let marca = document.getElementById('txtEMarca').value || 'SN';
                let modelo = document.getElementById('txtEModelo').value || 'SN';
                
                if(descripcion=='SN'){funciones.AvisoError('Escriba una descripción');return;};
                if(marca=='SN'){funciones.AvisoError('Escriba una marca');return;};
                if(modelo=='SN'){funciones.AvisoError('Escriba una modelo/serie');return;};
                
                classEquipos.insert(descripcion,marca,modelo)
                .then(()=>{
                    funciones.Aviso('Equipo creado exitosamente!!');
                    
                    classEquipos.listado('tblDataEquipos');

                    document.getElementById('txtEDescripcion').value = '';
                    document.getElementById('txtEMarca').value = '';
                    document.getElementById('txtEModelo').value = '';
                })
                .catch(()=>{
                    funciones.AvisoError('No se creó el nuevo equipo');
                })

            }
        })

    });

    // equipos
    //------------------------------------------------

    // CLIENTES
    // -----------------------------------------------


    let btnCGuardar = document.getElementById('btnCGuardar');
    btnCGuardar.addEventListener('click',()=>{

        funciones.Confirmacion('¿Está seguro que desea CREAR este Cliente?')
        .then((value)=>{
            if(value==true){


                let nombre = document.getElementById('txtCNomclie').value || 'SN';
                let contacto = document.getElementById('txtCContacto').value || 'SN';
                
                if(nombre=='SN'){funciones.AvisoError('Escriba un nombre de cliente');return;};
                if(contacto=='SN'){funciones.AvisoError('Escriba un contacto');return;};

                classClientes.insert(nombre,contacto)
                .then(()=>{
                    funciones.Aviso('Cliente creado exitosamente!!');
                    
                    classClientes.listado('tblDataClientes');

                    document.getElementById('txtCNomclie').value = '';
                    document.getElementById('txtCContacto').value = '';
                })
                .catch(()=>{
                    funciones.AvisoError('No se creó el nuevo cliente');
                })

            }
        })

    });

    // -----------------------------------------------
    // CLIENTES


    let btnListaFinalizadas = document.getElementById('btnListaFinalizadas');
    btnListaFinalizadas.addEventListener('click',()=>{
        document.getElementById('tab-tres').click();

    })





    funciones.slideAnimationTabs();

};

function initView(){

    getView();
    addListeners();

};

function handle_empresa_change(){
    document.getElementById('tab-uno').click();
    get_listado_ordenes();
};

function get_color_status(status){
    let str = '';
    switch (status) {
        case 'PENDIENTE':
            str = 'negrita bg-danger text-white'
            break;
        case 'PROCESO':
            str = 'negrita bg-warning text-secondary'
            break;
        case 'FINALIZADA':
            str = 'negrita bg-info text-white'
            break;
    }
    
    return str;

};

function get_listado_ordenes(){

    let container = document.getElementById('tblDataOrdenes');
    container.innerHTML = GlobalLoader;

    let contador = 0;

    let data = {
        sucursal:cmbEmpresa.value,
        token:TOKEN
    };

    GF.get_data_qry('/ordenes/ordenes_pendientes',data)
    .then((datos)=>{
        
        let str = '';
        datos.recordset.map((r)=>{
            contador += 1;
            str += `
                    <tr class="hand" onclick="get_detalle_orden('${r.NOORDEN}','${r.FECHA}','${r.NOMCLIE}','${r.CONTACTO}','${r.DESCRIPCION}','${r.CLAVE}','${r.ESTADO}','${r.FALLA}','${r.ACCESORIOS}')">
                        <td><b class="text-danger">No. ${r.NOORDEN}</b>
                            <br>
                            <small class="negrita text-danger">${funciones.convertDateNormal(r.FECHA)}</small>
                        </td>
                        <td>${r.MARCA} MOD: ${r.MODELO}</td>
                        <td>${r.NOMCLIE}
                            <br>
                            <small>Contacto: ${r.CONTACTO}</small>
                        </td>
                        <td>${funciones.convertDateNormal(r.FECHA_ENTREGA)}</td>
                        <td class="${get_color_status(r.STATUS)}">${r.STATUS}</td>
                    </tr>
            `
        })
        container.innerHTML = str;
        document.getElementById('lbTotalOrdenes').innerText =`Ordenes: ${contador.toString()}`; 
    })
    .catch(()=>{
        container.innerHTML = 'No hay datos para mostrar...';
        document.getElementById('lbTotalOrdenes').innerText = '---';
    })


};

function insert_orden(data){
    return new Promise((resolve,reject)=>{
           
        GF.get_data_qry('/ordenes/insert_orden',data)
        .then((datos)=>{
            if(Number(datos.rowsAffected[0])==1){
                resolve(datos);
            }else{
                reject();
            }
            
        })
        .catch(()=>{
            reject();
        })

    })
}

function get_detalle_orden(noorden,fecha,nomclie,contacto,desequipo,clave,estado,falla,accesorios){

    GlobalSelectedNoOrden = Number(noorden);

    document.getElementById('lbDetNoorden').innerText = noorden.toString();
    document.getElementById('txtDetFecha').value = fecha.replace('T00:00:00.000Z','');
    //document.getElementById('txtDetNomclie').value = nomclie;
    //document.getElementById('txtDetContacto').value = contacto;
    document.getElementById('txtDetDesesquipo').value = desequipo;
    document.getElementById('txtDetClave').value = clave;
    document.getElementById('txtDetEstado').value = estado;
    document.getElementById('txtDetFalla').value = falla;
    document.getElementById('txtDetAccesorios').value = accesorios;
    //document.getElementById('')
    
    $("#modal_detalle").modal('show');
};

function iniciar_orden(noorden){
    return new Promise((resolve,reject)=>{
           let data ={
                token:TOKEN,
                sucursal:cmbEmpresa.value,
                noorden:noorden
           }
        GF.get_data_qry('/ordenes/start_orden',data)
        .then((datos)=>{
            if(Number(datos.rowsAffected[0])==1){
                resolve();
            }else{
                reject();
            }
            
        })
        .catch(()=>{
            reject();
        })

    })
}

function eliminar_orden(noorden){
    return new Promise((resolve,reject)=>{
           let data ={
                token:TOKEN,
                sucursal:cmbEmpresa.value,
                noorden:noorden
           }
        GF.get_data_qry('/ordenes/delete_orden',data)
        .then((datos)=>{
            if(Number(datos.rowsAffected[0])==1){
                resolve();
            }else{
                reject();
            }
            
        })
        .catch(()=>{
            reject();
        })

    })
}

function clean_nuevo(){

            //la fecha se vuelve a calcular con el botón nueva orden
            document.getElementById('txtFecha').value = funciones.getFecha();
            document.getElementById('txtFechaEntrega').value = funciones.getFecha();
    
            document.getElementById('txtContacto').value='';
            document.getElementById('txtEstado').value='';
            document.getElementById('txtFalla').value='';
            document.getElementById('txtAccesorios').value='';
            document.getElementById('txtClave').value='';
                
            GlobalSelectedCodEquipo = 0;
            GlobalSelectedCodclie = 0;

};


function fcn_seleccionar_equipo(codequipo,descripcion,marca,modelo){

    GlobalSelectedCodEquipo = Number(codequipo);
    
    document.getElementById('txtEquipo').value = descripcion;
    document.getElementById('txtMarca').value = marca;
    document.getElementById('txtModelo').value = modelo;

    $("#modal_equipos").modal('hide');


};

function fcn_eliminar_equipo(codequipo,idbtn){
    
    
    let btnEliminar = document.getElementById(idbtn);

    funciones.Confirmacion('¿Está seguro que desea ELIMINAR este equipo?')
    .then((value)=>{
        if(value==true){
            
            btnEliminar.disabled = true;
            btnEliminar.innerHTML = `<i class="fal fa-trash"></i> Eliminando....`;

            classEquipos.delete(codequipo)
            .then(()=>{
                funciones.Aviso('Equipo ELIMINADO exitosamente!!')
                btnEliminar.disabled = true;
                btnEliminar.innerHTML = `<i class="fal fa-trash"></i> Eliminar`;
                classEquipos.listado('tblDataEquipos');
            })
            .catch(()=>{
                funciones.Aviso('No se pudo Eliminar');
                btnEliminar.disabled = false;
                btnEliminar.innerHTML = `<i class="fal fa-trash"></i> Eliminar`;
            })
        }
    })
    
};


function fcn_seleccionar_cliente(codcliente,nomclie,contacto){

    GlobalSelectedCodclie = Number(codcliente);
    
    document.getElementById('txtNomclie').value = nomclie;
    document.getElementById('txtContacto').value = contacto;

    $("#modal_clientes").modal('hide');


};

function fcn_eliminar_cliente(codcliente,idbtn){
    
    
    let btnEliminar = document.getElementById(idbtn);

    funciones.Confirmacion('¿Está seguro que desea ELIMINAR este Cliente?')
    .then((value)=>{
        if(value==true){
            
            btnEliminar.disabled = true;
            btnEliminar.innerHTML = `<i class="fal fa-trash"></i> Eliminando....`;

            classClientes.delete(codcliente)
            .then(()=>{
                funciones.Aviso('Cliente ELIMINADO exitosamente!!')
                btnEliminar.disabled = true;
                btnEliminar.innerHTML = `<i class="fal fa-trash"></i> Eliminar`;
                classClientes.listado('tblDataClientes');
            })
            .catch(()=>{
                funciones.Aviso('No se pudo Eliminar');
                btnEliminar.disabled = false;
                btnEliminar.innerHTML = `<i class="fal fa-trash"></i> Eliminar`;
            })
        }
    })
    
};


function get_listado_ordenes_finalizadas(){

    let container = document.getElementById('tblDataOrdenesF');
    container.innerHTML = GlobalLoader;

    let mes = document.getElementById('cmbMes').value;
    let anio = document.getElementById('cmbAnio').value;

    let contador = 0;

    let data = {
        sucursal:cmbEmpresa.value,
        token:TOKEN,
        mes:mes,
        anio:anio
    };

    GF.get_data_qry('/ordenes/ordenes_finalizadas',data)
    .then((datos)=>{
        
        let str = '';
        datos.recordset.map((r)=>{
            contador += 1;
            str += `
                    <tr class="hand">
                        <td><b class="text-danger">No. ${r.NOORDEN}</b>
                            <br>
                            <small class="negrita text-danger">${funciones.convertDateNormal(r.FECHA)}</small>
                        </td>
                        <td>${r.DESCRIPCION}
                            <br>
                            <small>${r.NOMCLIE}</small>
                        </td>
                        <td>${r.FALLA}</td>
                        <td>${r.DIAGNOSTICO}</td>
                        <td>${funciones.convertDateNormal(r.FECHA_FINALIZADO)}</td>
                        <td>${funciones.setMoneda(r.COBRO,'Q')}</td>
                        <td>${funciones.setMoneda(r.INSUMOS,'Q')}</td>
                    </tr>
            `
        })
        container.innerHTML = str;
        document.getElementById('lbTotalOrdenes').innerText =`Ordenes: ${contador.toString()}`; 
    })
    .catch(()=>{
        container.innerHTML = 'No hay datos para mostrar...';
        document.getElementById('lbTotalOrdenes').innerText = '---';
    })


};


let classEquipos = {
    insert:(descripcion,marca,modelo)=>{
        return new Promise((resolve,reject)=>{
            let data = {
                sucursal:cmbEmpresa.value,
                token:TOKEN,
                descripcion:descripcion,
                marca:marca,
                modelo:modelo,
                creado:funciones.getFecha()
            };
        
            GF.get_data_qry('/equipos/insert',data)
            .then((datos)=>{
                resolve();
            })
            .catch(()=>{
                reject();
            })

        })
    },
    listado:(idcontainer)=>{
        return new Promise((resolve,reject)=>{
            let data = {
                sucursal:cmbEmpresa.value,
                token:TOKEN
            };

            let container = document.getElementById(idcontainer);
            container.innerHTML = GlobalLoader;
            let contador = 0;

            GF.get_data_qry('/equipos/listado',data)
            .then((datos)=>{
                let str = '';
                datos.recordset.map((r)=>{
                    let idBtn = `btnEliminar${r.CODEQUIPO}`;
                    str += `
                    <tr>
                        <td>${r.DESCRIPCION}
                            <br>
                            <button class="btn btn-sm btn-success hand shadow" onclick="fcn_seleccionar_equipo('${r.CODEQUIPO}','${r.DESCRIPCION}','${r.MARCA}','${r.MODELO}')">
                                <i class="fal fa-plus"></i> Seleccionar
                            </button>
                        </td>
                        <td>${r.MARCA}</td>
                        <td>${r.MODELO}
                            <br>
                            <button class="btn btn-sm btn-danger hand shadow" id="${idBtn}" onclick="fcn_eliminar_equipo('${r.CODEQUIPO}','${idBtn}')">
                                <i class="fal fa-trash"></i> Eliminar
                            </button>
                        </td>
                    </tr>
                    `
                })
                container.innerHTML = str;
            })
            .catch(()=>{
                container.innerHTML = 'No hay datos para mostrar...';
            })
        

        })
    },
    delete:(codequipo)=>{
        return new Promise((resolve,reject)=>{
            let data = {
                sucursal:cmbEmpresa.value,
                token:TOKEN,
                codequipo:codequipo
            };
        
            GF.get_data_qry('/equipos/delete',data)
            .then((datos)=>{
                resolve();
            })
            .catch(()=>{
                reject();
            })

        })
    }
};


let classClientes = {
    insert:(nombre,contacto)=>{
        return new Promise((resolve,reject)=>{
            let data = {
                sucursal:cmbEmpresa.value,
                token:TOKEN,
                nombre:nombre,
                contacto:contacto,
                creado:funciones.getFecha()
            };
        
            GF.get_data_qry('/clientes/insert',data)
            .then((datos)=>{
                resolve();
            })
            .catch(()=>{
                reject();
            })

        })
    },
    listado:(idcontainer)=>{
        return new Promise((resolve,reject)=>{
            let data = {
                sucursal:cmbEmpresa.value,
                token:TOKEN
            };

            let container = document.getElementById(idcontainer);
            container.innerHTML = GlobalLoader;
            
            GF.get_data_qry('/clientes/listado',data)
            .then((datos)=>{
                let str = '';
                datos.recordset.map((r)=>{
                    let idBtn = `btnEliminar${r.CODCLIENTE}`;
                    str += `
                    <tr>
                        <td>${r.NOMCLIE}
                            <br>
                            <button class="btn btn-sm btn-success hand shadow" onclick="fcn_seleccionar_cliente('${r.CODCLIENTE}','${r.NOMCLIE}','${r.CONTACTO}')">
                                <i class="fal fa-plus"></i> Seleccionar
                            </button>
                        </td>
                        <td>${r.CONTACTO}
                            <br>
                            <button class="btn btn-sm btn-danger hand shadow" id="${idBtn}" onclick="fcn_eliminar_cliente('${r.CODCLIENTE}','${idBtn}')">
                                <i class="fal fa-trash"></i> Eliminar
                            </button>
                        </td>
                    </tr>
                    `
                })
                container.innerHTML = str;
            })
            .catch(()=>{
                container.innerHTML = 'No hay datos para mostrar...';
            })
        

        })
    },
    delete:(codcliente)=>{
        return new Promise((resolve,reject)=>{
            let data = {
                sucursal:cmbEmpresa.value,
                token:TOKEN,
                codcliente:codcliente
            };
        
            GF.get_data_qry('/clientes/delete',data)
            .then((datos)=>{
                resolve();
            })
            .catch(()=>{
                reject();
            })

        })
    }
};
