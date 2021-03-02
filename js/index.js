import {d, body, newWebCam, clickBtn} from './resources.js';

//Delegamos eventos
d.addEventListener('DOMContentLoaded', () =>{
    body.addEventListener('click', (e) => { 
        clickBtn(e);   
    })
})
