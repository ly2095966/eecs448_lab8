let currentImage = 0

function moveLeft() {
    document.querySelector(`#img${currentImage}`).style.display = 'none';
    if (!currentImage) currentImage = 4
    else currentImage--
    document.querySelector(`#img${currentImage}`).style.display = 'flex'
}

function moveRight() {
    document.querySelector(`#img${currentImage}`).style.display = 'none';
    if (currentImage === 4) currentImage = 0
    else currentImage++
    document.querySelector(`#img${currentImage}`).style.display = 'flex';
}