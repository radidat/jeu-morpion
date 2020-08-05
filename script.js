
(function () {

    let pions = document.querySelectorAll('#game div')
    let reset = document.querySelector('#reset')
    let symboles = ['X', 'O'];
    let restart = document.querySelector('#restart')
    let afficheScoreX = document.querySelector('#scoreX')
    let afficheScoreO = document.querySelector('#scoreO')
    let tour = 0
    let scoreX = 0
    let scoreO = 0
  
  
  
    infoScore(afficheScoreO, ` Score du joueur O: ${scoreO}`)
    infoScore(afficheScoreX, `Score du joueur X: ${scoreX}`)

  
  
  
  
    for (let i = 0; i < pions.length; i++) {
      pions[i].addEventListener('click', function (e) {
        pions[i].textContent = symboles[tour]
        pions[i].classList.add('symbole')
  
        afficheVainqueur(symboles, tour)
  
  
        tour = tour === 0 ? 1 : 0;
  
     
      })
    }

  
  
    restart.addEventListener('click', (e) => {
      e.preventDefault()
     
      let pionsT = document.querySelectorAll('#game div')
      pionsT.forEach((element) => {
        element.textContent = '';
        element.style.backgroundColor = '';
      })
  
    })
    reset.addEventListener('click', (e) => {
      e.preventDefault()
      tour = 0
      scoreX = 0
      scoreO = 0
      infoScore(afficheScoreO, ` Score du joueur O: ${scoreO}`)
      infoScore(afficheScoreX, `Score du joueur X: ${scoreX}`)
      pions.forEach((element) => {
  
        element.innerText = null;
        element.style.backgroundColor = null;
      })
  
    })
  
  
  
  
  
  
  
  
  
  
  
    let afficheVainqueur = (joueurs, tour) => {
      if (pions.item(0).innerText == joueurs[tour] &&
        pions.item(1).innerText == joueurs[tour] &&
        pions.item(2).innerText == joueurs[tour]) {
        pions.item(0).style.backgroundColor = "#5CB85C";
        pions.item(1).style.backgroundColor = "#5CB85C";
        pions.item(2).style.backgroundColor = "#5CB85C";
        score(pions.item(0), pions.item(1), pions.item(2))
        return true;
      }
  
      if (pions.item(3).innerText === joueurs[tour] &&
        pions.item(4).innerText === joueurs[tour] &&
        pions.item(5).innerText === joueurs[tour]) {
        pions.item(3).style.backgroundColor = "#5CB85C";
        pions.item(4).style.backgroundColor = "#5CB85C";
        pions.item(5).style.backgroundColor = "#5CB85C";
        score(pions.item(3), pions.item(4), pions.item(5))
    
      }
  
      if (pions.item(6).innerText === joueurs[tour] &&
        pions.item(7).innerText === joueurs[tour] &&
        pions.item(8).innerText === joueurs[tour]) {
        pions.item(6).style.backgroundColor = "#5CB85C";
        pions.item(7).style.backgroundColor = "#5CB85C";
        pions.item(8).style.backgroundColor = "#5CB85C";
        score(pions.item(6), pions.item(7), pions.item(8))

      }
  
      if (pions.item(0).innerText === joueurs[tour] &&
        pions.item(3).innerText === joueurs[tour] &&
        pions.item(6).innerText === joueurs[tour]) {
        pions.item(0).style.backgroundColor = "#5CB85C";
        pions.item(3).style.backgroundColor = "#5CB85C";
        pions.item(6).style.backgroundColor = "#5CB85C";
        score(pions.item(0), pions.item(3), pions.item(6))
    
      }
  
      if (pions.item(1).innerText === joueurs[tour] &&
        pions.item(4).innerText === joueurs[tour] &&
        pions.item(7).innerText === joueurs[tour]) {
        pions.item(1).style.backgroundColor = "#5CB85C";
        pions.item(4).style.backgroundColor = "#5CB85C";
        pions.item(7).style.backgroundColor = "#5CB85C";
        score(pions.item(1), pions.item(4), pions.item(7))
    
      }
  
      if (pions.item(2).innerText === joueurs[tour] &&
        pions.item(5).innerText === joueurs[tour] &&
        pions.item(8).innerText === joueurs[tour]) {
        pions.item(2).style.backgroundColor = "#5CB85C";
        pions.item(5).style.backgroundColor = "#5CB85C";
        pions.item(8).style.backgroundColor = "#5CB85C";
        score(pions.item(2), pions.item(5), pions.item(8))
    
      }
  
      if (pions.item(0).innerText === joueurs[tour] &&
        pions.item(4).innerText === joueurs[tour] &&
        pions.item(8).innerText === joueurs[tour]) {
        pions.item(0).style.backgroundColor = "#5CB85C";
        pions.item(4).style.backgroundColor = "#5CB85C";
        pions.item(8).style.backgroundColor = "#5CB85C";
        score(pions.item(0), pions.item(4), pions.item(8))

      }
  
      if (pions.item(2).innerText === joueurs[tour] &&
        pions.item(4).innerText === joueurs[tour] &&
        pions.item(6).innerText === joueurs[tour]) {
        pions.item(2).style.backgroundColor = "#5CB85C";
        pions.item(4).style.backgroundColor = "#5CB85C";
        pions.item(6).style.backgroundColor = "#5CB85C";
        score(pions.item(2), pions.item(4), pions.item(6))
     
      }
    }

  
    function score(pion1, pion2, pion3) {
  
      if (pion1.innerText === 'X' && pion2.innerText === 'X' && pion3.innerText === 'X') {
  
        scoreX += 1
  
        infoScore(afficheScoreX, `Score du joueur X: ${scoreX}`)
  
      } else if (pion1.innerText === 'O' && pion2.innerText === 'O' && pion3.innerText === 'O') {
  
        scoreO += 1

        infoScore(afficheScoreO, ` Score du joueur O: ${scoreO}`)
  
      }
  
    }
  
    function infoScore(joueur, point) {
      joueur.innerText = point
  
    }
  

  
  
  
  
  })()