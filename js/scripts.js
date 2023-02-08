// PLANAI

let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

let popup2 = document.getElementById("popup2");

function openPopup2(){
    popup2.classList.add("open-popup");
}
function closePopup2(){
    popup2.classList.remove("open-popup");
}

let popup3 = document.getElementById("popup3");

function openPopup3(){
    popup3.classList.add("open-popup");
}
function closePopup3(){
    popup3.classList.remove("open-popup");
}


// PRISIJUNGIMAS

function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputerror(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm= document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        setFormMessage(loginForm, "error", "Neteisingas vartotojo vardas arba slaptažodis");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "singupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputerror(inputElement, "Vartotojo vardas turi būti sudarytas ne mažiau kaip iš 10 simbolių")
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        })
    });
});