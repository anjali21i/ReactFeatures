import React from 'react'
import "../styles/portfoliostyle.scss";

const Portfolio = () => {

    return (
        <div>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light"> <a className="navbar-brand weight-600" href="#">BootstrapLily</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"></span> </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mr-md-5">
                            <li className="nav-item active"> <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">About</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">Services</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">Portfolio</a> </li>
                            <li className="nav-item"> <a className="nav-link" href="#">Contact</a> </li>
                        </ul>
                        <a href="" className="btn btn-light text-blue">Hire Me</a> 
                    </div>
                </nav>
                <div id="parallax">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex align-items-center">
                                <div className="text-center w-100">
                                    <div className="tt mb-4"> <img src="img/main-profile.jpg" /> </div>
                                    <h1 className="display-5 weight-600">Hi, I'm Kevin Rich.</h1>
                                    <h6 className="mb-4">UI/UX Designer</h6>
                                    <p className="text-muted lead col-md-12 col-lg-8 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sint ea voluptas, commodi inventore fugiat.</p>
                                    <a href="#" className="btn btn-primary mt-5">Hire Me &rarr;</a> </div>
                            </div>
                        </div>
                    </div>
                    <a href="#" className="scrollDown"> <i className="lni lni-mouse"></i> </a>
                </div>
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h6 className="text-info small weight-600">Some of my awesome clients</h6>
                        </div>
                    </div>
                    <div className="row text-center mt-5">
                        <div className="col-lg-3 col-md-4 col-6 mb-5 yy"> <img src="img/amara.png" /> </div>
                        <div className="col-lg-3 col-md-4 col-6 mb-5 yy"> <img src="img/asgardia.png" /> </div>
                        <div className="col-lg-3 col-md-4 col-6 mb-5 yy"> <img src="img/aven.png" /> </div>
                        <div className="col-lg-3 col-md-4 col-6 mb-5 yy"> <img src="img/circle.png" /> </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-lg-3 col-md-4 col-6 mb-5 yy"> <img src="img/code-lab.png" /> </div>
                        <div className="col-lg-3 col-md-4 col-6 mb-5 yy"> <img src="img/earth-2.0.png" /> </div>
                        <div className="col-lg-3 col-md-4 col-6 mb-5 yy"> <img src="img/fox-hub.png" /> </div>
                        <div className="col-lg-3 col-md-4 col-6 mb-5 yy"> <img src="img/goldline.png" /> </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row align-items-center py-5">
                    <div className="col-md-12 col-lg-4">
                        <h2 className="mb-4 weight-600">My Services</h2>
                        <p className="text-muted mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id elit iaculis, pulvinar quam quis, porta mauris. </p>
                        <a href="" className="btn btn-outline-secondary mb-5 mb-md-0">My Services &rarr;</a> </div>
                    <div className="col-md-12 col-lg-8">
                        <div className="row">
                            <div className="col-6">
                                <div className="bg-new  p-5 text-white">
                                    <h4 className="bg-heading">#Design</h4>
                                    <ul className="list-unstyled uu">
                                        <li>user experience</li>
                                        <li>interface design</li>
                                        <li>product design</li>
                                        <li>mobile design</li>
                                        <li>illustration &amp;&amp; iconography</li>
                                        <li>frontend development</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="bg-new-2  p-5 text-white">
                                    <h4 className="bg-heading2">#Code</h4>
                                    <ul className="list-unstyled uu">
                                        <li>dapps</li>
                                        <li>web. mobile</li>
                                        <li>bridges</li>
                                        <li>smart contracts</li>
                                        <li>custom blockchains</li>
                                        <li>formal verifications</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-new-3 py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-12 text-center mb-5">
                            <h2>My Best Work</h2>
                        </div>
                    </div>
                    <div className="row align-items-center pb-5">
                        <div className="col-md-6 px-5">
                            <h4 className="mb-4">Portfolio Heading Goes Here</h4>
                            <p className="text-muted mb-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet ligula vitae suscipit dapibus. Nam mollis, leo non finibus rutrum, urna turpis blandit eros, vel semper quam urna et ero.</p>
                            <div className="bg-circle"><a href="" className="btn-link">View More &rarr;</a> </div>
                        </div>
                        <div className="col-md-6 mt-5 mt-md-0 nn"> <img src="img/portfolio-one.jpg" className="img-fluid rounded" /> </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-6 order-12 order-lg-1 nn"> <img src="img/portfolio-two.jpg" className="img-fluid rounded" /> </div>
                        <div className="col-md-6 px-5 order-1 order-lg-12">
                            <h4 className="mb-4">Portfolio Heading Goes Here</h4>
                            <p className="text-muted mb-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet ligula vitae suscipit dapibus. Nam mollis, leo non finibus rutrum, urna turpis blandit eros, vel semper quam urna et ero.</p>
                            <div className="bg-circle mb-5 mb-md-0"><a href="" className="btn-link">View More &rarr;</a> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pt-5">
                <div className="row pt-5">
                    <div className="col-12 text-center">
                        <h2 className="mb-4">Achievements</h2>
                        <p className="col-md-8 mx-auto text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet ligula vitae suscipit dapibus. Nam mollis, leo non finibus rutrum, urna turpis blandit eros, vel semper quam urna et eros.</p>
                    </div>
                </div>
                <div className="row justify-content-around align-items-center pt-5">
                    <div className="text-center">
                        <h2 className="tt">500+</h2>
                        <p className="text-muted small">Project Completed</p>
                    </div>
                    <div> <img src="img/separtor.jpg" /> </div>
                    <div className="text-center">
                        <h2 className="tt">24/7</h2>
                        <p className="text-muted small">Support</p>
                    </div>
                    <div> <img src="img/separtor.jpg" /> </div>
                    <div className="text-center">
                        <h2 className="tt">8+</h2>
                        <p className="text-muted small">Years of Experience</p>
                    </div>
                    <div> <img src="img/separtor.jpg" /> </div>
                    <div className="text-center">
                        <h2 className="tt">20+</h2>
                        <p className="text-muted small">Countries Served</p>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row pt-5">
                    <div className="col-12 text-center">
                        <h2>What My Customers Are Saying</h2>
                    </div>
                </div>
            </div>
            <div className="bg-2">
                <div className="container testimonials owl-carousel owl-theme">
                    <div className="row align-items-center py-5">
                        <div className="col-md-6 px-5">
                            <h5 className="mb-4 weight-600">Help us to improve our productivity</h5>
                            <p className="text-muted mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet ligula vitae suscipit dapibus. Nam mollis, leo non finibus rutrum, urna turpis blandit eros, vel semper quam urna et eros. </p>
                            <h6>Alexa Nickson</h6>
                            <p className="text-muted small">Social Media Manager</p>
                        </div>
                        <div className="col-md-6">
                            <div className="circle-new justify-content-center align-items-center">
                                <div><img src="img/inverted-comma.png"/></div>
                            </div>
                            <img src="img/img-profile-1.jpg" className="img-fluid"/> </div>
                    </div>
                    <div className="row align-items-center py-5">
                        <div className="col-md-6 px-5">
                            <h5 className="mb-4 weight-600">Help us to improve our productivity</h5>
                            <p className="text-muted mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet ligula vitae suscipit dapibus. Nam mollis, leo non finibus rutrum, urna turpis blandit eros, vel semper quam urna et eros. </p>
                            <h6>Jery George</h6>
                            <p className="text-muted small">Digital Marketer</p>
                        </div>
                        <div className="col-md-6">
                            <div className="circle-new justify-content-center align-items-center">
                                <div><img src="img/inverted-comma.png" /></div>
                            </div>
                            <img src="img/img-profile-3.jpg" className="img-fluid" /> </div>
                    </div>
                    <div className="row align-items-center py-5">
                        <div className="col-md-6 px-5">
                            <h5 className="mb-4 weight-600">Help us to improve our productivity</h5>
                            <p className="text-muted mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet ligula vitae suscipit dapibus. Nam mollis, leo non finibus rutrum, urna turpis blandit eros, vel semper quam urna et eros. </p>
                            <h6>Nicole Rich</h6>
                            <p className="text-muted small">Web Designer</p>
                        </div>
                        <div className="col-md-6">
                            <div className="circle-new justify-content-center align-items-center">
                                <div><img src="img/inverted-comma.png" /></div>
                            </div>
                            <img src="img/img-profile-4.jpg" className="img-fluid" /> </div>
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <div className="row pt-5">
                    <div className="col-12 text-center d-flex justify-content-center">
                        <div className="icon-circle-80 d-flex justify-content-center align-items-center"> <a href=""><i className="lni lni-facebook-filled"></i></a> </div>
                        <div className="icon-circle-80 d-flex justify-content-center align-items-center"> <a href=""><i className="lni lni-youtube"></i></a> </div>
                        <div className="icon-circle-80 d-flex justify-content-center align-items-center"> <a href=""><i className="lni lni-twitter-filled"></i></a> </div>
                        <div className="icon-circle-80 d-flex justify-content-center align-items-center"> <a href=""><i className="lni lni-instagram-filled"></i></a> </div>
                        <div className="icon-circle-80 d-flex justify-content-center align-items-center"> <a href=""><i className="lni lni-pinterest"></i></a> </div>
                    </div>
                </div>
            </div>
            <div className="bubble">
                <div className="container pb-5">
                    <div className="row" >
                        <div className="col-lg-8 mx-auto text-center">
                            <h3 className="mb-3">Call Back Form</h3>
                            <p className="text-muted small mb-5 weight-500">Fill all fields so we can get some info about you. We'll never send you spam</p>
                            <div className=" mt-4">
                                <form>
                                    <div className="row mb-2 pt-2">
                                        <div className="col-12 col-lg-6 form-group">
                                            <input type="text" className="form-control form-control-lg" placeholder="Name"/>
                                        </div>
                                        <div className="col-12 col-lg-6 form-group">
                                            <input type="email" className="form-control form-control-lg" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <textarea name="" cols="" rows="" className="form-control form-control-lg" placeholder="Message"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-secondary btn-lg w-100 d-block mt-4">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-secondary py-4">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center"> <span className="small text-white-50">© 2020 Your Company Name. All rights reserved. </span> </div>
                    </div>
                </div>
            </div>  
        </div >
    )
}

export default Portfolio;