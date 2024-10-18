document.getElementById('save-button').addEventListener('click', function () {
    const emailOrUsername = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Vytvorenie JSON objektu s údajmi
    const userData = {
        emailOrUsername: emailOrUsername,
        password: password
    };

    const userDataString = JSON.stringify(userData);

    // GitHub API URL pre vytvorenie alebo aktualizáciu súboru
    const repo = 'tvoj-username/login-form'; // Zadaj svoj repozitár
    const filePath = 'user_data.json'; // Cesta k súboru v repozitári
    const apiUrl = `https://api.github.com/repos/${repo}/contents/${filePath}`;

    // Priprav HTTP request
    fetch(apiUrl, {
        method: 'PUT',
        headers: {
            'Authorization': 'Bearer tvoj-github-token', // Nahrad svojím GitHub PAT tokenom
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            message: 'Updating user data', // Komentár ku commitu
            content: btoa(userDataString), // Musí byť zakódované v base64
            branch: 'main' // Hlavná vetva, alebo môžeš určiť inú vetvu
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Úspešne uložené na GitHub:', data);
    })
    .catch(error => {
        console.error('Chyba pri ukladaní na GitHub:', error);
    });
});
