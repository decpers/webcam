//Sirve para no tener que escribir tanto caracteres en nuestro código 
export const d = document;
//Esta variable sirve para delagación de evento
export const body = d.getElementById('body');
//
const btn = d.getElementById('btn-actions');
//Caja que muestra mensaje cuando la cámara está apagada o en pause
const message = d.getElementById('message');

//Este objeto indica el estado de la cámara web
let obj = {
    active: false
}

//Esta función sirve de interruptor
export const clickBtn = (e) => {
    if(e.target.classList.contains('btn-actions')){
        if(obj.active === false){
            obj.active = true;
            newWebCam(obj)
        }else{
            obj.active = false;
            newWebCam(obj)       
        }
    }
}

//Esta función activa o desactiva la cámara dependiendo del estado
export const newWebCam = (obj) => {
    navigator.mediaDevices.getUserMedia({
        video: {
            //Establecemos las medidas de la pantalla de la cámara
             width:200, height: 200
        }
    }).then((stream)=> {
        
        let webCam = d.getElementById('webcam');
        webCam.srcObject =  stream;
        //Activamos y mostramos lo que está capturando la cámara
        if(obj.active === true){
            btn.innerHTML = 'Desactivar'
            webCam.classList.remove('d-none')
            message.classList.add('d-none')
            btn.classList.add('btn-red')
            webCam.play();
            
        }else{
            //Pausamos y ocultamos lo que está capturando la cámara
            btn.innerHTML = 'Activar'
            webCam.classList.add('d-none')
            message.classList.remove('d-none')
            btn.classList.remove('btn-red')
            webCam.pause();  
        }      
    })

    .catch(error => {
        console.log(error);
    })    
}

