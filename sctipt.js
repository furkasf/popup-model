const showModule = document.getElementById('open');
const closeModule = document.getElementById('close');
const masage = document.querySelector('.container');
//const body = document.getElementsByTagName('body'), if select these code oter elment cont select problay body crepunding all


showModule.addEventListener('click',function(){
    masage.style.display = 'inline-block';
    //body.style.opacity = '0.5'
})

closeModule.addEventListener('click',function(){
    masage.style.display = 'none';
})