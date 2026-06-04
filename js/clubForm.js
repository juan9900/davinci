DV.ready(() => {
  const birthdateInput = document.getElementById('birthdate');
  if (birthdateInput) {
    birthdateInput.setAttribute('max', DV.todayISO());
  }

  if (document.getElementById('formModal')) {
    $('#formModal').modal('show');
  }

  if (!document.getElementById('club-form')) return;

  let alertTimer;

  const showAlert = (message, type) => {
    const placeholder = document.getElementById('liveAlertPlaceholder');
    if (!placeholder) return;
    clearTimeout(alertTimer);
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `<div class="alert alert-${type} alert-dismissible mb-0" role="alert">
      <div>${Array.isArray(message) ? message.join('<p></p>') : message}</div>
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>`;
    $('#liveAlertPlaceholder').empty().append(wrapper);
    alertTimer = setTimeout(() => {
      $('#liveAlertPlaceholder').fadeOut(500, function () {
        $(this).empty().show();
      });
    }, 4000);
  };

  $('#club-form').on('submit', function (e) {
    e.preventDefault();
    const firstName = $('#firstName').val();
    const lastName = $('#lastName').val();
    const email = $('#email').val();
    const phoneNumber = $('#phoneNumber').val();
    const birthdate = new Date($('#birthdate').val());

    $.ajax({
      type: 'POST',
      url: '/modules/addClient.php',
      data: { firstName, lastName, email, phoneNumber, birthdate },
      dataType: 'json',
      success: (data) => {
        if (data.status === 'success') {
          $('.club-form-container').addClass('d-none');
          $('.subscribed-text').removeClass('d-none');
        } else {
          showAlert(data.errors, 'danger');
        }
      },
      error: (err) => {
        console.error('error: ', err);
      },
    });
  });
});
