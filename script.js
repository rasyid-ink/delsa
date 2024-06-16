document.addEventListener('DOMContentLoaded', (event) => {
    const mauButton = document.getElementById('mauButton');
    const gaMauButton = document.getElementById('gaMauButton');
    const sticker1 = document.getElementById('sticker1');
    const sticker2 = document.getElementById('sticker2');
    const sticker3 = document.getElementById('sticker3');
    const sticker4 = document.getElementById('sticker4');
    const endButton = document.getElementById('endButton');
    const videoPlayer = document.getElementById('videoPlayer');
    const continueButton = document.getElementById('continueButton');

    mauButton.addEventListener('click', () => {
        document.getElementById('slide1').style.display = 'none';
        document.getElementById('slide2').style.display = 'flex';
    });

    gaMauButton.addEventListener('mouseover', () => {
        const maxWidth = window.innerWidth - gaMauButton.offsetWidth;
        const maxHeight = window.innerHeight - gaMauButton.offsetHeight;
        const randomX = Math.floor(Math.random() * maxWidth);
        const randomY = Math.floor(Math.random() * maxHeight);
        gaMauButton.style.left = `${randomX}px`;
        gaMauButton.style.top = `${randomY}px`;
    });

    sticker1.addEventListener('click', () => {
        moveStickerRandomly(sticker2);
        sticker1.style.display = 'none';
        sticker2.style.display = 'flex';
    });

    sticker2.addEventListener('click', () => {
        moveStickerRandomly(sticker3);
        sticker2.style.display = 'none';
        sticker3.style.display = 'flex';
    });

    sticker3.addEventListener('click', () => {
        sticker3.style.display = 'none';
        sticker4.style.display = 'flex';
        sticker4.style.position = 'absolute';
        sticker4.style.left = sticker1.style.left;
        sticker4.style.top = sticker1.style.top;
    });

    sticker4.addEventListener('click', () => {
        alert('Yaudah aku nyerah');
        document.getElementById('slide2').style.display = 'none';
        document.getElementById('slide3').style.display = 'flex';
    });

    function moveStickerRandomly(element) {
        const maxWidth = window.innerWidth - element.offsetWidth;
        const maxHeight = window.innerHeight - element.offsetHeight;
        const randomX = Math.floor(Math.random() * maxWidth);
        const randomY = Math.floor(Math.random() * maxHeight);
        element.style.left = `${randomX}px`;
        element.style.top = `${randomY}px`;
        element.style.position = 'absolute';
    }
    continueButton.addEventListener('click', () =>{
        document.getElementById('slide3').style.display = 'none';
        document.getElementById('slide4').style.display = 'flex';
    });

    endButton.addEventListener('click', () => {
        document.getElementById('slide4').style.display = 'none';
        document.getElementById('slide5').style.display = 'flex';
    });

    // Event listener for video end
    videoPlayer.addEventListener('click', () => {
        endButton.style.display = 'block';
    });

    
});
