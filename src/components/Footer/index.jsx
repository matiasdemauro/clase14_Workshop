import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import {FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';




const Footer = () => {
  return (
    <footer class="text-center  col-xs-3 col-xs-offset-9">
<div class="superior-foot">
    <ul class="cubos">Sucursales
        <li>Av. Belgrano 2581, CABA.</li>
        <li>Richieri 890, Rosario, Santa Fe.</li>
        <li>Rodriguez 1576, Villa María, Córdoba.</li>
        <li>Pellergini 1988, San Rafael, Mendoza</li>
    </ul>
    <ul class="cubos"> Condiciones del sitio
        <li>Conidiciones de uso</li>
        <li>Politicas de privacidad</li>
        <li>Aplicación de las políticas</li>
        <li>Uso de cookies</li>
        
    </ul>
    <ul class="cubos">Servicios
        <li>Diseñamos tu casa a tu gusto</li>
        <li>Garantías en todos los productos</li>
        <li>Intalación a domicilio</li>
        <li>Envíos a todo el país</li>
    </ul>
</div>
<div class="pie">
    <h5>Copyright © 1990-2021 Gianne Demauro, todos los derechos reservados.</h5>
    <div class="redes">
    
        <a href="https://www.instagram.com/giannehomedeco/"><i class="fa-brands fa-instagram"><FaInstagram/></i></a>
        <a href="https://www.facebook.com/" ><i class="fa-brands fa-facebook-f"><FaFacebookF/></i></a>
        <a href="https://web.whatsapp.com/" ><i class="fa-brands fa-whatsapp"><FaWhatsapp/></i></a>
    </div>
</div>
</footer>
  )
}

export default Footer