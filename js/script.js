// Dark and Light Mode
let themeBtn = document.querySelector('#theme-btn');

themeBtn.onclick = () =>{
    themeBtn.classList.toggle('fa-sun');
    if(themeBtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }
    else{
        document.body.classList.remove('active');
    }
}
// 
