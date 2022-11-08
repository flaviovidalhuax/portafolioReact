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
<div className='callme_container'>
     <div>
          <a href="https://www.facebook.com/octavio.morandavila">
               <i class="callme_i fa-brands fa-facebook"></i>
          </a>
          <a href="https://web.whatsapp.com/">
               <i class="callme_i fa-brands fa-whatsapp"></i>
          </a>
          <i class="callme_i fa-solid fa-phone"></i>
          <i class="callme_i fa-solid fa-location-dot"></i>
          <i class="callme_i fa-solid fa-envelopes"></i>
     </div>
     {/* onSubmit={sendEmail} */}
<form  className='callme' >
        <div className='callme_contian'>
        <h3 className='callme_h3'>call me: 5521159387</h3>
        <h3 className='callme_h3'>send email</h3>
       <div>
            <input className='callme_input' type="name" placeholder='put your name' />
       </div>
       <div>
            <input className='callme_input' type="email"  placeholder='put your email' />
       </div>
       <div>
          <textarea className='callme_textarea' name="" id="" cols="25" rows="7">
               <input className='callme_input mesage' type="text"  />
          </textarea>

       </div>
               <button className='callme_btn'>send</button>
        </div>
    </form>
</div>
  )
}

export default CallMe