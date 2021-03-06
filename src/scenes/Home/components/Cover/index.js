import React, { Component } from 'react';

import autobind from 'autobind-decorator';

import { Row , Col } from 'react-bootstrap';

import ModalVideo from 'react-modal-video'

@autobind
class Cover extends Component {

    constructor() {
        super();

        this.state = {
            isOpen: false,
            displayVideo: ''
        }
    }

    openModal () {
       this.setState({isOpen: true})
       this.setState({ displayVideo: 'displayVideo'});
     }

    render(){
        return(
            <section id="home" className="cover-section section parallax-background section-inverse-color" data-stellar-background-ratio="0.4" style= {{ backgroundPosition: '50% 0px' }}>
                <div className="video-background-container parallax" data-stellar-ratio="0.4">
                    <video className={"video-background "+this.state.displayVideo }preload="auto" autoPlay loop muted>
                        <source type="video/mp4" src={'assets/img/final_video.mp4'} />
                    </video>
                    <a href="#features" className="anchor-link">
		                  <img src={'assets/img/arrow.png'} alt=""  className="arrow"/>
	                 </a>
                </div>
                <div className="black-dot-background-overlay"> </div>
                {/*<ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='Z3CUoIHnYTk' onClose={() =>{ this.setState({isOpen: false}); this.setState({displayVideo:''})}} /> */}
                  <div className="cover-play wow flip wowed animated" data-wow-iteration="5" data-wow-duration="0.15s">
                      <img src={ 'assets/img/play.png'} />
                  </div>
                <div className="wrap">
                    <Row className="rs-content" data-stellar-offset-parent="true">
                        <Col lg={ 12 } md={ 12 } className="rs-text text-center wow bounceInDown wowed animated" data-wow-duration="1s" data-wow-delay="0.5s">
                            {/* <h1 className="rs-title">Empowering Banks to Empower You</h1>*/}
                            <p className="rs-description">Proof of Ownership. Step Up Your Corporation to Finance, Trade, Negotiate, Escrow, Raise, Vote, Pay Dividends and Add Partners 100% on the Ethereum Blockchain</p>
                             <div className="btn-cta">
                                 <a  href="https://ico.realsafe.co/" target="_blank" className="btn btn-app-download crowdsale">
                                     <i className="fa fa-sign-in"></i>
                                     Join crowdsale
                                 </a>
                                 <a href={ 'assets/doc/RealSafe_Whitepaper_v3.pdf' } target="_blank" className="btn btn-app-download">
                                     <i className="fa fa-download"></i>
                                     Download WhitePaper
                                 </a>
                             </div>
                        </Col>
                    </Row>
                </div>
            </section>
        )
    }
}

export default Cover;
