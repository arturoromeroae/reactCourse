import React, {useState} from 'react';
import { motion } from "framer-motion"

const QuoteForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const [image, setImage] = useState('icon-auto');
    const [title, setTitle] = useState('Car Insurance Quotes');
    const [cl, setCl] = useState('');

    const autoClick = () => {
        setCl('animate__bounceIn');
        setTimeout(() => {
            setCl('');
        }, 200);
        setImage('icon-auto');
        setTitle('Car Insurance Quotes');
    }
    
    const lifeClick = () => {
        setCl('animate__bounceIn');
        setTimeout(() => {
            setCl('');
        }, 200);
        setImage('icon-life');
        setTitle('Life Insurance');
    }

    const healthClick = () => {
        setCl('animate__bounceIn');
        setTimeout(() => {
            setCl('');
        }, 200);
        setImage('icon-health');
        setTitle('Health Insurance');
    }

    const teleClick = () => {
        setCl('animate__bounceIn');
        setTimeout(() => {
            setCl('');
        }, 200);
        setImage('icon-telemedicine');
        setTitle('Telemedicine');
    }

    const homewClick = () => {
        setCl('animate__bounceIn');
        setTimeout(() => {
            setCl('');
        }, 200);
        setImage('icon-homeowners');
        setTitle('Homeowners Insurance');
    }

    const bussClick = () => {
        setCl('animate__bounceIn');
        setTimeout(() => {
            setCl('');
        }, 200);
        setImage('icon-business');
        setTitle('Business Insurance');
    }

    const renterClick = () => {
        setCl('animate__bounceIn');
        setTimeout(() => {
            setCl('');
        }, 200);
        setImage('icon-renters')
        setTitle('Renters Insurance')
    }

    const motoClick = () => {
        setCl('animate__bounceIn');
        setTimeout(() => {
            setCl('');
        }, 200);
        setImage('icon-motorcycle')
        setTitle('Motorcycle Insurance')
    }

    const commClick = () => {
        setCl('animate__bounceIn');
        setTimeout(() => {
            setCl('');
        }, 200);
        setImage('icon-commercial')
        setTitle('Commercial Auto Insurance Quote')
    }

    const landClick = () => {
        setCl('animate__bounceIn');
        setTimeout(() => {
            setCl('');
        }, 200);
        setImage('icon-landlord')
        setTitle('Landlord Insurance')
    }

    const addClick = () => {
        setCl('animate__bounceIn');
        setTimeout(() => {
            setCl('');
        }, 200);
        setImage('icon-AD&D');
        setTitle('Travel Club with Accidental Death and Dismemberment Benefits');
    }

    const boatClick = () => {
        setCl('animate__bounceIn');
        setTimeout(() => {
            setCl('');
        }, 200);
        setImage('icon-watercraft');
        setTitle('Watercraft Insurance');
    }

    const motorhomeClick = () => {
        setCl('animate__bounceIn');
        setTimeout(() => {
            setCl('');
        }, 200);
        setImage('icon-motorhome');
        setTitle('Motorhome Insurance');
    }

    const travelClick = () => {
        setCl('animate__bounceIn');
        setTimeout(() => {
            setCl('');
        }, 200);
        setImage('icon-travel');
        setTitle('Travel Insurance');
    }

    const [show, setShow] = useState('icon-auto');

    const modalClick = (e) => {
        e.preventDefault();
        setShow('is-open')
    }

    const modalClickClose = (e) => {
        e.preventDefault();
        setShow('')
    }

    return(
        <>
           <div className="c-hero-home-radio">
                <div className="c-hero-home-radio__wrapper">
                    <form className="form c-hero-home-radio__form" action="#">
                        <fieldset>
                            <legend className="form c-hero-home-radio__form-title">Select a product to start your quote</legend>
                            <div className="form c-hero-home-radio__form-content">
                                <div className="c-hero-home-radio__form-item">
                                    <input className="c-hero-home-radio__form-input" id="auto" type="radio" name="radio" checked />
                                    <label className="form c-hero-home-radio__form-label" for="auto">
                                        <span className="o-icon c-hero-home-radio__form-icon">
                                            <svg aria-hidden="true" focusable="false" role="img">
                                                <use href="images/icons/icons.svg#icon-auto"></use>
                                            </svg>
                                        </span>
                                        <span className="c-hero-home-radio__form-text">Auto
                                            <span className="o-icon c-hero-home-radio__form-icon-check">
                                                <svg aria-hidden="true" focusable="false" role="img">
                                                    <use href="images/icons/icons.svg#icon-checkCircle"></use>
                                                </svg>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <div className="form c-hero-home-radio__form-item">
                                    <input className="c-hero-home-radio__form-input" id="renters" type="radio" name="radio" />
                                    <label className="form c-hero-home-radio__form-label" for="renters">
                                        <span className="o-icon c-hero-home-radio__form-icon">
                                            <svg aria-hidden="true" focusable="false" role="img">
                                                <use href="images/icons/icons.svg#icon-renters"></use>
                                            </svg>
                                        </span>
                                        <span className="c-hero-home-radio__form-text">Renters
                                            <span className="o-icon c-hero-home-radio__form-icon-check">
                                                <svg aria-hidden="true" focusable="false" role="img">
                                                    <use href="images/icons/icons.svg#icon-checkCircle"></use>
                                                </svg>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <div className="form c-hero-home-radio__form-item">
                                    <input className="c-hero-home-radio__form-input" id="motorcycle" type="radio" name="radio" />
                                    <label className="form c-hero-home-radio__form-label" for="motorcycle">
                                        <span className="o-icon c-hero-home-radio__form-icon">
                                            <svg aria-hidden="true" focusable="false" role="img">
                                                <use href="images/icons/icons.svg#icon-motorcycle"></use>
                                            </svg>
                                        </span>
                                        <span className="c-hero-home-radio__form-text">Motorcycle
                                            <span className="o-icon c-hero-home-radio__form-icon-check">
                                                <svg aria-hidden="true" focusable="false" role="img">
                                                    <use href="images/icons/icons.svg#icon-checkCircle"></use>
                                                </svg>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                                <div className="form c-hero-home-radio__form-item">
                                    <input className="c-hero-home-radio__form-input" id="life" type="radio" name="radio" />
                                    <label className="form c-hero-home-radio__form-label" for="life">
                                        <span className="o-icon c-hero-home-radio__form-icon">
                                            <svg aria-hidden="true" focusable="false" role="img">
                                                <use href="images/icons/icons.svg#icon-life"></use>
                                            </svg>
                                        </span>
                                        <span className="c-hero-home-radio__form-text">Life
                                            <span className="o-icon c-hero-home-radio__form-icon-check">
                                                <svg aria-hidden="true" focusable="false" role="img">
                                                    <use href="images/icons/icons.svg#icon-checkCircle"></use>
                                                </svg>
                                            </span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                            <div className="c-hero-home-radio__form-items">
                                <div className="c-hero-home-radio__form-zipcode">
                                    <input className="c-hero-home-radio__form-items-input only-numbers" id="zipcode" type="tel" placeholder="Zip Code" aria-label="Zip Code" maxlength="5" name="zipcode" autocomplete="on" />
                                </div>
                                <button className="c-button c-button--orange">
                                    <span>Start Quote</span>
                                </button>
                            </div>
                        </fieldset>
                    </form>
                    <div className="c-hero-home-radio__link">
                        <button className="c-hero-home-radio__link-button js-hero-home-more-button" onClick={modalClick} aria-expanded="false">
                            <span className="o-icon c-hero-home-radio__link-icon">
                                <svg aria-hidden="true" focusable="false" role="img">
                                    <use href="images/icons/icons.svg#icon-grid"></use>
                                </svg>
                            </span>
                            <span>Additional products and services</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className={"c-modal-quote " + show}>
                <div className={"o-wrapper o-wrapper "}>
                    <div className="c-modal-quote__content">
                        <div className="c-modal-quote__title">Select a Product or Service to request a quote</div>
                            <div style={{float: 'left'}} className={"c-modal-quote__form "}>
                                <form className={"form c-quote"} action="#">
                                    <div className={"c-quote__item"}>
                                        <label className="c-quote__label" for="typeInsuranceModalQuote">Type of Insurance Product or Service</label>
                                        <h3 className={"animate__animated " + cl}>{title}</h3>
                                        <span className="o-icon c-hero-home-radio__form-icon">
                                            <svg className={"animate__animated " + cl} aria-hidden="true" focusable="false" role="img">
                                                <use href={"images/icons/icons.svg#" + image}></use>
                                            </svg>
                                        </span>
                                    </div>
                                    <div className="c-quote__item">
                                        <label className="c-quote__label" for="zipcodeModalQuote">Zip Code</label>
                                        <input className="c-quote__input" type="tel" placeholder="E.g.: 98001" name="zipcodeModalQuote" id="zipcodeModalQuote" maxlength="5" autocomplete="on" />
                                    </div>
                                    <div className="c-quote__controls">
                                        <button className="c-quote__submit c-button c-button--orange c-button--text-big" type="submit"> Start Quote
                                            <img className="c-quote__loading" src="images/components/forms/loading.svg" alt="Loading" width="28" height="28" />
                                        </button>
                                    </div>
                                </form>
                            </div>

                            <div style={{overflow: 'hidden'}}>
                            <div  style={{float: 'left', padding: '30px'}}>
                                <ul style={{listStyle: 'none'}}>
                                    <motion.li whileHover={{ scale: 1.4 }} onClick={autoClick}><motion.a animate={{ rotate: 360 }} onClick={autoClick} className="c-modal-quote__product-link" href="#">Auto Insurance</motion.a></motion.li>
                                    <motion.li whileHover={{ scale: 1.4 }} onClick={lifeClick}><a onClick={lifeClick} className="c-modal-quote__product-link" href="#">Life Insurance</a></motion.li>
                                    <motion.li whileHover={{ scale: 1.4 }} onClick={healthClick}><a onClick={healthClick} className="c-modal-quote__product-link" href="#">Health Insurance</a></motion.li>
                                    <motion.li whileHover={{ scale: 1.4 }} onClick={teleClick}><a onClick={teleClick} className="c-modal-quote__product-link" href="#">Telemedicine</a></motion.li>
                                    <motion.li whileHover={{ scale: 1.4 }} onClick={homewClick}><a onClick={homewClick} className="c-modal-quote__product-link" href="#">Homeowner Insurance</a></motion.li>
                                    <motion.li whileHover={{ scale: 1.4 }} onClick={bussClick}><a onClick={bussClick} className="c-modal-quote__product-link" href="#">Business Insurance</a></motion.li>
                                    <motion.li whileHover={{ scale: 1.4 }} onClick={renterClick}><a onClick={renterClick} className="c-modal-quote__product-link" href="#">Renters Insurance</a></motion.li>
                                    <motion.li whileHover={{ scale: 1.4 }} onClick={motoClick}><a onClick={motoClick} className="c-modal-quote__product-link" href="#">Motorcycle Insurance</a></motion.li>
                                    <motion.li whileHover={{ scale: 1.4 }} onClick={commClick}><a onClick={commClick} className="c-modal-quote__product-link" href="#">Commercial Vehicle</a></motion.li>
                                    <motion.li whileHover={{ scale: 1.4 }} onClick={landClick}><a onClick={landClick} className="c-modal-quote__product-link" href="#">Landlord Insurance</a></motion.li>
                                    <motion.li whileHover={{ scale: 1.4 }} onClick={addClick}><a onClick={addClick} className="c-modal-quote__product-link" href="#">AD&D Insurance</a></motion.li>
                                    <motion.li whileHover={{ scale: 1.4 }} onClick={boatClick}><a onClick={boatClick} className="c-modal-quote__product-link" href="#">Boat Insurance</a></motion.li>
                                    <motion.li whileHover={{ scale: 1.4 }} onClick={motorhomeClick}><a onClick={motorhomeClick} className="c-modal-quote__product-link" href="#">Motorhome Insurance</a></motion.li>
                                    <motion.li whileHover={{ scale: 1.4 }} onClick={travelClick}><a onClick={travelClick} className="c-modal-quote__product-link" href="#">Mexican Travel Insurance</a></motion.li>
                                </ul>
                            </div>
                        </div>

                        <button className="c-modal-quote__close" title="Close Quote Modal" onClick={modalClickClose}>
                            <span className="o-icon">
                                <svg aria-hidden="true" focusable="false" role="img">
                                    <use href="images/icons/icons.svg#icon-close"></use>
                                </svg>
                            </span>
                            <span className="u-hidden-visually">Close quote modal</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* <Modal 
                show={show} 
                onHide={handleClose}
                size="xl"
                centered
            >
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <ul>
                                <li><a href="#" onClick={autoClick}>Auto</a></li>
                                <li><a href="#" onClick={motoClick}>Motorcycle</a></li>
                                <li><a href="#" onClick={commercialClick}>Commercial Auto</a></li>
                                <li><a href="#" onClick={motorhomeClick}>Motorhome</a></li>
                                <li><a href="#" onClick={watercraftClick}>Watercraft</a></li>
                                <li><a href="#" onClick={atvClick}>ATV</a></li>
                                <li><a href="#" onClick={snowClick}>Snowmobile</a></li>
                                <li><a href="#" onClick={rentersClick}>Renters</a></li>
                                <li><a href="#" onClick={healthClick}>Health Insurance</a></li>
                            </ul>
                        </Col>
                        <Col xs={12} md={8}>
                            <div className = "c-hero-home-radio__form-item">
                                <span className="o-icon c-hero-home-radio__form-icon">
                                    <svg aria-hidden="true" focusable="false" role="img">
                                        <use href={"images/icons/icons.svg#" + image}></use>
                                    </svg>
                                </span>
                                <h2 className="c-media-block__title c-section__title c-section__title--black ">
                                    Save up to 30%
                                </h2>
                            </div>
                            <br/>
                            <div className="c-hero-home-radio__form-items">
                                <div className="c-hero-home-radio__form-zipcode">
                                    <input className="c-hero-home-radio__form-items-input only-numbers" id="zipcode" type="tel" placeholder="Zip Code" aria-label="Zip Code" maxlength="5" name="zipcode" autocomplete="on" />
                                </div>
                                <button className="c-button c-button--orange">
                                    <span>Start Quote</span>
                                </button>
                            </div>
                        </Col>
                    </Row>
                </Container>
              </Modal.Body>
            </Modal> */}
        </>
    )
}

export default QuoteForm;
