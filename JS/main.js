let banner = document.querySelector('.banner');
let arrowLeft = document.querySelector('.left');
let arrowRight = document.querySelector('.right');
let radio1 = document.querySelector('#radio1');
let radio2 = document.querySelector('#radio2');
let radio3 = document.querySelector('#radio3');
let ulContact = document.querySelector('#ulContact');
let cont = 7000;
let margin = 0;
//Rotação e controle do banner
// function trocarbanner(){
//     if (margin <= -200){
//         margin = 0;
//     }else{
//         margin -= 100;
//     }
//     banner.style.marginLeft = margin+'vw';
//     console.log(cont)
//     //ativação do radio
//     switch(margin){
//         case  0:
//             radio1.checked = true;
//             ulContact.classList.remove('backUl');
//         break;
//         case  -100:
//             radio2.checked = true;
//             ulContact.classList.add('backUl');
//         break;
//         case  -200:
//             radio3.checked = true;
//             ulContact.classList.remove('backUl');
//         break;
//     }
// }
// var slide = setInterval(trocarbanner, cont)
// function timeInterval(){
//     clearInterval(slide);
//     setInterval(trocarbanner, 8000);
// }
// radio1.addEventListener('click', function(){
//     banner.style.marginLeft = '0px';
//     margin = 0;
//     ulContact.classList.remove('backUl');
//     timeInterval;
// })
// radio2.addEventListener('click', function(){
//     banner.style.marginLeft = '-100vw';
//     margin = -100
//     ulContact.classList.add('backUl');
//     timeInterval;
// })
// radio3.addEventListener('click', function(){
//     banner.style.marginLeft = '-200vw';
//     margin = -200
//     ulContact.classList.remove('backUl');
//     timeInterval;
// })

//Controle Menu de navegação 
let menu = document.querySelector('.menu');
let menuName = document.querySelector('.menu-name');
 function menuControl(){
    if(menu.classList.contains('menuOpen')){
        menu.classList.remove('menuOpen'); 
        // menuName.classList.remove('menu-name-off');
        menuName.innerHTML = 'Menu';
        document.querySelector('#div1').classList.remove('div1');
        document.querySelector('#div2').classList.remove('div2');
        document.querySelector('#div3').classList.remove('div3');
    }else{
        menu.classList.add('menuOpen');
        // menuName.classList.add('menu-name-off');
        menuName.innerHTML = 'Fechar';
        document.querySelector('#div1').classList.add('div1');
        document.querySelector('#div2').classList.add('div2');
        document.querySelector('#div3').classList.add('div3');
    }
   
}
let btnTop = document.querySelector('#btn-top');
window.addEventListener('scroll', function(){
    if(window.scrollY > 200){
        btnTop.classList.add('btn-top-off');
    }else{
        btnTop.classList.remove('btn-top-off');
    }
})
function inicio(){
    document.documentElement.scrollTop = 0;
}

let xModal = document.querySelector('#x-modal');
let modal = document.querySelector('.container-modal');
let corpo = document.body;
let hidden = false;
function controleModal(){
    if (modal.classList.contains('modal-on')){
        modal.classList.remove('modal-on');
        corpo.style.overflow = 'auto';
    }else{
        modal.classList.add('modal-on');
        corpo.style.overflow = 'hidden';
    }
    console.log(hidden)
}

function openModal(){
    modal.classList.add('modal-on')
}   
let titleModal =  document.querySelector('.title-modal')
let imgModal = document.querySelector('#img-modal');
let pModal = document.querySelector('#modal-p')
function modalDesc(imgName, title, paragrafo){
    imgModal.setAttribute('src', 'image/diferenciais/modal/'+imgName);
    titleModal.innerHTML = title;
    pModal.innerHTML = paragrafo;
}

let btnEnviar = document.querySelector('#btn-enviar');
btnEnviar.disabled = true;
function btnHabilitar(){
    if (document.querySelector('#checkbox').checked){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('btn-disable');
    }else{
        btnEnviar.disabled = true;
        btnEnviar.classList.add('btn-disable');
    }
}



