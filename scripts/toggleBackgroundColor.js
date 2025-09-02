let storedColor = "";

document.getElementById("theme-toggle-btn").addEventListener("click", () => {

    const color = getRandomHexColor();

    const body = document.getElementsByTagName("body")[0];

    body.classList.remove("bg-secondary")
    body.classList.remove(`bg-[${storedColor}]`)
    body.classList.add(`bg-[${color}]`);

    storedColor = color;
})
