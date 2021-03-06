import React from 'react'
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-dark">
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-sm-6 col-md-3 item">
                    <h3>Servicios</h3>
                    <ul>
                        <li><a href="#">. </a></li>
                        <li><a href="#">.</a></li>
                        <li><a href="#">.</a></li>
                    </ul>
                </div>
                <div className="col-sm-6 col-md-3 item">
                    <h3>Sobre Nosotros</h3>
                    <ul>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Team</a></li>
                        <li><a href="#">Careers</a></li>
                    </ul>
                </div>
                <div className="col-md-6 item text">
                    <h3>Psi-Vi Psicología Virtual</h3>
                    <p>Brindar servicios psicológicos especializados de forma virtual para personas que busquen una forma diferente y que se adapten a su forma de vida.</p>
                </div>
                <div className="col item social"><a href="#"><i className="icon ion-social-facebook"></i></a><a href="#"><i className="icon ion-social-twitter"></i></a><a href="#"><i className="icon ion-social-snapchat"></i></a><a href="#"><i className="icon ion-social-instagram"></i></a></div>
            </div>
            <p className="copyright">Psi-Vi Psicología Virtual © 2022</p>
        </div>
    </footer>
</div>
  )
}

export default Footer