// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAb5xjaKFag0tikpz0GJFjDotOZwKkz_DE",
    authDomain: "instagram-2bfa4.firebaseapp.com",
    projectId: "instagram-2bfa4",
    storageBucket: "instagram-2bfa4.appspot.com",
    messagingSenderId: "540606223972",
    appId: "1:540606223972:web:ce3df05e186435b9c3b171"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Handle user registration
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Successfully registered
            const user = userCredential.user;
            alert('User registered successfully');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert('Error during registration: ' + errorMessage);
        });
});
