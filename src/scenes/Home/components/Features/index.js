import React, { Component } from 'react';
import CollapseText from '../../../../components/CollapseText'
import { Grid, Row , Col } from 'react-bootstrap';

class Features extends Component {

    constructor() {
        super();
    }

    render(){
        return(
            <section id="features" className="features-section section" >
                <Grid>
                    <Row className="text-center">
                        <Col md={ 12 }>
                            <h2 className="section-heading wow fadeIn" data-wow-duration="2.5s">
                                About RealSafe
                            </h2>
                        </Col>
                        <Col md={ 10 } mdOffset={ 1 } className="description">
                            <p> RealSafe puts any company, partnership, or membered organization onto blockchain with its own token and greater proof of ownership. Existing owners receive unique tokens to replace their shares and officers get a powerhouse of complex financial dealing and governance options at their disposal. Deals intertwine with governance as templated transaction groups. Tokens are owned by KYC compliant persons eliminating the need for transfer agent services.  Tokens are tradable on the RealSafe marketplace. Entities become RealSafe Organizations (RSO)s, decentralized autonomous oragnizations owned 100% by their token holders, managed with security and transparency on the Ethereum blockchain. Pay dividends to just one account and watch them disburse automatically to all current owners.  The LLC and LP can trade like an ETF, with instant proof of ownership reporting. RealSafe records KYC on each token holder so the CFO can easily track all token holders who receive any dividend payout throughout the year. No more worrying at tax time. RSOs feature automated distributions and separable voting and ownership tokens. RealSafe Platform offers many transaction types and these services: </p>
                        </Col>
                    </Row>
                    <Row className="platform">
                        <Col md={ 4 } sm={ 6 }>
                            <ul className="list-left wow fadeInLeft animated" data-wow-duration="2.5s">
                                <li className="item">
                                    <h5>Power and flexibility</h5>
                                    <p>Any deal imaginable is votable as an Issue.  Create an Issue to set a wallet to receive disclosable comissions whenever a trade is made of the company token, easily creating the position of a marketing manager. That's unbelieveable power.</p>
                                </li>
                                <li className="item">
                                    <h5>RealSafe Marketplace </h5>
                                    <p>Lists all RSOs - The trading of an RSO commences the moment any owner creates a market by offering any amount of his apportioned tokens on the RealSafe MarketPlace.</p>
                                </li>
                            </ul>
                        </Col>
                        <Col md={ 4 } mdPush={ 4 } sm={ 4 }>
                            <ul className="list-right wow fadeInRight animated" data-wow-duration="2.5s">
                                <li className="item">
                                    <h5>Proof of Ownership</h5>
                                    <CollapseText text="Ownership changes hands. RealSafe proves ownership at a degree far higher than corporate books.  Anyone can view company data on blockchain. But only RSO master wallet signatories can see unencrypted KYC data, linking owners by name and ID to the company on any specified date privately. This creates an unprecedented level of protection for each owner.  RealSafe simulates requirements of the real world with greater proof of ownership using a decentralized and secure network that the platform converts into a corporate ownership tracking authority." size="208"/>
                                </li>
                                <li className="item">
                                    <h5>Compliance - Max. Owners Lock</h5>
                                    <p>RSO signatories set corporate preferences to allow investor buy-in restrictions such as minimum and maximum number of total owners, buy/sell frequency limits etc.</p>
                                </li>
                            </ul>
                        </Col>
                        <Col md={ 4 } mdPull={ 4 } className="text-center">
                            <img src={'assets/img/blockchain_explorer.jpg'} className="image wow fadeInUp animated" alt="" data-wow-duration="2.5s" />
                        </Col>
                    </Row>
                </Grid>
            </section>
        )
    }
}

export default Features;
