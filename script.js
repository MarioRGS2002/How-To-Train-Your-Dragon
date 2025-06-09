document.addEventListener('DOMContentLoaded', function() {
    var bloco = document.querySelector('.bloco2');
    if (bloco) {
        bloco.addEventListener('click', function() {
            window.location.href = 'pages/dragoes.html';
        });
    }
    var bloco = document.querySelector('.bloco1');
    if (bloco) {
        bloco.addEventListener('click', function() {
            window.location.href = 'pages/personagens.html';
        });
    }
});
document.querySelectorAll('.wallpaper-thumb').forEach(img => {
    img.onclick = function() {
        document.getElementById('modal-wallpaper').style.display = "block";
        document.getElementById('img-expandida').src = this.src;
    }
});
document.querySelector('.close-modal').onclick = function() {
    document.getElementById('modal-wallpaper').style.display = "none";
}
window.onclick = function(event) {
    if (event.target == document.getElementById('modal-wallpaper')) {
        document.getElementById('modal-wallpaper').style.display = "none";
    }
}