import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import { Container, Row, Col } from 'react-bootstrap';

const QuoteForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const [show, setShow] = useState(false);
      
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <>
            <form className = "form c-hero-home-radio__form" onSubmit = {handleSubmit}>
                <fieldset>
                    <legend className = "form c-hero-home-radio__form-title">Select a product to start your quote</legend>
                    <div className = "form c-hero-home-radio__form-content">
                        <div className = "c-hero-home-radio__form-item">
                            <input className = "c-hero-home-radio__form-input" id="auto" type="radio" name="radio" checked/>
                            <label className = "form c-hero-home-radio__form-label" for="auto">
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
                                    <svg aria-hidden="true" focusable="false" role="img"><use href="images/icons/icons.svg#icon-motorcycle"></use></svg></span>
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
                <button className="c-hero-home-radio__link-button js-hero-home-more-button" aria-expanded="false" onClick={handleShow}>
                    <span className="o-icon c-hero-home-radio__link-icon">
                        <svg aria-hidden="true" focusable="false" role="img">
                            <use href="images/icons/icons.svg#icon-grid"></use>
                        </svg>
                    </span>
                    <span>Additional products and services</span>
                </button>
            </div>

            <Modal 
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
                                <li><a href="#">Auto</a></li>
                                <li><a href="#">Motorcycle</a></li>
                                <li><a href="#">Commercial Auto</a></li>
                                <li><a href="#">Motorhome</a></li>
                                <li><a href="#">Watercraft</a></li>
                                <li><a href="#">ATV</a></li>
                                <li><a href="#">Snowmobile</a></li>
                                <li><a href="#">Renters</a></li>
                                <li><a href="#">Health Insurance</a></li>
                            </ul>
                        </Col>
                        <Col xs={12} md={8}>
                            <div className = "c-hero-home-radio__form-item">
                                <span className="o-icon c-hero-home-radio__form-icon">
                                    <svg aria-hidden="true" focusable="false" role="img">
                                        <use href="images/icons/icons.svg#icon-auto"></use>
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
            </Modal>
        </>
    )
}

export default QuoteForm;
