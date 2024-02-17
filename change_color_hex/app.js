document.addEventListener('DOMContentLoaded', () => {

    const button = document.getElementById("button-color");
    const color = document.getElementById("color");
    const body = document.getElementById("container").parentNode;

    function random() {
        const digits = "0123456789ABCDEF"
        let hex = "#";
        
        for (let i = 0; i < 6; i++) {
            hex += digits.charAt(Math.floor(Math.random() * digits.length));
        }
        
        return hex;
    }

    button.onclick = () => {

        let colorHex = random();

        color.innerText = colorHex;
        body.style.background = colorHex;
        button.style.background = colorHex;
    }
});
