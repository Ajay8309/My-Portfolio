
document.querySelector('.nav-toggle').addEventListener('click',function(){
    document.querySelector('.nav-list').classList.toggle('show-links');
})

document.querySelector('.close-btn').addEventListener('click',function(){
    document.querySelector('.nav-list').classList.remove('show-links');
    console.log("bla bla")
})


const colors = ["white", "rgba(133,122,200)", " rgb(93, 98, 90)"];


const btn = document.querySelector('.flip');

btn.addEventListener('click',function(){
    const randomNumber = getRandomNumber();
   
    document.body.style.backgroundColor = colors[randomNumber];

  if(randomNumber!=0){
    document.querySelector('.intro').classList.add("color-white");
    document.querySelector('.about-me-body').style.color = 'white';   
     document.querySelector('.my-skills').classList.add('color-white');
    document.querySelector('.section-title-skills').style.color = 'white';
    document.querySelector('.section-title-about').style.color = 'white';
    
}else{
    document.querySelector('.intro').classList.remove("color-white");
    document.querySelector('.flip').classList.remove('flip-white');
    document.querySelector('.my-skills').classList.remove('color-white');
    document.querySelector('.section-title-skills').style.color = 'black';
    document.querySelector('.about-me-body').style.color = 'black';   
    document.querySelector('.section-title-about').style.color = 'black';
}
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }

