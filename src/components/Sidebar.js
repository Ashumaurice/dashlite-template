const Sidebar = () => {
    return (
        <>
            <div className="nk-sidebar d-none d-sm-block" data-content="sidebarMenu">
                <div className="nk-sidebar-element nk-sidebar-head">
                    <div className="nk-sidebar-brand">
                        <a href="/" className="logo-link nk-sidebar-logo">
                            <img className="logo-light logo-img" src="./images/frame-9.png" srcset="./images/frame-9.png 2x" alt="logo"></img>
                            <img className="logo-dark logo-img" src="./images/frame-12.png" srcset="./images/frame-12.png 2x" alt="logo-dark"></img>
                        </a>
                    </div>
                    <div class="nk-menu-trigger mr-n2">
                        <a href="/" class="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em class="icon ni ni-arrow-left"></em></a>
                    </div>
                </div>
                <div class="gap"></div><div class="gap gap-lg"></div><div class="gap gap-20px"></div>
                <div class="nk-sidebar-element">
                    <div class="nk-sidebar-body" data-simplebar>
                        <div class="nk-sidebar-content">
                            <div class="nk-sidebar-widget d-none d-xl-block">
                                <ul class="nk-menu">
                                    <li class="nk-menu-item">
                                        <a href="/" class="nk-menu-link">
                                            <span class="nk-menu-icon"><em class="icon ni ni-dashboard"></em></span>
                                            <span class="nk-menu-text">Home</span>
                                        </a>
                                    </li>
                                    <li class="nk-menu-item">
                                        <a href="/" class="nk-menu-link">
                                            <span class="nk-menu-icon"><em class="icon ni ni-growth-fill"></em></span>
                                            <span class="nk-menu-text">Sign up</span>
                                        </a>
                                    </li>
                                    <li class="nk-menu-item">
                                        <a href="/" class="nk-menu-link">
                                            <span class="nk-menu-icon"><em class="icon ni ni-send"></em></span>
                                            <span class="nk-menu-text">Pay</span>
                                        </a>
                                    </li>
                                    <li class="nk-menu-item">
                                        <a href="/" class="nk-menu-link">
                                            <span class="nk-menu-icon"><em class="icon ni ni-setting"></em></span>
                                            <span class="nk-menu-text">Settings</span>
                                        </a>
                                    </li>
                                    <li class="nk-menu-heading">
                                            <h6 class="overline-title">Language</h6>
                                        </li>
                                    <li class="nk-menu-item">
                                        <a href="/" class="nk-menu-link">
                                            <span class="nk-menu-icon"><em class="icon ni ni-globe"></em></span>
                                            <span class="nk-menu-text">English</span>
                                        </a>
                                        <div class="dropdown">
                                            <div class="dropdown-menu">
                                                <ul class="link-list-opt">
                                                    <li><a href="/"><span>French</span></a></li>
                                                    <li><a href="/"><span>German</span></a></li>
                                                    <li><a href="/"><span>Chinese</span></a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="nk-menu-heading">
                                            <h6 class="overline-title">Find out more</h6>
                                        </li>
                                    <li class="nk-menu-item">
                                        <a href="/" class="nk-menu-link">
                                            <span class="nk-menu-icon"><em class="icon ni ni-help"></em></span>
                                            <span class="nk-menu-text">FAQ</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nk-sidebar nk-sidebar-fixed d-xl-none" data-content="sidebarMenu">
                <div className="nk-sidebar-element nk-sidebar-head">
                    <div className="nk-sidebar-brand">
                        <a href="/" className="logo-link nk-sidebar-logo">
                            <img className="logo-light logo-img" src="./images/frame-9.png" srcset="./images/frame-9.png 2x" alt="logo"></img>
                            <img className="logo-dark logo-img" src="./images/frame-12.png" srcset="./images/frame-12.png 2x" alt="logo-dark"></img>
                        </a>
                    </div>
                    <div class="nk-menu-trigger mr-n2">
                        <a href="/" class="nk-nav-toggle nk-quick-nav-icon d-xl-none" data-target="sidebarMenu"><em class="icon ni ni-arrow-left"></em></a>
                    </div>
                </div>
                <div class="nk-sidebar-element">
                    <div class="nk-sidebar-body" data-simplebar>
                        <div class="nk-sidebar-content">
                            <div class="nk-sidebar-widget d-none d-xl-block">
                                <ul className="nk-menu">
                                    <li className="nk-menu-item">
                                        <a href="/" className="nk-menu-link">
                                            <span className="nk-menu-icon"><em className="icon ni ni-growth-fill"></em></span>
                                            <span className="nk-menu-text text-dark">Earn</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;