const btnLightMode = document.querySelector('#btn-light-mode');
const btnDarkMode = document.querySelector('#btn-dark-mode');

let dark = true;

if(dark){
    btnDarkMode.classList.add('d-none');
    btnLightMode.classList.remove('d-none'); 
} else{
    btnLightMode.classList.add('d-none');
    btnDarkMode.classList.remove('d-none');   
}

const lightModeFunction = () => {
    let element = document.body;
    element.classList.toggle('toggleLight');
    btnDarkMode.classList.remove('d-none');
    btnLightMode.classList.add('d-none');
    dark = false;
}

const darkModeFunction = () => {
    let element = document.body;
    element.classList.toggle('toggleLight');
    btnDarkMode.classList.add('d-none');
    btnLightMode.classList.remove('d-none');
    dark = true;
}

btnLightMode.addEventListener('click', (e) => {
    lightModeFunction();

})

btnDarkMode.addEventListener('click', (e) => {
    darkModeFunction();

})