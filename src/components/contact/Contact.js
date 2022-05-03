import React from 'react';
import '../../App.css';
import Frame from '../common/Frame';
import Background from '../common/Background';

export default class Contact extends React.Component {
    render() {
        return (
            <div>
                <Background page="contact" />
                <Frame title="Contact">
                    <div className="card bg-dark">
                        <div className="row mb-3 mt-5">
                            <div className="col-12 text-md-center">
                            <h5>Mobile: <a href="tel:+48606318515" className="link-light">+48 606 318 515</a></h5>
                            </div>
                            <div className="col-12 text-md-center">
                                <h5>Email: <a href="mailto:agn.komorowska@gmail.com" className="link-light">agn.komorowska@gmail.com</a></h5>
                            </div>
                        </div>
                    
                        <form className="needs-validation" noValidate>
                            <div className="row g-3">
                                <div className="d-none d-md-flex col-12 col-md-2 col-xl-3"></div>
                                <div className="col-12 col-md-8 col-xl-6 text-start">
                                    <label for="validationCustom01" className="form-label pt-2">Message Title</label>
                                    <input type="text" className="form-control" id="validationCustom01" value="Mark" required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                            </div>
                            <div className="row g-3">
                                <div className="d-none d-md-flex col-12 col-md-2 col-xl-3"></div>
                                <div className="col-12 col-md-8 col-xl-6 text-start">
                                    <label for="validationCustom02" className="form-label pt-2">Email</label>
                                    <input type="text" className="form-control" id="validationCustom02" value="Otto" required />
                                    <div className="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                            </div>
                            <div className="row g-3">
                                <div className="d-none d-md-flex col-12 col-md-2 col-xl-3"></div>
                                <div className="col-12 col-md-8 col-xl-6 text-start">
                                    <label for="validationTextarea" className="form-label pt-2">Message</label>
                                    <textarea className="form-control is-invalid" id="validationTextarea" placeholder="Required example textarea" required></textarea>
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
                </Frame>
            </div>
        );
    }
}