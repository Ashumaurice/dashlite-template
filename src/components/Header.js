function Header() {
    return (
        <div class="nk-header nk-header-fluid nk-header-fixed is-white">
            <div class="container-fluid">
                <div class="nk-header-wrap">
                    <div class="nk-menu-trigger d-xl-none ml-n1">
                        <a href="/" class="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em class="icon ni ni-menu"></em></a>
                    </div>
                    <div class="nk-header-brand d-xl-none">
                        <a href="/" class="logo-link">
                            <img class="logo-light logo-img" src="./images/logo.png" srcset="./images/frame-9.png 2x" alt="logo"></img>
                            <img class="logo-dark logo-img" src="./images/logo-dark.png" srcset="./images/frame-12.png 2x" alt="logo-dark"></img>
                        </a>
                    </div>
                    <div class="nk-header-tools">
                        <ul class="nk-quick-nav">
                            <li>
                                <a href="/"
                                    className="btn btn-primary d-none d-sm-block text-dark">
                                    <span>Contact Us</span></a>
                            </li>

                            <li>
                                <a href="/"
                                    className="btn btn-primary d-xl-none d-sm-block text-dark">
                                    <span>Contact Us</span></a>
                            </li>
                            <li>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;