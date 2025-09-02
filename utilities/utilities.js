function navigate(id, destination) {
    const element = document.getElementById(id);
    if (element) {
        document.getElementById(id).addEventListener("click", () => {
            window.location.href = destination
        })
    }
}

function getRandomHexColor() {
    const hex = Math.floor(Math.random() * 0xffffff).toString(16); // convert to hex
    return `#${hex.padStart(6, "0")}`;
}


