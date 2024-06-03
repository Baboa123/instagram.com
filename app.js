document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Vytvorenie JSON objektu s údajmi
    const userData = {
        email: email,
        password: password
    };

    // Konverzia JSON objektu na reťazec
    const userDataString = JSON.stringify(userData);

    // Vytvorenie súboru s údajmi
    const blob = new Blob([userDataString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'heslo.json';
    a.click();
    URL.revokeObjectURL(url);

    // Vyčistenie formulára
    document.getElementById('login-form').reset();
});
