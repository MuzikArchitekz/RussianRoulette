const boton = document.getElementById("boton");
const result = document.getElementById("result");
const roulette = document.querySelector('.wrapper');
const veredict = document.getElementById("veredict");

function reset() {
  //Master reset button
  location.reload(true/false);
}

function startAnima() {
  const main = document.querySelector(".main");
  main.classList.toggle("running");
  boton.style.display = "none";
}

function dropTheResult(ms) {
  let score = 0;
  setTimeout(function(){
    const rdm = Math.floor(Math.random() * 10);
      if (rdm > 5) {
           veredict.innerHTML = "You live!";
           result.classList.add("vida");
           roulette.style.display = "none";
      } else {
          veredict.innerHTML = "You die!";
          result.classList.add("muerte");
          roulette.style.display = "none";
      } 
      result.style.display = "flex";    
  }, ms);  
}


boton.addEventListener('click', () => {
      startAnima();
      dropTheResult(4000);
      randomResult();
}, false);


