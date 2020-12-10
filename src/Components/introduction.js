import React, { Component } from 'react'

export default class Introduction extends Component {
    render() {
        return (
            <div>
                <section id="colorlib-hero" className="js-fullheight" data-section="home" >
                    <div className="overlay" />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                <div className="slider-text-inner js-fullheight">
                                    <div className="desc">
                                        <h3 style={{ color: 'blue' }}>Md Shawon Islam</h3>
                                        <h5>Prospective graduate student</h5>
                                        <h4 style={{ color: 'blue' }}>Bio</h4>
                                        <p>Hi! I am Md Shawon Islam. I have completed my undergrad in Electrical
                                         and Electronic Engineering from Rajshahi University of Engineering and Techonolgy,Bangladesh. I am a software engineer as well.</p>
                                        <h4 style={{ color: 'blue' }}>Degrees</h4>
                                        <p><b>B.Sc.,</b>in Electrical and Electronic Engineering from
                                        Rajshahi University of Engineering and Techonolgy.
                                        <br />Cgpa-<b>(3.39/4.00)</b>,Completed in Dec,2017.
                                        </p>
                                        <h6>GRE in Sep,2018. Score-314.Verbal-152,Quant-162,AWA-3</h6>
                                        <h6>IELTS in Jun,2019. Overall-6.5(L-7,R-6.5,W-6.5,S-6.5)</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div >
        )
    }
}
