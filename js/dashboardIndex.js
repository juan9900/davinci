document.addEventListener('DOMContentLoaded', () => {
  renderClients();
  wireDeleteFlow();
  wireExcelExport();
});

function renderClients() {
  $.ajax({
    url: 'modules/getAllClients.php',
    method: 'POST',
    dataType: 'json',
  })
    .done((response) => {
      response.forEach((client) => {
        $('.clients-body').append(
          `<tr class="table-row">
            <td data-title="Nombre:">${client.firstName}</td>
            <td data-title="Apellido:">${client.lastName}</td>
            <td data-title="Teléfono:">${client.phoneNumber}</td>
            <td data-title="Correo Electrónico">${client.email}</td>
            <td data-title="Fecha de suscripción">${client.subscriptionDate}</td>
          </tr>`
        );
      });
    })
    .fail((jqXHR) => {
      console.error('Error al obtener clientes: ' + JSON.stringify(jqXHR));
    });
}

function wireDeleteFlow() {
  let clientId;

  $(document).on('click', '#btn-delete-client', function () {
    clientId = $(this).closest('tr').find('.d-none').text();
  });

  $(document).on('click', '#btn-delete-confirm', () => {
    $.ajax({
      url: 'modules/deleteClient.php',
      type: 'POST',
      data: { id: clientId },
      dataType: 'json',
    })
      .done((response) => {
        if (response.result === 'success') {
          const page = new URLSearchParams(window.location.search).get('page');
          window.location.replace(`dashboardIndex.php?page=${page}`);
        }
      })
      .fail((jqXHR) => {
        console.error(JSON.stringify(jqXHR));
      });
  });
}

function wireExcelExport() {
  const btn = document.getElementById('btn-export-excel');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const table = document.getElementById('full-clients');
    if (!table) return;
    const wb = XLSX.utils.table_to_book(table);
    const wscols = [
      { wch: 6 },
      { wpx: 50 },
      { wch: 20 },
      { hidden: true },
    ];
    wb['!cols'] = wscols;
    XLSX.writeFile(wb, `Clientes-club-davinci-${DV.todayISO()}.xlsx`);
  });
}
