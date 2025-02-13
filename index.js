
function dijo_si() {
    window.location.href = 'mylove.html';
}

function dijo_no(buttonId) {
    const button = document.getElementById(buttonId);
    button.style.position = 'absolute';
    button.style.top = Math.random() * (window.innerHeight - button.offsetHeight) + 'px';
    button.style.left = Math.random() * (window.innerWidth - button.offsetWidth) + 'px';
}