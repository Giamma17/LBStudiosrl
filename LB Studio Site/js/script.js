function gigi(e) {
    var nome = document.getElementById('nome').value;
    var cognome = document.getElementById('cognome').value;
    var email = document.getElementById('email').value;
    var messaggio = document.getElementById('messaggio').value;

    if (!nome || !cognome || !email || !messaggio) {
        alert('Compila tutti i campi per inviare la mail');
        return;
    }

    var destinatario = 'amministra@lbstudiosrl.it';
    var oggetto = 'Nuovo messaggio da ' + nome + ' ' + cognome;
    var corpoEmail = '\nDa:   ' + email + '\n\n' + messaggio;

    window.location.href = 'mailto:' + destinatario + '?subject=' + encodeURIComponent(oggetto) + '&body=' + encodeURIComponent(corpoEmail);
}
