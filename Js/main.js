const nav = document.querySelector('#nav');

window.addEventListener('scroll', ()=>{
    if(window.scrollY >=100){
        nav.classList.add('top')
    }else{
        nav.classList.remove('top')
    }
});
