


function fcn_send_mail(maildestino,msn){
    
    console.log('enviando mail...')
    
    return new Promise((resolve,reject)=>{
        axios.post(GlobalUrlCalls + '/enviar_mail', {
            sucursal: GlobalCodSucursal,
            destino: maildestino,
            msg:msn
        })
        .then((response) => {
            if(response=='error'){
                reject();             
            }else{
                resolve();
            }             
        }, (error) => {
            reject();
        });
    })


};

function global_data_empresas(){
    return new Promise((resolve,reject)=>{
        axios.post(GlobalUrlCalls + '/general/empresas')
        .then((response) => {
            if(response.status.toString()=='200'){
                resolve(response.data);             
            }else{
                reject();
            }             
        }, (error) => {
            reject();
        });
    })   
};


function send_test(){

    return new Promise((resolve,reject)=>{
        axios.get(GlobalUrlServicioLocal + '/test')
        .then((response) => {
           
            if(response.status.toString()=='200'){
                funciones.Aviso(response.data.toString())
                resolve();             
            }else{
                funciones.AvisoError('No disponible');
                reject();
            }             
        }, (error) => {
            funciones.AvisoError('No disponible');
            reject();
        });
    })   
};

function global_data_nominas(){
    return new Promise((resolve,reject)=>{
        axios.post(GlobalUrlCalls + '/planillas/planillas',{sucursal:GlobalEmpnit})
        .then((response) => {
            if(response.status.toString()=='200'){
                resolve(response.data);             
            }else{
                reject();
            }             
        }, (error) => {
            reject();
        });
    })   
};


function global_data_departamentos(codplanilla,mes,anio,quincena){
    return new Promise((resolve,reject)=>{
        axios.post(GlobalUrlCalls + '/planillas/departamentos',
            {
                sucursal:GlobalEmpnit,
                codplanilla:codplanilla,
                mes:mes,
                anio:anio,
                quincena:quincena
            })
        .then((response) => {
            if(response.status.toString()=='200'){
                resolve(response.data);             
            }else{
                reject();
            }             
        }, (error) => {
            reject();
        });
    })   
};

function global_data_departamentos_todos(codplanilla){
    return new Promise((resolve,reject)=>{
        axios.post(GlobalUrlCalls + '/planillas/departamentos_todos',
            {
                sucursal:GlobalEmpnit,
                codplanilla:codplanilla
            })
        .then((response) => {
            if(response.status.toString()=='200'){
                resolve(response.data);             
            }else{
                reject();
            }             
        }, (error) => {
            reject();
        });
    })   
};



function BACKUP_global_data_departamentos(){
    return new Promise((resolve,reject)=>{
        axios.post(GlobalUrlCalls + '/planillas/departamentos',{sucursal:GlobalEmpnit})
        .then((response) => {
            if(response.status.toString()=='200'){
                resolve(response.data);             
            }else{
                reject();
            }             
        }, (error) => {
            reject();
        });
    })   
};


function global_data_empleados(codplanilla,mes,anio,quincena){
    return new Promise((resolve,reject)=>{
        axios.post(GlobalUrlCalls + '/planillas/empleados_planilla',{
            sucursal:GlobalEmpnit,
            codplanilla:codplanilla,
            mes:mes,
            anio:anio,
            quincena:quincena
        })
        .then((response) => {
            if(response.status.toString()=='200'){
                resolve(response.data);             
            }else{
                reject();
            }             
        }, (error) => {
            reject();
        });
    })   
};


function global_send_planilla_departamento(codplanilla, coddepto,quincena,mes,anio,fechavoucher){
    return new Promise((resolve,reject)=>{
        axios.get(GlobalUrlServicioLocal + '/planilla_quincena_departamento',{params:{
            sucursal:GlobalEmpnit,
            codplanilla:codplanilla,
            coddepto:coddepto,
            quincena:quincena,
            mes:mes,
            anio:anio,
            fechavoucher:fechavoucher
        }})
        .then((response) => {
            if(response.status.toString()=='200'){
                resolve();             
            }else{
                reject();
            }             
        }, (error) => {
            reject();
        });
    })   
};


function global_send_planilla_empleado(codplanilla, coddepto,quincena,mes,anio,codempleado,nomempleado,telefono,email,fechavoucher){
    return new Promise((resolve,reject)=>{
        axios.get(GlobalUrlServicioLocal + '/planilla_quincena_empleado',{params:{
            sucursal:GlobalEmpnit,
            codplanilla:codplanilla,
            coddepto:coddepto,
            quincena:quincena,
            mes:mes,
            anio:anio,
            codempleado:codempleado,
            nomempleado:nomempleado,
            telefono:telefono,
            email:email,
            fechavoucher:fechavoucher
        }})
        .then((response) => {
            if(response.status.toString()=='200'){
                resolve();             
            }else{
                reject();
            }             
        }, (error) => {
            reject();
        });
    })   
};