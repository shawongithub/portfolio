import React, { Component } from 'react'

export default class Timeline extends Component {
    render() {
        return (
            <div>
                <section id="colorlib-hero" className="js-fullheight" data-section="timeline" >
                    <div className="overlay" />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                <div className="slider-text-inner js-fullheight">
                                    <div className="desc">
                                        <h4 style={{ color: 'blue' }}>Projects</h4>
                                        <ol>
                                            <li>Line follower robot</li>
                                            <li><a href="http://shawon.pythonanywhere.com/vocabulary/list/">Personalized learning app</a></li>
                                            <li><a href="https://burger-73c18.web.app/login">Burger builder app</a></li>
                                        </ol>
                                        <br />
                                        <h4 style={{ color: 'blue' }}>Publications</h4>
                                        <p>Mahfuzur Rahman, Md. Shawon Islam and Md. Farhamdur Reza, “A Higher Immune Tapered Beamforming using Gaussian Window in the Presence of Amplitude Errors”,
                                        International Conference on Electrical Engineering and Information & Communication Technology,
                                         September 13-15, 2018, MIST, Dhaka</p>
                                        <br />
                                        <h4 style={{ color: 'blue' }}>Research Interests</h4>
                                        <ul>
                                            <li>Internet of Things</li>
                                            <li>Cybersecurity</li>
                                            <li>Digital Signal Processing</li>
                                            <li>Machine Learning</li>
                                            <li>Data Science</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
