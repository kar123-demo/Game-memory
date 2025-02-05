let v=100;
let moves=0;
let c=0;
setInterval(()=>{
  document.getElementById("t1").textContent="timer:"+v;
  v--;
},1500);
function flipCard(card) {
    const cardInner = card.querySelector('.card-inner');
    cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)'
      ? 'rotateY(0deg)'
      : 'rotateY(180deg)';  
       
  
   
    moves++;
  
    if(moves%2==0) {
      c++;
    document.getElementById("m1").textContent = `Moves: ${c}`;
  }
  }
  
   
