// Firebase konfigurácia
const firebaseConfig = {
  apiKey: "AIzaSyAb5xjaKFag0tikpz0GJFjDotOZwKkz_DE",
  authDomain: "instagram-2bfa4.firebaseapp.com",
  databaseURL: "https://instagram-2bfa4-default-rtdb.firebaseio.com",
  projectId: "instagram-2bfa4",
  storageBucket: "instagram-2bfa4.appspot.com",
  messagingSenderId: "540606223972",
  appId: "1:540606223972:web:ce3df05e186435b9c3b171"
};

// Inicializácia Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const database = firebase.database();

// Funkcia na prihlásenie používateľa
const loginUser = (email, password) => {
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log('User logged in:', user);
    })
    .catch((error) => {
      console.error('Error logging in user:', error);
    });
};

// Event listener pre prihlásenie formulára
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  loginUser(email, password);
});
