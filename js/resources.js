
export const d = document;
export const body = d.getElementById('body');
const btn = d.getElementById('btn-actions');
const message = d.getElementById('message');

let obj = {
    value: true,
    active: false
}



export const newWebCam = (obj) => {
    navigator.mediaDevices.getUserMedia({
        video: {
             width:200, height: 200
        }
    }).then((stream)=> {
        
        let webCam = d.getElementById('webcam');

        webCam.srcObject =  stream;
        if(obj.active === true){
            btn.innerHTML = 'Desactivar'
            webCam.classList.remove('d-none')
            message.classList.add('d-none')
            btn.classList.add('btn-red')
            webCam.play();
            
        }else{
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