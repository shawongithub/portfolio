import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <section id="colorlib-hero" className="js-fullheight" data-section="about" >
                    <div className="overlay" />
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                                <div className="slider-text-inner js-fullheight">
                                    <div className="desc">
                                        <br />
                                        <h4 style={{ color: 'blue' }}>Experiences</h4>
                                        <ul>
                                            <li>Programming skills<ol>
                                                <li>C/C++</li>
                                                <li>Python</li>
                                                <li>Java</li>
                                                <li> <a href="https://leetcode.com/shawon069/">LeetCode Profile</a></li>
                                            </ol></li>
                                            <li>
                                                Software development
                                                <ol>
                                                    <li>Designing database architecture
                                                </li>
                                                    <li>Python Web Framework(Django) for backend</li>
                                                    <li>Javascript and React for frontend</li>
                                                    <li>Android Studio</li>
                                                </ol>
                                            </li>
                                            <li>
                                                Microcontroller
                                                <ol>
                                                    <li>Arduino Uno</li>
                                                </ol>
                                            </li>
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
