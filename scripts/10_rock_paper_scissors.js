 let score = JSON.parse(localStorage.getItem('score')) ||
      {
        wins: 0,
        losses: 0,
        ties: 0
      };
      updateScoreElement();


       function playGames(playerMove)
        {
            const computerMoves = pickComputerMove();

          let result = ' ';
          if(playerMove === 'scissors')
          {
              if(computerMoves === 'rock')
              {
              result = 'lose';
              }else if(computerMoves === 'paper'){
              result = 'win';
            }else if(computerMoves === 'scissors'){
              result = 'Tie';
            }
          }
            else if(playerMove === 'paper')
          {
             if(computerMoves === 'rock')
             {
              result = 'win';
             }else if(computerMoves === 'paper')
             {
              result = 'Tie';
             }else if(computerMoves === 'scissors')
             {
              result = 'lose';
             }
          } 
          else if(playerMove === 'rock')
          {
            if(computerMoves === 'rock'){
            result = 'Tie';
            }else if(computerMoves === 'paper'){
              result = 'lose';
            }else if(computerMoves === 'scissors'){
              result = 'win';
            }
          }

          if(result === 'win')
          {
            score.wins = score.wins + 1;
          }else if(result === 'lose')
          {
            score.losses = score.losses + 1;
          }else if(result === 'Tie')
          {
            score.ties = score.ties + 1;
          }

          localStorage.setItem('score' , JSON.stringify(score));
          updateScoreElement();

      
          document.querySelector('.js_result').
          innerHTML = result;

          document.querySelector('.js_moves').
          innerHTML = ` You
      <img src="images/${playerMove}-emoji.png" alt="" class="move_icon">
      <img src="images/${computerMoves}-emoji.png" alt="" class="move_icon">
      computer`;
          
        }
        function  updateScoreElement(){
            document.querySelector('.js_score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
        }


      function pickComputerMove()
      {
        const randomnumber = Math.random();

        let computerMoves = ' ';
      
      if(randomnumber>= 0 && randomnumber <= 1/3){
        computerMoves = 'rock';
      }else if(randomnumber > 1/3 && randomnumber < 2/3){
        computerMoves = 'paper';
      }else if(randomnumber > 2/3 && randomnumber < 1){
        computerMoves = 'scissors';
      }
      console.log(computerMoves);

      return computerMoves;
      }