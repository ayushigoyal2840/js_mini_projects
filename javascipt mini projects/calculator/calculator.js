let screen = document.getElementById("screen");
let screenval = '';
buttons = document.querySelectorAll("button");
// console.log('connected');
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log("button is ", buttonText);
        try {
            if (buttonText == 'x') {
                buttonText = '*';
                screenval += buttonText;
                screen.value = screenval;

            } else if (buttonText == '=') {
                screen.value = eval(screenval);

            } else if (buttonText == 'c') {
                screenval = '';
                screen.value = screenval;

            } else {
                screenval += buttonText;
                screen.value = screenval;
            }
        } catch {
            screen.value = "error..!!";
        }
    })


}