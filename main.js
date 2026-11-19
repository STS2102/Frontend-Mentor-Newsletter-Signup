const pageRef = document.querySelector(".Page");
const form = document.getElementById("form");
const subscribeButton = document.querySelector(".Submit");
const dismissButton = document.querySelector(".Dismiss");
const inputArea = document.querySelector("input");
const subscribeMessage = document.querySelector("strong");
const errorLabel = document.querySelector(".Error.off");

/* Adding Page-Swap Functionality */

form.addEventListener("submit", function (event) {
    event.preventDefault();

    /* Data Collection & Valdation */
    const formData = new FormData(form, subscribeButton);
    for (const [key,value] of formData.entries()) {
    //     console.log(`Key: ${key} --- Value: ${value}`);
    }
    const email = formData.get("email");

    if (email.match(/^.*@/) && email.includes(".com")) {
        /* Change screen by adding success class. */
        pageRef.classList.add("success");
        errorLabel.classList.remove("on");
        errorLabel.classList.add("off");
        inputArea.classList.remove("Error");
        /* Add Email input to the message. */
        subscribeMessage.innerHTML = `${email}`;
    }
    else {
        errorLabel.classList.remove("off");
        errorLabel.classList.add("on");
        inputArea.classList.add("Error");

    }
})

dismissButton.addEventListener("click", function () {
    form.reset();
    pageRef.classList.remove("success");
})
