import React from 'react'

const Pie = () => {
  return (
    <footer className="container-fluid bg-dark text-light">
      <ul className="footer_list d-flex  container-fluid  justify-content-around">
        <div className='row-cols-1'>
          <h4>Nuestra Ubicacion</h4>
          <ul></ul>
          <li className='d-flex aling-items-center flex-column'> <h6 className='p-2'> Campana 243 Local 8 Gal. Los fabricantes</h6> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.0045661464173!2d-58.475688500000004!3d-34.6293249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc9921f056503%3A0x8564a65c24a1ea3f!2sGaler%C3%ADa%20Comercial%20LOS%20FABRICANTES!5e0!3m2!1ses-419!2sar!4v1665336309555!5m2!1ses-419!2sar" width={300} height={150} loading="lazy" referrerPolicy="no-referrer-when-downgrade" name='ubicacion-local'></iframe></li>
        </div>
        <div className='row-cols-1'>
          <h4>Nuestras Redes</h4>
          <ol>
            <li><a className='nav-link' href='https://www.facebook.com/profile.php?id=100051375237216'>facebook</a></li>
            <li><a className='nav-link' href='https://www.instagram.com/zion_urbano/'>Instagram</a></li>
          </ol>
        </div>
        <div className='row-cols-1'>
          <h4>Contacto</h4>
          <ul>
            <li>+54 9 11 6575-9558</li>
            <li>yolandazulmav@gmail.com</li>
          </ul>
        </div>
      </ul>
      <h6 id='copyright' > © Desarrollado por  <a href="https://www.linkedin.com/in/juannicolasmorales/" className='nav-link text-bg-success'>  Nicolas Morales  </a>  y  <a href="https://www.linkedin.com/in/luciano-rivera-010a5b22b/" className='nav-link text-bg-danger'>Luciano Rivera</a> - 2022</h6>
    </footer>
  )
}

export default Pie;