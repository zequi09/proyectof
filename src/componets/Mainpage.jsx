import React from 'react'
import '../index.css'

const Mainpage = () => {
    return (
        <div>
                <header>
                    <div className="header--tittle-container">
                        <h3>Smart Fire Extinguishers.</h3>
                        <p>Automatización para la seguridad.</p>
                    </div>
                </header>
                <main>
                    <section className="main-product-detail">
                        <span className="product-detail--batata-logo"></span>
                        <div className="product-detail--title">
                            <h2>Creamos un producto sin comparación.</h2>
                            <p>Confiable y diseñado para su uso diario.</p> 
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-sm">
                                <article className="product-detail--card">
                                    <span className="icon-card clock" ></span>
                                    <p className="product--card-title">Tiempo real</p>
                                    <p className="product--card-body">Nuestro sistema está en constante monitoreo para mayor seguirdad.</p>
                                </article>
                                </div>
                                <div class="col-sm">
                                    <article className="product-detail--card">
                                        <span className="icon-card eye" ></span>
                                        <p className="product--card-title">Alerta</p>
                                        <p className="product--card-body">En casos de emergencia alertará de manera automática con bocinas.</p>
                                    </article>
                                </div>
                                <div class="col-sm">
                                    <article className="product-detail--card">
                                        <span className="icon-card dolar" ></span>
                                        <p className="product--card-title">Calidad-Precio</p>
                                        <p className="product--card-body">Somos la alternativa con la mejor relación calidad precio, pagarás justo por que lo obtienes.</p>
                                    </article>
                                </div>
                                <div class="col-sm">
                                    <article className="product-detail--card">
                                        <span className="icon-card circle" ></span>
                                        <p className="product--card-title">Información confiable</p>
                                        <p className="product--card-body">Nuestros sensores se encargaran de darte datos confiables al momento de una emergencia.</p>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="plans" className="main-plans-container">
                        <div className="plans--title">
                            <h2>Escoge el plan que mejor se ajuste a ti.</h2>
                            <p>Cualquier plan te da acceso completo a nuestra plataforma.</p>
                        </div>
                        <div class="container">
                            <div class="row">
                                <div class="col-sm">
                                <article className="plans-container--card">
                                    <p className="recommended">Recomendado</p>
                                        <div className="plan-info-container">
                                            <h3 className="plan-card--title">PAGO ANUAL</h3>
                                            <p className="plan-card--price"><span>$</span>99</p>
                                            <p className="plan-card--saving">*Instalación del sistema contra incendios.</p>
                                            <button className="plan-card--ca">Escoger este <span></span></button>
                                        </div>
                                </article>
                                </div>
                                <div class="col-sm">
                                    <article className="plans-container--card">
                                    <p className="recommendedb">Básico</p>
                                        <div className="plan-info-container">
                                            <h3 className="plan-card--title">PAGO MENSUAL</h3>
                                            <p className="plan-card--price"><span>$</span>19</p>
                                            <p className="plan-card--saving">*Instalación completa y mantenimiento anual sin costos adicionales.</p>
                                            <button className="plan-card--cab">Escoger este <span></span></button>
                                        </div>
                                    </article>
                                </div>
                                <div class="col-sm">
                                <article className="plans-container--card">
                                    <p className="recommendedc">Premium</p>
                                        <div className="plan-info-container">
                                            <h3 className="plan-card--title">DE POR VIDA</h3>
                                            <p className="plan-card--pricec"><span>$</span>600</p>
                                            <p className="plan-card--saving">*Un único pago por el servicio de por vida.</p>
                                            <button className="plan-card--cac">Escoger este <span></span></button>
                                        </div>
                                </article>
                                </div>
                            </div>
                            </div>
                    </section>
                </main>
                <footer>
                    <ul>
                        <li> <a href="/">Contacto</a> </li>
                        <li> <a href="/">Se parte de nuestro equipo</a> </li>
                        <li> <a href="/">Ayuda</a> </li>
                    </ul>
                </footer>
        </div>
    )
}

export default Mainpage
