function flipCard(card) {
    const cardInner = card.querySelector('.card-inner');
    cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)'
      ? 'rotateY(0deg)'
      : 'rotateY(180deg)';   
  }
  function st(){

    p();
}
    function p(){
    let v=180;
     setInterval(()=>{
        if(v>=0){
        document.getElementById("t1").textContent="Timer:"+v;
     v--;
        }else{
            document.getElementById("t1").textContent="GAME OVER";
        }
     },1000);
   
};


