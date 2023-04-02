let form = document.getElementById('form')
let userName = document.getElementById('userName')
let userEmail = document.getElementById('userEmail')
let phone = document.getElementById('userPhone')
let message = document.getElementById('userMessage')

function checkForm(){
    let nameErrorP = document.getElementsByClassName('errorP')[0]
    let userText =  userName.value
    let checkName = /^[A-Za-zа-яА-Я ]+$/;
    userName.classList.remove('redInput')
    nameErrorP.hidden = true
    if(!checkName.test(userText)){
        userName.classList.add('redInput')
        nameErrorP.hidden = false
        return false
    }
   
   
    let checkEmail =  /[a-z0-9_-]+@[a-z0-9-]+/i;
    let emailErrorP = document.getElementsByClassName('errorP')[1]
    userEmail.classList.remove('redInput')
    emailErrorP.hidden = true
    if(userEmail.value.length < 3 || !checkEmail.test(userEmail.value)){
        userEmail.classList.add('redInput')
        emailErrorP.hidden = false
        return false
    }

  
    let phoneVal =  phone.value
    let checkPhone = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
    let phoneErrorP = document.getElementsByClassName('errorP')[2]
    phone.classList.remove('redInput')
    phoneErrorP.hidden = true  
    if(!checkPhone.test(phoneVal)){
        phone.classList.add('redInput')
        phoneErrorP.hidden = true
        return false
    }

   
    message.classList.remove('redInput')
    if(message.value.length < 5){
        message.classList.add('redInput')  
        return false    
    }
    return true
}


window.onload = function(){
    if(localStorage.getItem('userName')){
        userName.value = localStorage.getItem('userName')
    }
    if (localStorage.getItem('userEmail')) {
        userEmail.value = localStorage.getItem('userEmail')
    }
    if (localStorage.getItem('userPhone')) {
        phone.value = localStorage.getItem('userPhone')
    }
   
}

form.oninput = () =>{
    checkForm()
    toLocalStorage()  
}


function toLocalStorage() {
    let userNameItem = userName.value
    let userEmailItem = userEmail.value
    let userPhoneItem = phone.value
    console.log(userPhoneItem);
    localStorage.setItem('userName', userNameItem);
    localStorage.setItem('userEmail', userEmailItem);
    localStorage.setItem('userPhone', userPhoneItem);
}

function deleteStorageItems(){
    localStorage.removeItem('userName')
    localStorage.removeItem('userEmail')
    localStorage.removeItem('userPhone')
    userName.value = ""
    userEmail.value = ""
    phone.value = ""
   
}

document.addEventListener('keydown', function(e) {
    if (e.code === 'Enter') {
        document.getElementById("submitBtn").onclick="checkForm()";
    }
});




        
