import './Experience.css'
import Main from '../../assets/tweetQ.png'
import Speaker from '../../assets/tweetI.png'

const Experience = () => {
  return (
    <div className='experience'>
      <div className="in-experience">
        <div className="title-experience">
          <h2>What experience will Tweets <br /> Conference Eps 3.0</h2>
          <p>Meet our Panel Speakers towards unveiling future tecnologies</p>
        </div>

        <div className="speaker-experience">
          <img src={Main} alt="" />

          <div className="speaker-text">
            
            <div className="main-speaker">
              <img className='imgMain' src={Speaker} alt="" />

              <div className="main-text">
                <h4>Sophia by Hanson Robotics</h4>
                <p>World’s First Humanoid Robot</p>
              </div>
            </div>

            <div className="main-speaker">
              <img className='imgMain' src={Speaker} alt="" />
              <div className="main-text">
                <h4>Sophia by Hanson Robotics</h4>
                <p>World’s First Humanoid Robot</p>
              </div>
            </div>

            <div className="main-speaker">
              <img className='imgMain' src={Speaker} alt="" />
              <div className="main-text">
                <h4>Sophia by Hanson Robotics</h4>
                <p>World’s First Humanoid Robot</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience


