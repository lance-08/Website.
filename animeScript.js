let totalScore = 0;

const games = document.querySelectorAll('.box');
const categories = document.querySelectorAll('.droppable');
const scoreDisplay = document.getElementById('score');
const resetButton = document.getElementById('reset-btn');
const gameContainer = document.getElementById('draggableContainer');


games.forEach(game => {
    game.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text', e.target.id);
        e.target.classList.add('draggableFormat');
    });

    game.addEventListener('dragend', (e) => {
        e.target.classList.remove('draggableFormat');
    });
});

categories.forEach(category => {
    category.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    category.addEventListener('drop', (e) => {
        e.preventDefault();
        
        const gameId = e.dataTransfer.getData('text');
        const draggedGame = document.getElementById(gameId);
        
        e.target.appendChild(draggedGame);

        const gameGenre = draggedGame.getAttribute('data-genre');
        const categoryType = e.target.getAttribute('data-category');

        if (gameGenre === categoryType) {
            totalScore += 15;
        } else {
            totalScore -= 10;
        }

        scoreDisplay.textContent = totalScore;
    });
});

resetButton.addEventListener('click', () => {
    totalScore = 0;
    scoreDisplay.textContent = totalScore;

    games.forEach(game => {
        gameContainer.appendChild(game);
    });
});
