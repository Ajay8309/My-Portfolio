

document.querySelector('.nav-toggle').addEventListener('click', function(){
    document.querySelector('.nav-list').classList.toggle("show-links");
    // document.querySelector('.navigation').classList.toggle("shadow");
    // document.querySelector('.nav-list').classList.toggle("shadow");
});


const colors = ["white", "rgba(133,122,200)", " rgb(93, 98, 90)"];


const btn = document.querySelector('.flip');

btn.addEventListener('click',function(){
    const randomNumber = getRandomNumber();
   
    document.body.style.backgroundColor = colors[randomNumber];

  if(randomNumber!=0){
    document.querySelector('.intro').classList.add("color-white");
    document.querySelector('.nav-list2').classList.add('nav-black');
    document.querySelector('.navigation').classList.add('nav-black')
    document.querySelector('.nav-toggle').classList.add('toggle-white')
    document.querySelector('.flip').classList.add('flip-white')
    // document.querySelector('.nav-link1').classList.add('.link1-accent')
    
    
}else{
    document.querySelector('.intro').classList.remove("color-white");
    document.querySelector('.nav-list2').classList.remove('nav-black');
    document.querySelector('.navigation').classList.remove('nav-black')
    document.querySelector('.nav-toggle').classList.remove('toggle-white')
    document.querySelector('.flip').classList.remove('flip-white')
    
}


  
})


function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }



