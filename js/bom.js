function updateTimer(timer) {
    if (timer === 0) {
        alert("EXTERMINATE!");
        document.body.innerHTML = `
        `;
    } else if (timer > 0) {
        document.getElementById("timer").innerHTML = timer;
    }
}
function defuseTheBOM(id) {
    clearInterval(id);
}


(() => {
    let detonationTimer = 5;
    const countdown = setInterval(() => {
        detonationTimer--;
        updateTimer(detonationTimer);
    }, 1000);
    const defuser = document.getElementById("defuser");
    defuser.addEventListener("click", () => {
        defuseTheBOM(countdown);
    });
})();