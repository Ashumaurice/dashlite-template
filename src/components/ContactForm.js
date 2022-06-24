import { useForm } from '@formspree/react';


// function ContactForm() {

//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();

//         emailjs.sendForm('service_5tzml3w', 'template_5u2u8nh', form.current, 't0_GoV3izz_foddAX')
//             .then((result) => {
//                 console.log(result.text);
//                 alert("SUCCESS!");
//             }, (error) => {
//                 console.log(error.text);
//                 alert("FAILED...", error);
//             });
//     };

function ContactForm() {
        const [state, handleSubmit] = useForm("xknyzvwj");
        if (state.succeeded) {
          return <div>Thank you!</div>;
        }

    return (
        <div className="nk-app-root">
            <div className="nk-main ">
                <div className="nk-wrap nk-wrap-nosidebar">
                    <div className="nk-content">
                        <div className="nk-block nk-block-middle nk-auth-body  wide-xl">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-xl-20">
                                            <div className="row align-items-center g-0">
                                            <div className="">
                                                <div className="card card-shadow">
                                                    <div className="card-inner card-inner-lg">
                                                        <div className="form-block">
                                                            <div className="section-head section-head-sm">
                                                                <h4 className="title text-center">Getting started with Galaxi</h4>
                                                            </div>&nbsp;
                                                            <form onSubmit={handleSubmit}>
                                                                <div className="row g-4">
                                                                    <div className="col-md-12">
                                                                        <div className="form-group">
                                                                            <label className="form-label" htmlFor="name">First Name</label>
                                                                            <div className="form-control-wrap">
                                                                                <input type="name" className="form-control form-control-lg" id="name" placeholder="First Name" name="name"></input>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-12">
                                                                        <div className="form-group ">
                                                                            <label className="form-label" htmlFor="name">Last Name</label>
                                                                            <div className="form-control-wrap">
                                                                                <input type="name" className="form-control form-control-lg" id="name" placeholder="Last Name" name="name"></input>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-12">
                                                                        <div className="form-group">
                                                                            <label className="form-label" htmlFor="email">Enter Your Email</label>
                                                                            <div className="form-control-wrap">
                                                                                <input type="email" className="form-control form-control-lg" id="email" placeholder="Enter Your Email" name="email"></input>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-12">
                                                                        <div className="form-group ">
                                                                            <label className="form-label" htmlFor="name">What Country do you reside in?</label>
                                                                            <div className="form-control-wrap">
                                                                                <input type="name" className="form-control form-control-lg" id="name" placeholder="Select Country" name="name"></input>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="datacheckbox">
                                                                        <label className="form-label" htmlFor="name">What products are you interested in?</label>
                                                                        <div className="custom-control custom-checkbox col-md-12">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck1"></input>
                                                                            <label className="custom-control-label" htmlFor="customCheck1">Galaxi Depsoits: Earn interest on your cryptocurrency</label>
                                                                        </div>&nbsp;
                                                                        <div className="custom-control custom-checkbox col-md-12">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck2"></input>
                                                                            <label className="custom-control-label" htmlFor="customCheck2">Galaxi Credit: Borrow cash secured by your crypto assets</label>
                                                                        </div>&nbsp;
                                                                        <div className="custom-control custom-checkbox col-md-12">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck3"></input>
                                                                            <label className="custom-control-label" htmlFor="customCheck3">Galaxi Exchange: Buy & sell Bitcoin and cryptos</label>
                                                                        </div>&nbsp;
                                                                        <div className="custom-control custom-checkbox col-md-12">
                                                                            <input type="checkbox" className="custom-control-input" id="customCheck4"></input>
                                                                            <label className="custom-control-label" htmlFor="customCheck4">Galaxi Pay: Send money, shop online, make donations</label>
                                                                        </div>&nbsp;
                                                                    </div>
                                                                    <div className="datacombobox1">
                                                                        <label className="form-label" htmlFor="name">Do you have a crypto wallet like Metamask, Ledger, Fortmatic? Wallets are used to send, receive, and store digital assets like Bitcoin.</label>
                                                                        <div className="custom-control custom-radio col-md-12">
                                                                            <input type="radio" className="custom-control-input" id="customRadio1"></input>
                                                                            <label className="custom-control-label" htmlFor="customCheck1">Yes, I have a wallet</label>
                                                                        </div>&nbsp;
                                                                        <div className="custom-control custom-radio col-md-12">
                                                                            <input type="radio" className="custom-control-input" id="customRadio2"></input>
                                                                            <label className="custom-control-label" htmlFor="customCheck2">No, I don't own a wallet</label>
                                                                        </div>&nbsp;
                                                                    </div>
                                                                    <div className="datacombobox2">
                                                                        <label className="form-label" htmlFor="name">How did you hear about us?</label>
                                                                        <div className="custom-control custom-radio col-md-12">
                                                                            <input type="radio" className="custom-control-input" id="customRadio1"></input>
                                                                            <label className="custom-control-label" htmlFor="customCheck1">Google</label>
                                                                        </div> &nbsp;
                                                                        <div className="custom-control custom-radio col-md-12">
                                                                            <input type="radio" className="custom-control-input" id="customRadio2"></input>
                                                                            <label className="custom-control-label" htmlFor="customCheck2">Word of mouth</label>
                                                                        </div> &nbsp;
                                                                        <div className="custom-control custom-radio col-md-12">
                                                                            <input type="radio" className="custom-control-input" id="customRadio3"></input>
                                                                            <label className="custom-control-label" htmlFor="customCheck3">Social Media</label>
                                                                        </div> &nbsp;
                                                                        <div className="custom-control custom-radio col-md-12">
                                                                            <input type="radio" className="custom-control-input" id="customRadio4"></input>
                                                                            <label className="custom-control-label" htmlFor="customCheck4">Other</label>
                                                                        </div> &nbsp;
                                                                    </div>
                                                                    <div className="col-md-12">
                                                                        <button className="btn btn-lg btn-primary" type="submit" disabled={state.submitting}>Submit</button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;