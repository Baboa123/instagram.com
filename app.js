document.getElementById('save-button').addEventListener('click', function () {
    // Získanie údajov z polí pre e-mail/užívateľské meno a heslo
    const emailOrUsername = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Vytvorenie JSON objektu s údajmi
    const userData = {
        emailOrUsername: emailOrUsername,
        password: password
    };

    // Konverzia JSON objektu na reťazec
    const userDataString = JSON.stringify(userData);

    // Vytvorenie a uloženie súboru s údajmi pomocou HTML5 File API
    const blob = new Blob([userDataString], { type: 'application/json' });
    const fileName = 'user_data.json';
    if (window.navigator.msSaveOrOpenBlob) {
        // Internet Explorer
        window.navigator.msSaveOrOpenBlob(blob, fileName);
    } else {
        // Iné prehliadače
        const a = document.createElement('a');
        const url = URL.createObjectURL(blob);
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }
});



