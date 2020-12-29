var username = document.querySelector('#username');
username.addEventListener('keyup',function(){
    var userKosong = document.getElementById('userKosong');
    if (username.value.length == 0 || username.value.length < 6) {
        username.style.border = "1px solid red";
        userKosong.style.display = "block";
        return false;
    }
    else{
        username.style.border = "1px solid #40a8c4";
        userKosong.style.display = "none";
    }
})

var email = document.querySelector('#email');
email.addEventListener('keyup',function(){
    var emailKosong = document.getElementById('emailKosong');
    if (email.value.length == 0 || email.value.length < 9) {
        email.style.border = "1px solid red";
        emailKosong.style.display = "block";
        return false;
    }
    else{
        email.style.border = "1px solid #40a8c4";
        emailKosong.style.display = "none";
    }
})

var password = document.querySelector('#password');
password.addEventListener('keyup',function(){
    var passKosong = document.getElementById('passKosong');
    if (password.value.length == 0 || password.value.length < 8) {
        password.style.border = "1px solid red";
        passKosong.style.display = "block";
        return false;
    }
    else{
        password.style.border = "1px solid #40a8c4";
        passKosong.style.display = "none";
    }
})

var diisi = document.querySelector('.kiri form #kosong')
function validasi(event) {
    if (username.value== 0 || username.value.length < 6) {
        diisi.style.display = "block";
        return false;
    }else if (email.value == 0 || email.value.length < 9) {
       diisi.style.display = "block";
        return false;
    }else if (password.value == 0 || password.value.length < 8) {
       diisi.style.display = "block";
        return false;
    }else{
        alert('Sign Up Berhasil');
    }
}