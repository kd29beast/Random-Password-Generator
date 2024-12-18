const passwordd = document.getElementById('passwordd');
const btn = document.getElementsByClassName('btn')
const length = 8;

const uppercase= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const number = "0123456789";
const specialchar = "!@#%&*^={}[]()-_~";

const allchar = uppercase + lowercase + specialchar + number;

function passwordval(){
let password = ''
password+=uppercase[Math.floor(Math.random()*uppercase.length)]
password+=lowercase[Math.floor(Math.random()*lowercase.length)]
password+=number[Math.floor(Math.random()*number.length)]
password+=specialchar[Math.floor(Math.random()*specialchar.length)]

while(length > password.length){
    password+=allchar[Math.floor(Math.random()*allchar.length)]
}
passwordd.value = password

}

function copy(){
    passwordd.select();
    document.execCommand('copy')
}