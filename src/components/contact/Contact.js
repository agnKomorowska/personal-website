import React from 'react';
import '../../App.scss';
import Frame from '../common/Frame';
import Background from '../common/Background';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; 

export default class Contact extends React.Component {
    render() {
        return (
            <div>
                <Background page="contact" />
                <Frame title="Contact">
                    <div className="row mt-5">
                        <div className="d-none d-md-flex col-12 col-md-1 col-lg-2 col-xl-3"></div>
                        <div className="col col-12 col-md-10 col-lg-8 col-xl-6 ">
                            <div className="card bg-dark-blue p-4">
                                <div className="row mb-2">
                                    <div className="col-12 col-md-5 text-center text-md-end">
                                        <p><FontAwesomeIcon className="pe-2" icon={faPhone} /><a href="tel:+48606318515" className="link-light">+48 606 318 515</a></p>
                                    </div>
                                    <div className="col-12 col-md-7 text-center text-md-start">
                                        <p><FontAwesomeIcon className="pe-2" icon={faEnvelope} /> <a href="mailto:agn.komorowska@gmail.com" className="link-light">agn.komorowska@gmail.com</a></p>
                                    </div>
                                </div>
                                <form className="needs-validation" noValidate>
                                    <div className="row g-3">
                                        <div className="col-12 text-start">
                                            <label for="validationCustom01" className="form-label pt-2">Message Title</label>
                                            <input type="text" className="form-control" id="validationCustom01" required />
                                            <div className="valid-feedback">
                                                Please enter a message title.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-3">
                                        <div className="col-12 text-start">
                                            <label for="validationCustom02" className="form-label pt-2">Email</label>
                                            <input type="text" className="form-control" id="validationCustom02" required />
                                            <div className="invalid-feedback">
                                                Please enter your email.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-3">
                                        <div className="col-12 text-start">
                                            <label for="validationTextarea" className="form-label pt-2">Message</label>
                                            <textarea className="form-control" id="validationTextarea" placeholder="Required example textarea" required></textarea>
                                            <div className="invalid-feedback">
                                                Please enter a message in the textarea.
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-light" type="submit">Send</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Frame>
            </div>
        );
    }
}