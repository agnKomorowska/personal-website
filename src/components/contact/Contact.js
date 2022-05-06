import React from 'react';
import '../../App.scss';
import Frame from '../common/Frame';
import Background from '../common/Background';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'; 

export default class Contact extends React.Component {

    handleSubmit = (event) => {
        event.preventDefault();

        //this.resetForm(document.getElementById("contactForm"));
        alert("Sorry! This functionality doesn't wotk yet.")
    };

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
                                <form className="needs-validation" id="contactForm" onSubmit={this.handleSubmit}>
                                    <div className="row g-3">
                                        <div className="col-12 text-start">
                                            <label htmlFor="formTitle" className="form-label pt-2">Message Title</label>
                                            <input type="text" className="form-control" id="formTitle" required />
                                            <div className="invalid-feedback">
                                                Please enter a message title.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-3">
                                        <div className="col-12 text-start">
                                            <label htmlFor="formEmail" className="form-label pt-2">Email</label>
                                            <input type="text" className="form-control" id="formEmail" required />
                                            <div className="invalid-feedback">
                                                Please enter your email.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row g-3">
                                        <div className="col-12 text-start">
                                            <label htmlFor="formMessage" className="form-label pt-2">Message</label>
                                            <textarea className="form-control" id="formMessage" required></textarea>
                                            <div className="invalid-feedback">
                                                Please enter a message in the textarea.
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-light" type="submit" >Send</button>
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

        // resetForm = function (form) {
    //     // clearing inputs
    //     let inputs = form.getElementsByTagName("input");
    //     for (let i = 0; i < inputs.length; i++) {
    //         switch (inputs[i].type) {
    //             case "text":
    //             case "number":
    //             case "date":
    //                 inputs[i].value = "";
    //                 break;

    //             case "radio":
    //             case "checkbox":
    //                 inputs[i].checked = false;
    //         }
    //     }

    //     // clearing selects
    //     let selects = form.getElementsByTagName("select");
    //     for (let i = 0; i < selects.length; i++)
    //         selects[i].selectedIndex = 0;

    //     // clearing textarea
    //     let text = form.getElementsByTagName("textarea");
    //     console.log(text);
    //     for (let i = 0; i < text.length; i++)
    //         text[i].value = "";

    //     return false;
    // }
}