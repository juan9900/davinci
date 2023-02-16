console.log($('.promo-plates'));
// boton de opciones de platos
const btnPlatesOptions = $('.promo-plates-container');
const platesOptions = $('.promo-plates');
const listArrow = $('.arrow-down');

$(btnPlatesOptions).on('click', () => {
    $(platesOptions).toggleClass('active');
    $(btnPlatesOptions).toggleClass('active');
    $(listArrow).toggleClass('rotate');
})

const alertPlaceholder = $('#liveAlertPlaceholder')
var timerCloseAlert;

// Enviar suscripcion al club forno
$('#club-form').on('submit',(e) => {
    firstName = $('#firstName').val();
    lastName = $('#lastName').val();
    email = $('#email').val();
    phoneNumber = $('#phoneNumber').val();
    birthdate = $('#birthdate').val();

    e.preventDefault();
    $.ajax({
        type: "POST",
        url: '/davinci/modules/addClient.php',
        data: {
            firstName,
            lastName,
            email,
            phoneNumber,
            birthdate,
        },
        dataType: 'json',
        success: (data) => {
            console.log(data);
            if(data.status === 'success'){
                $('.club-form-container').addClass('d-none');
                $('.subscribed-text').removeClass('d-none');
            }else{
                alert(data.errors,'danger');
                timer = setTimeout(() => {
                    $('#liveAlertPlaceholder').fadeOut(500, function(){
                        $(this).empty().show();
                    })
                },4000)
            }
        },
        error: (e) => {
            console.log('error: ' , e);
        },
      });
})

const alert = (message, type) => {
    let icon;
    switch(type){
        case 'danger':
            icon = `<i class="fa-solid fa-xmark pe-2"></i>`
        break;
        case 'success':
            icon = `<i class="fa-solid fa-check pe-2"></i>`
        break;

    }   
    
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible mb-0" role="alert" id="alert">`,
        `   <div>${message.join("<p></p>")}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    // const wrapper = 
    // `<div class="alert alert-${type} alert-dismissible mb-0" role="alert" id="alert">
    //     <div>${icon}
    //         <div>
    //             ${message.forEach(msg => {
    //                 return message
    //             })}
    //         </div>
    //     </div>
    //     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    // </div>`
    
    
    
    if($('#liveAlertPlaceholder').is(':empty')){
        alertPlaceholder.append(wrapper)
    }else{
        //If the event have been saved in less than 3 seconds, then the previous setTimeout will be deleted
        //so the new alert has its own 3 seconds.
        clearTimeout(timer);
        $('#liveAlertPlaceholder').empty();
        console.log('Emptied');
        alertPlaceholder.append(wrapper);
       
    }

}

$(document).ready(()=>{
    const date = new Date();
    const today = date.toLocaleDateString();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var  day = date.getDate();
    
    {month < 10 ? month = '0' + month : null};
    {day < 10 ? day = '0' + day : null}

    $('#birthdate').attr('max', `${year}-${month}-${day}`);
})