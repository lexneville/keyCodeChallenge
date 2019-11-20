// const keycode = () => {
//     let key = event.keyCode;
//     console.log(key);
// }



document.addEventListener('keypress', logKey);



function logKey(e) {
    keyLetter.textContent = ` ${e.key}`;
    keyNumber.textContent = ` ${e.which}`;
    keyWhich.textContent = ` ${e.which}`;
    keyCode.textContent = ` ${e.code}`;
}
