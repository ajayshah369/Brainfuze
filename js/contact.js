import { showAlert } from './alert';

$(document).on('submit', '#contact-form', function (e) {
  e.preventDefault();
  $('.contact-submit').text('Submitting...');
  const name = $('#contact-name').val();
  const email = $('#contact-email').val();
  const phone = $('#contact-phone').val();
  const subject = $('#contact-subject').val();
  const message = $('#contact-message').val();

  const data = {
    name,
    email,
    phone,
    subject,
    message,
  };

  axios
    .post(
      'https://brainfuze-fe3e8-default-rtdb.firebaseio.com/students.json',
      data
    )
    .then((response) => {
      showAlert(
        'success',
        'We got you, we will reach you. as soon as possible',
        5
      );
      $('.contact-submit').text('Submit');
      $('#contact-name').val('');
      $('#contact-email').val('');
      $('#contact-phone').val('');
      $('#contact-subject').val('');
      $('#contact-message').val('');
    })
    .catch((err) => {
      showAlert('error', 'Something gone wrong, try again!', 5);
    });
});
