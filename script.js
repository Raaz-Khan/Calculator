console.log("running");
let input = document.querySelector(".display");
let buttons = document.querySelectorAll(".button");

let Output = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=") {
            if (input.value == "" || input.value == "0") {
                input.value = "0";
            } else {
                Output = eval(Output);
                input.value = Output;
            }
        } else if (e.target.innerHTML == "AC") {
            Output = "";
            input.value = Output;
        } else if (e.target.innerHTML == "DEL") {
            if (typeof Output == "number") {
                Output = Output.toString();
                Output = Output.slice(0, -1);
                input.value = Output;
            } else {
                Output = Output.slice(0, -1);
                input.value = Output;
            }
        } else {
            Output += e.target.innerHTML;
            input.value = Output;
        }
    });
});
