(() => {
    const addBtn = document.querySelector("addBox");
    addBtn.addEventListener("click", (e) => {
        const box = document.createElement('div');
        box.classList.add('box');
        const boxContainer = document.querySelector('#boxes');
        boxContainer.appendChild(box);
        //
        // boxContainer.innerHTML += <div class="box"></div>
    });
})();