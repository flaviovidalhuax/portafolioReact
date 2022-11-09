import React from 'react'
import ApiKey from './ApiKey'
import './style/callme.css'

const CallMe = () => {

  //   const form = useRef()
// const sendEmail = e => {
//     e.preventDefault()

//     emailjs
//       .sendForm(ApiKey.SERVICE_ID, ApiKey.TEMPLATE_ID, form.current, ApiKey.USER_ID)
//       .then(
//         result => {
//           alert('Correo enviado correctamente')
//         },
//         error => {
//           alert(`Ocurrio un error, intente nuevamente - ${error}`)
//         }
//       )
//   }

  return (
<div className='callme_container' id='callme'>
     <div>
          <a href="https://www.facebook.com/octavio.morandavila">
               <i class="callme_i fa-brands fa-facebook"></i>
          </a>
          <a href="https://web.whatsapp.com/">
               <i class="callme_i fa-brands fa-whatsapp"></i>
          </a>
          <i class="callme_i fa-solid fa-phone"></i>

          <a href="https://www.google.com.mx/maps/place/Popotla/@19.4520739,-99.1801126,17z/data=!4m20!1m14!4m13!1m6!1m2!1s0x85d1f8bd4ee71525:0x1ca0375a2453d0e1!2sPopotla,+Ciudad+de+M%C3%A9xico,+CDMX!2m2!1d-99.1802147!2d19.4531418!1m4!2m2!1d-99.1758942!2d19.4520547!4e1!3e3!3m4!1s0x85d1f89b182af359:0xd655fe13977c9ba2!8m2!3d19.45291!4d-99.17549">
               <i class="callme_i fa-solid fa-location-dot"></i>
          </a>
          
          <i class="callme_i fa-solid fa-envelopes"></i>
     </div>
     {/* onSubmit={sendEmail} */}
<form  className='callme' >
        <div className='callme_contian'>
        <h3 className='callme_h3'>call me: 5521159387</h3>
        <h3 className='callme_h3'>send email</h3>
       <div>
            <input className='callme_input' type="name" placeholder='put your full name' />
       </div>
       <div>
            <input className='callme_input' type="email"  placeholder='put your email' />
       </div>
       <div>
          <textarea className='callme_textarea' name="" id="" cols="25" rows="7">
               Send your mesage...
          </textarea>

       </div>
               <button className='callme_btn'>send</button>
        </div>
    </form>
</div>
  )
}

export default CallMe