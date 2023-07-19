import Swal from 'sweetalert2'

export const SimpleAlert = (text='Alerte', icon='info', showCancelButton=false, showCloseButton=true, position='center') =>{
    Swal.fire({
        title: text,
        icon: icon,
        showCancelButton: showCancelButton,
        position: position,
        showCloseButton: showCloseButton,
      })
}

export const TimerAlert = (text= 'Timer Alert', icon= 'info', showCancelButton=false, showCloseButton=false, position='center', timer = 1500) => {
    Swal.fire({
        title: text,
        icon: icon,
        showCancelButton: showCancelButton,
        position: position,
        showCloseButton: showCloseButton,
        timer: timer
      })
}

export const ValidationAlert = (
        text ='Êtes vous sur ?', 
        icon = 'warning',
        showCancelButton = true,
        showCloseButton = false, 
        confirmButtonColor = '#3085d6', 
        cancelButtonColor = '#d33',
        confirmButtonText = 'Confirmer',
        position = 'center') => {
        Swal.fire({
        title: text,
        icon: icon,
        showCancelButton: showCancelButton,
        showCloseButton : showCloseButton,
        confirmButtonColor: confirmButtonColor,
        cancelButtonColor: cancelButtonColor,
        confirmButtonText: confirmButtonText,
        position: position,
      }).then((result) => {
        console.log(result);
      })
}
