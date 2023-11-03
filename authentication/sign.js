import { auth } from "./config.js";
import {
  signInWithEmailAndPassword,
  updatePassword,
} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";

const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const forgotBtn = document.querySelector("#forgot");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert("ok");
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
      alert("kak");
    });
});

forgotBtn.addEventListener("click", () => {
  const user = auth.currentUser;
  const newPassword = prompt("enter new password");
  updatePassword(user, newPassword)
    .then(() => {
      // Update successful.
    })
    .catch((error) => {
      // An error ocurred
      // ...
    });
});

// let btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   const user = auth.currentUser;
//   let pass = document.getElementById("pass").value;
//   updatePassword(user, pass)
//     .then(() => {
//       alert("password changed");
//       Location.href = "./signin.html";
//       // Update successful.
//     })
//     .catch((error) => {
//       // An error ocurred
//       // ...
//     });
// });
