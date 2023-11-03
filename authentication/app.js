// Import the functions you need from the SDKs you need
import { auth } from "./config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

// import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
let form = document.querySelector("#form");
let email = document.querySelector("#email");
let password = document.querySelector("#password");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((res) => {
      const user = res.user;
      console.log(user);
      window.location = "signin.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});
