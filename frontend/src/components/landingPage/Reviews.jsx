import React from 'react'
import './reviews.scss';
import LeftArrow from "../../assets/LeftArrow.png"
import RightArrow from "../../assets/RightArrow.png"

function Reviews() {
    return (
    <div className='reviews-container'>
        <div className='testimonials-container'>
            <div className='testimonials-heading'>
                <h1 className='testimonials-title'>Hear what our customers are saying</h1>
                <p className='testimonials-description'>Ever bought airtime worth 10 times what you intended to purchase? We've been able to help a number of our users make the best of their typo errors.</p>
            </div>
            <div className='reviews-container'>
                <div className='testimonials-bar'>
                    <img src={LeftArrow} alt="left arrow" className='leftimg'/>
                    <img src={RightArrow} alt="right arrow" className='rightimg'/>
                </div>
                <div className='reviews'>
                    <div className='review-box'>
                        <h1 className='review-title'>Oluwatofarati Agbaje</h1>
                        <p className='review-text'>
                            Airtime2Cash is my go-to whenever I make a mistake with my airtime purchase.
                        </p>
                    </div>
                    <div className='review-box'>
                    <h1 className='review-title'>Oshevire Majoroh</h1>
                        <p className='review-text'>
                            I can't count how many times Airtime2Cash has spared me the ill-fortune of wasting airtime.
                        </p>
                    </div>
                    <div className='review-box'>
                    <h1 className='review-title'>Haruna Nuhu</h1>
                        <p className='review-text'>
                            I once bought 50,000 Naira worth of airtime when I meant to buy 5,000 Naira. I don't know what I would have done without Airtime2Cash.
                        </p>
                    </div>
                    <div className='review-box'>
                    <h1 className='review-title'>Eunice Obebe</h1>
                        <p className='review-text'>
                            All my friends know about Airtime2Cash. I've been able to help them out of a few tight spots.
                        </p>
                    </div>    
                    <div className='review-box'>
                    <h1 className='review-title'>Basil Ohuruogu</h1>
                        <p className='review-text'>
                            I've been using Airtime2Cash for a while now. I've never had any issues with them.
                        </p>
                    </div>   
                    <div className='review-box'>
                    <h1 className='review-title'>Stanley Omeje</h1>
                        <p className='review-text'>
                            I've been able to make a few extra bucks from my leftover credits. I'm glad I found Airtime2Cash.
                        </p>
                    </div>    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reviews