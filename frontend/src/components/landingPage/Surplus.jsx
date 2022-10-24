import React from 'react'
import LoginImage from '../../assets/Login.png'
import Dashboard from '../../assets/Dashboard.png'
import Spinning from '../../assets/Spinning.png'
import './surplus.scss';

function Surplus() {
    return (
        <div className='surplus-container'>
            <div className='surplus-overlay'>
                <div className='surplus-overlay-graphic'></div>
                <div className='surplus-overlay-text'>
                    <h3 className='surplus-overlay-title'>Change Surplus Airtime to Real Cash</h3>
                    <p className='surplus-overlay-description'>In three simple steps change airtime to cash</p>
                </div>
            </div>
            <div className='actions'>
                <div className='sup-login box'>
                    <img className='action-icon' src={LoginImage} alt="Login"/>
                    <div className="login-text box-inner">
                        <h1 className='box-inner-heading'>Login Or Register</h1>
                        <p className='box-inner-text'>Register a verified account to start transferring surplus airtime.</p>
                    </div>
                </div>
                <div className='deposit box'>
                    <img className='action-icon' src={Dashboard} alt="Dashboard"/>
                    <div className="deposit-text box-inner">
                        <h1 className='box-inner-heading'>Deposit From Dashboard</h1>
                        <p className='box-inner-text'>Transfer your credits to be confirmed shortly and have your wallet credited.</p>
                    </div>
                </div>
                <div className='convert box'>
                    <img className='action-icon' src={Spinning} alt="Spinning" />
                    <div className="convert-text box-inner">
                        <h1 className='box-inner-heading'>Convert</h1>
                        <p className='box-inner-text'>You can withdraw the credits to your bank account! Just provide the details.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Surplus;