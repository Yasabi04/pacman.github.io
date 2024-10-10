document.addEventListener('DOMContentLoaded', () => {


    const scoreDisplay = document.getElementById('score')
    const width = 28
    const grid = document.querySelector('.grid')
    let score = 0
    const squares = []
    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1,
        1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1,
        1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1,
        1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1
    ]

    // 0 - pac-dots
    // 1 - wall
    // 2 - ghost-lair
    // 3 - power-pellet
    // 4 - empty

    function createBoard(){
        for(i = 0; i < layout.length; i++){
            const square = document.createElement('div')
            grid.appendChild(square)
            squares.push(square)

            //Layout ür jedes Quadrat

            if(layout[i] === 0){
                squares[i].classList.add('pac-dot')
            }
            if(layout[i] === 1){
                squares[i].classList.add('wall')
            }
            if(layout[i] === 2){
                squares[i].classList.add('ghost-lair')
            }
            if(layout[i] === 3){
                squares[i].classList.add('power-pellet')
            }
        }
    }

    createBoard()



    //create characters
    let pacmanCurrentIndex = 490
    squares[pacmanCurrentIndex].classList.add('pacman')

    //move pacman
    function movePacman(e){
        squares[pacmanCurrentIndex].classList.remove('pacman')
        switch(e.key){
            case 'ArrowLeft' : 
                if(
                    pacmanCurrentIndex % width !== 0 &&
                    squares[pacmanCurrentIndex -1].classList.contains('wall') === false &&
                    squares[pacmanCurrentIndex -1].classList.contains('ghost-lair') === false
                ){
                    pacmanCurrentIndex -= 1
                    squares[pacmanCurrentIndex].classList.add('left')
                }
                if(squares[pacmanCurrentIndex -1] === squares[363]){
                    pacmanCurrentIndex = 391
                }
                break
            case 'ArrowRight':
                if(
                    pacmanCurrentIndex % width < width - 1 &&
                    squares[pacmanCurrentIndex + 1].classList.contains('wall') === false &&
                    squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair') === false
                ){
                    pacmanCurrentIndex += 1
                }
                if(squares[pacmanCurrentIndex +1] === squares[392]){
                    pacmanCurrentIndex = 364
                }
                break
            case 'ArrowUp':
                if(
                    pacmanCurrentIndex - width >= 0 &&
                    squares[pacmanCurrentIndex - width].classList.contains('wall') === false &&
                    squares[pacmanCurrentIndex - width].classList.contains('ghost-lair') === false
                ){
                    pacmanCurrentIndex -= width
                }
                break
            case 'ArrowDown':
                if(
                    pacmanCurrentIndex + width < width * width &&
                    squares[pacmanCurrentIndex + width].classList.contains('wall') === false &&
                    squares[pacmanCurrentIndex + width].classList.contains('ghost-lair') === false
                ){
                    pacmanCurrentIndex += width
                }
                break
        }
        squares[pacmanCurrentIndex].classList.add('pacman')
        pacDotEaten()
        powerPelletEaten()
    }
    document.addEventListener('keyup', movePacman)

    function pacDotEaten(){
        if(squares[pacmanCurrentIndex].classList.contains('pac-dot')){
            score++
            scoreDisplay.innerHTML = score
            squares[pacmanCurrentIndex].classList.remove('pac-dot')
        }
    }

    function powerPelletEaten(){
        if(squares[pacmanCurrentIndex].classList.contains('power-pellet')){
            score += 10
            scoreDisplay.innerHTML = score
            ghosts.forEach(ghost => ghost.isScared = true)
            setInterval(unScareGhosts, 10000)
            squares[pacmanCurrentIndex].classList.remove('power-pellet')
        }
    }

    //make the ghosts stop flashing
    function unScareGhosts(){
        ghosts.forEach(ghost => ghost.isScared = false)
    }

    class Ghost {
        constructor(className, startIndex, speed){
            this.className = className
            this.startIndex = startIndex
            this.speed = speed
            this.currentIndex = startIndex
            this.isScared = false
            this.timerId = NaN
        }
    }

    const ghosts = [
        new Ghost('blinky', 348, 230),
        new Ghost('pinky', 376, 200),
        new Ghost('inky', 351, 200),
        new Ghost('clyde', 379, 150)
    ]

    console.log(ghosts)

    //draw ghosts onto grid
    
    ghosts.forEach(ghost => {
        squares[ghost.currentIndex].classList.add(ghost.className)
        squares[ghost.currentIndex].classList.add('ghost')
        squares[ghost.currentIndex].innerHTML = '<i class="fa-solid fa-ghost"></i>'
    })

    //move ghosts randomly

    ghosts.forEach(ghost => moveGhost(ghost))

    function moveGhost(ghost){
        const directions = [-1, 1, width, -width]
        let direction = directions[Math.floor(Math.random() * directions.length)]
    
        ghost.timerId = setInterval(function(){
            // Check if the next square is not a wall or ghost
            if(
                squares[ghost.currentIndex + direction].classList.contains('wall') === false &&
                squares[ghost.currentIndex + direction].classList.contains('ghost') === false
            ){
                // Remove ghost's icon and class from the current position
                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
                squares[ghost.currentIndex].innerHTML = '' // Remove the icon
    
                // Update the ghost's current position
                ghost.currentIndex += direction
    
                // Add ghost's class and icon to the new position
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
                squares[ghost.currentIndex].innerHTML = '<i class="fa-solid fa-ghost"></i>' // Add the ghost icon
            }
            else {
                // Pick a new random direction if the current one is blocked
                direction = directions[Math.floor(Math.random() * directions.length)]
            }
    
            // Make the ghost scared when applicable
            if(ghost.isScared){
                squares[ghost.currentIndex].classList.add('scared-ghost')
            }
    
            // Handle when Pacman eats the ghost
            if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pacman')){
                squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
                squares[ghost.currentIndex].innerHTML = '' // Remove the icon when ghost is eaten
                ghost.currentIndex = ghost.startIndex // Reset ghost position
                score += 100
                scoreDisplay.innerHTML = score
    
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
                squares[ghost.currentIndex].innerHTML = '<i class="fa-solid fa-ghost"></i>' // Add the ghost icon
            }
    
            checkForGameOver()
            checkForWin()
        }, ghost.speed)
    }
    

    function checkForGameOver(){
        if(
            squares[pacmanCurrentIndex].classList.contains('ghost')
        ){
            alert('Game Over!')
            ghost.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup', movePacman)
            setTimeout(function(){ alert('Game Over!')}, 500)
        }
    }

    function checkForWin(){
        //Wenn alle pac-dots und alle power-pellets gegessen wurden hat der Spieler gewonnen
        if(
            score === 274
        ){
            ghosts.forEach(ghost => clearInterval(ghost.timerId))
            document.removeEventListener('keyup', movePacman)
            alert('You have WON!')
        }
    }
})