const maxEmptyClick = 10;

const stopText = [
    "Please! STOP!!!",
    "Really?",
    "^&@#!!",
    "STOP!!!",
    "Stop doing it!",
    "****! ****!"
];


function randomInteger(start, stop){
    const dif = stop - start;
    const randomValue = Math.random() * dif + start;
    return Math.floor(randomValue);
}

function eventDispatcher(sender) {
    sender.textContent = "Clicked";

    const contLabel = document.getElementById("click_label");
    let currentValue = Number.parseInt(contLabel.textContent);

    contLabel.textContent = "" + ++currentValue;

    const root = document.getRootNode();
    const body = root.body;

    if (currentValue === maxEmptyClick) {
        const hrTag = document.createElement("hr");
        body.appendChild(hrTag);
    }

    if (currentValue >= maxEmptyClick) {
        const brTag = document.createElement("br");
        const labelTag = document.createElement("label");

        labelTag.style['color'] = '#FF0000';
        labelTag.style['font-size'] = `${currentValue * 2}pt`

        const text = stopText[randomInteger(0, stopText.length)];
        const textForLabel = document.createTextNode(text);

        labelTag.appendChild(textForLabel);

        body.appendChild(labelTag);
        body.appendChild(brTag);
    }
}