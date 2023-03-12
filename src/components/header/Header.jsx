import React from 'react'
import {AiFillCheckCircle} from 'react-icons/ai'
import './Header.css'

const Header = () => {
  return (
    <header>
        <div className='header'>
            <div className="title">
                <h2>Tweets <br /> Conference <br /> Eps. 3.0</h2>
            </div>

            <div className="speakers">
                <div className="speaker">
                    <div className="texticon">
                        <div className="speak-text">
                            <p>3 Keynote speakers <span><AiFillCheckCircle /></span></p>
                            
                        </div>
                        <div className="speak-text">
                            <p>4 Panelists <span><AiFillCheckCircle /></span></p>
                        </div>
                        <div className="speak-text">
                            <p>3 Angel Investors <span><AiFillCheckCircle /></span></p>
                        </div>
                        
                    </div>

                    <div className="texticon2">
                        <div className="speak-text">
                            <p>$10,000 Hackhathon Prize <span><AiFillCheckCircle /></span></p>
                        </div>
                        <div className="speak-text">
                            <p>30 Web3 Startups <span><AiFillCheckCircle /></span></p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="subtitle">
                <p className="date">
                    Date:<span>5th, 6th of May, 2023</span>
                </p>
                <div className="getVideo">
                    <button className="ticket" type="submit">
                        Get your ticket
                    </button>
                    <button className="ticket video" type="submit">
                        Watch Video
                    </button>
                </div>
            </div>  
        </div>
    </header>
    
  )
}

export default Header






