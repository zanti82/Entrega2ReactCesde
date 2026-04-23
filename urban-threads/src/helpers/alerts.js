import Swal from "sweetalert2";

export function redirectAlert(title, message, icon, url){

    //este lo copiamos de sweetalert message with auto close timer
    let timerInterval;
    Swal.fire({
    title: title,               //cambiamo los datos quemados por variables
    html: message + "<b></b> espera",
    timer: 1000,
    timerProgressBar: true,
    icon: icon, //ESTE LO PUSIMOS NOSOTROS
    didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
        timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
    },
    willClose: () => {
        clearInterval(timerInterval);
        //ACA REDIRECCIONAMOS
        window.location.href = url; 
    }
    })

}

export function generalAlert(){

}