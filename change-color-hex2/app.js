document.addEventListener('DOMContentLoaded', () => {

    //background-color: rgb(23, 41, 56);
    const red = document.getElementById('red');
    const green = document.getElementById('green');
    const blue = document.getElementById('blue');

    const textBlue = document.getElementById('text-blue');
    const textGreen = document.getElementById('text-green');
    const textRed = document.getElementById('text-red');

    let redValue = red.value;
    let greenValue = green.value;
    let blueValue = blue.value;

    textBlue.innerText = blueValue;
    textGreen.innerText = greenValue;
    textRed.innerText = redValue;

    const main = document.querySelector('.main-container').parentNode;

    function update(redValue, greenValue, blueValue) {
        const rgb = `rgb(${redValue}, ${greenValue}, ${blueValue})`
        main.style.backgroundColor = rgb;
    }

    red.addEventListener('change', (e) => {
        let newRed = e.target.value;
        textRed.innerText = newRed;
        update(newRed, greenValue, blueValue)
    });

    blue.addEventListener('change', (e) => {
        let newBlue = e.target.value;
        textBlue.innerText = newBlue;
        update(redValue, greenValue, newBlue)
    });

    green.addEventListener('change', (e) => {
        let newGreen = e.target.value;
        textGreen.innerText = newGreen;
        update(redValue, newGreen, blueValue)
    });
})