function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    var x = Math.random() * (window.innerWidth - 3*document.getElementById('noButton').offsetWidth);
    var y = Math.random() * (window.innerHeight - 3*document.getElementById('noButton').offsetHeight);
    document.getElementById('noButton').style.left = `${x}px`;
    document.getElementById('noButton').style.top = `${y}px`;
}
