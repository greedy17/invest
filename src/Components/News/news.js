import React from 'react';
import {Jumbotron,Image} from 'react-bootstrap';
import {ImGithub, ImTwitter,ImInstagram} from 'react-icons/im';
import logo from '../../assets/images/whiteLogo.png';
import {Link} from 'react-router-dom';
import './news.css';
import glasses from '../../assets/images/glasses.jpg';
import headphones from '../../assets/images/headphones.jpg';
import invest from '../../assets/images/invest.png';
import phone from '../../assets/images/phone.png';
import bose from '../../assets/images/bose.png';

const News = props => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    return(
        <div className="main-page">
    
            <Jumbotron className="photo-grid">
            <div class="row">
                <div class="column">
                    <div className="center-featured">
                        <img alt="grid" src={invest}/>
                        <h2 className="featured-text">FEATURED PRODUCTS:</h2>
                    </div>
                    <img alt="grid" src={glasses}/>
                    <img alt="grid" src={headphones}/>
                    <img alt="grid" src={phone}/>
                </div>
                <div class="column">
                    <img alt="grid" src={bose}/>
                    <img alt="grid" src={glasses}/>
                    <img alt="grid" src={headphones}/>
                </div>
                <div class="column">
                    <img alt="grid" src={phone}/>
                    <img alt="grid" src={headphones}/>
                    <img alt="grid" src={glasses}/>
                </div>
                <div class="column">
                    <img alt="grid" src={bose}/>
                    <img alt="grid" src={headphones}/>
                    <img alt="grid" src={phone}/>
                </div>
            </div>
            </Jumbotron>

            <Jumbotron className="investor-tips">
            <div class="row">
                <div class="column">
                    <div className="center-featured">
                        <h1 className="tip-title">Owner Tips:</h1>
                    </div>
                </div>
                <div class="column">
                    <div className="center-featured mart">
                        <h2 className="featured-text">Hard Data:</h2>
                        <p>If your company has been up and running for a while, then you need to show that you’ve had excellent financial performance so far. If your company hasn’t yet started up, then you need to show what you can expect to bring in, when you’ll hit your goal numbers, and when your investor can expect to start earning their money back.</p>
                    </div>
                    <div className="center-featured mart">
                        <h2 className="featured-text">A Solid Business Plan:</h2>
                        <p>A solid business plan demonstrates to investors that you’re serious about your business and that you’ve given thought to your plans to make money. While your business plan alone won’t be enough to convince investors to back you, no investor will put money in without one. Try our <Link to="/businessPlan" className="story-date">BUSINESS PLAN BUILDER</Link></p>
                    </div>
                </div>
                <div class="column">
                    <div className="center-featured mart">
                        <h2 className="featured-text">A Unique Idea:</h2>
                        <p>Both investors and the general public get excited about the words “new and innovative.” The bottom line is that if the market is saturated with hundreds of identical products, then your company isn’t likely to be a huge hit.</p>
                    </div>
                    <div className="center-featured mart">
                        <h2 className="featured-text">A Strong Narrative</h2>
                        <p>Investors hear a lot of pitches packed with hard data – given two companies with similar projected returns, what makes an investor choose one over the other? The story! Your investors are people, not robots, and they can be swayed by a great narrative about why this business matters to you, where the idea came from, and where you’re planning to take it.</p>
                    </div>
                </div>
                <div class="column">
                    <div className="center-featured mart">
                        <h2 className="featured-text">Business Readiness:</h2>
                        <p>Many people have prospective business ideas, but not many people have the drive and wherewithal to take those ideas and shape them into a working, financially viable business. Show your investors that not only can you talk the talk, but that you’re ready to walk the walk.</p>
                    </div>
                    <div className="center-featured mart">
                        <h2 className="featured-text">Structure</h2>
                        <p>Having a clear valuation for your business – a way to back up your request for a certain amount of money in exchange for a certain amount of ownership. If you want $100,000 for a 10% share, for example, you need to be able to show that your business is actually worth $1 million.</p>
                    </div>
                </div>
            </div>
            </Jumbotron>

            <div className="main-footer">
                <div className="center">
                    <h4 className="connect">Connect with us!</h4>
                    <div className="icons">
                        <ImGithub href="https://github.com/greedy17/invest"/><ImTwitter className="foot-icons"/><ImInstagram className="foot-icons"/>
                    </div>
                </div>                      
                <p className="text-center copy">Copyright &copy;<span><Image src={logo} height={20}/></span>2021</p>
            </div>
        
            <div>
            </div>
        </div>
    ) 

}

export default News;