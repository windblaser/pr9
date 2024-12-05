"use strict";

let form = document.forms.signin;
let nameInput = form.name;
let ageInput = form.age;

// loginInput.onblur = function(){
//     if(!loginInput.value.includes('@')){
//       loginInput.classList.add('error__input');
//     }
// }
// loginInput.onfocus = function(){
//     if(loginInput.classList.contains('error__input')){
//         loginInput.classList.remove('error__input');
//     }
// }

form.addEventListener('submit', userSignin);
let flag = true;
function userSignin(event){
event.preventDefault();
flag = true;
nameError.innerHTML = '';
ageError.innerHTML = '';

if(nameInput.classList.contains('error__input')){
    nameInput.classList.remove('error__input');
}
if(ageInput.classList.contains('error__input')){
    ageInput.classList.remove('error__input');
}


 if(!nameInput.value){
        nameInput.classList.add('error__input');
         nameError.innerHTML = 'Введите ваше имя'
        flag = false;
      }else if (nameInput.value.length < 2){
       nameInput.classList.add('error__input');
       nameError.innerHTML = 'Введите не менее 2 символов'
        flag = false;
 }

 if(!ageInput.value){
    ageInput.classList.add('error__input');
    ageError.innerHTML = 'Введите ваш возраст'
    flag = false;
 }else if (ageInput.value.length < 4){
    ageInput.classList.add('error__input');
    ageError.innerHTML = 'Введите не менее 4 цифр'
    flag = false
    
 }
 else if(2024 - +ageInput.value < 18){
    console.log(2024 - ageInput.value)
    ageInput.classList.add('error__input');
    ageError.innerHTML = 'Вам нет 18 лет'
    flag = false
 }

 if(flag == true){
     userSignin.innerHTML = `Добро пожаловать, ${nameInput.value}`
 }
}