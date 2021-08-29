let inputNumber = document.querySelector('#exampleInputTel');
let inputText = document.querySelector('#exampleInputName');

let labelNumber = document.querySelector('.help-textTel');
let labelText = document.querySelector('.help-textName');


inputNumber.onfocus = function () {
    labelNumber.style.opacity = 1;
};

inputNumber.onblur = function () {
    labelNumber.style.opacity = 0;
}

inputText.onfocus = function () {
    labelText.style.opacity = 1;
}

inputText.onblur = function () {
    labelText.style.opacity = 0;
}
