const lengthSlider = document.getElementById("length");
const generateBtn = document.querySelector(".btn");
const checkboxInput = document.querySelectorAll(".flex input");
const copyBtn = document.querySelector(".password-container button");

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number: "0123456789",
    special: "!@#$%^&*()_+-=,./;'[]{}:<>?/*-+"
};

const generatePassword = (e) => {
    let staticPassword = "";

    e.preventDefault();

    checkboxInput.forEach((input)=> {
        if(input.checked) {
            staticPassword += characters[input.id];
        }
    });

    if(staticPassword !== "") {
        let randomPassword = "";
        for (let i = 0; i < lengthSlider.value; i++) {
        randomPassword += staticPassword[Math.floor(Math.random() * staticPassword.length)];
        }

        document.querySelector("#password").value = randomPassword;
        copyBtn.addEventListener("click", ()=> {
            navigator.clipboard.writeText(randomPassword);
            document.querySelector("#password").value = "copied to clipboard";
            setTimeout(() => { 
                document.querySelector("#password").value = randomPassword;
             }, 1000)
        });

    } else {
        alert("please Select atleast one Checkbox");
    }
}

const updateSlider = () => {
    document.querySelector(".pass-length-count").textContent = lengthSlider.value;
}

lengthSlider.addEventListener("input", updateSlider);
generateBtn.addEventListener("click", generatePassword);
