document.getElementById('save-button').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    // Vytvorenie JSON objektu s údajmi
    const userData = {
        name: name,
        password: password
    };

    // Konverzia JSON objektu na reťazec
    const userDataString = JSON.stringify(userData);

    // Vytvorenie súboru s údajmi
    const blob = new Blob([userDataString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'user_data.json';
    a.click();
    URL.revokeObjectURL(url);

    // Vyčistenie formulára
    document.getElementById('save-form').reset();
});
