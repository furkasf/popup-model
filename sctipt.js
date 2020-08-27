const showModule = document.getElementById('open');
const closeModule = document.getElementById('close');
const masage = document.querySelector('.container');
//const showModule = document.getElementById('open');

showModule.addEventListener('click',function(){
    masage.style.display = 'block';
})

closeModule.addEventListener('click',function(){
    masage.style.display = 'none';
})