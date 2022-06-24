const Login = () => {

//     const [state, handleSubmit] = useForm("xknyzvwj");
//   if (state.succeeded) {
//       return <p>Thanks for joining!</p>;
//   }
    return (

        <body class="nk-body bg-white npc-general pg-auth">
            <div class="nk-app-root">
                <div class="nk-main ">
                    <div class="nk-wrap nk-wrap-nosidebar">
                        <div class="nk-content ">
                            <div class="nk-block nk-block-middle nk-auth-body  wide-xs">
                                <div class="brand-logo pb-4 text-center">
                                    <a href="html/index.html" class="logo-link">
                                        <img class="logo-light logo-img logo-img-lg" src="./images/main-new.jpg" alt="logo"></img>
                                        <img class="logo-dark logo-img logo-img-lg" src="./images/main-new.jpg" alt="logo-dark"></img>
                                    </a>
                                </div>
                                <div class="card card-bordered">
                                    <div class="card-inner card-inner-lg">
                                        <div class="nk-block-head">
                                            <div class="nk-block-head-content">
                                                <h4 class="nk-block-title">Login</h4>
                                                <div class="nk-block-des">
                                                    <p>Access the Galaxi panel using your email and passcode.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <form action="/">
                                            <div class="form-group">
                                                <div class="form-label-group">
                                                    <label class="form-label" for="default-01">Email or Username</label>
                                                </div>
                                                <div class="form-control-wrap">
                                                    <input type="text" class="form-control form-control-lg" id="default-01" placeholder="Enter your email address or username"></input>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="form-label-group">
                                                    <label class="form-label" for="password">Passcode</label>
                                                    <a class="link link-primary link-sm" href="html/pages/auths/auth-reset-v2.html">Forgot Code?</a>
                                                </div>
                                                <div class="form-control-wrap">
                                                    <a href="/" class="form-icon form-icon-right passcode-switch lg" data-target="password">
                                                        <em class="passcode-icon icon-show icon ni ni-eye"></em>
                                                        <em class="passcode-icon icon-hide icon ni ni-eye-off"></em>
                                                    </a>
                                                    <input type="password" class="form-control form-control-lg" id="password" placeholder="Enter your passcode"></input>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <button class="btn btn-lg btn-primary btn-block">Login</button>
                                            </div>
                                        </form>
                                        <div class="form-note-s2 text-center pt-4"> New on our platform? <a href="/register">Create an account</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="nk-footer nk-auth-footer-full">
                                <div class="container wide-lg">
                                    <div class="row g-3">
                                        <div class="col-lg-6 order-lg-last">
                                            <ul class="nav nav-sm justify-content-center justify-content-lg-end">
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/">Terms & Condition</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/">Privacy Policy</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/contact">Help</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-6">
                                            <div class="nk-block-content text-center text-lg-left">
                                                <p class="text-soft">&copy; 2022 Galaxi. All Rights Reserved.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Login;