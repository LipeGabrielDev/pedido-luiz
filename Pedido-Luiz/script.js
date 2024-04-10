
document.getElementById('botaoSim').addEventListener('click', function() {
    window.location.href = "https://www.youtube.com/watch?v=izGwDsrQ1eQ";
});

document.getElementById('botaoNao').addEventListener('click', function() {
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);

    this.style.position = 'absolute';
    this.style.left = x + 'px';
    this.style.top = y + 'px';

});
