import './Exhibitor.css'

const Exhibitor = () => {
  return (
    <div className='exhibitor'>
      <div className="exhibitor-main">
        <div className="exhibitor-text">
          <h2>Become the next top brand <br /> 
          Exhibiting your product</h2>
        </div>
        <div className="exhibitor-pitch">

          <div className="exhibit-pitch-left">
            <div className="exhibit-pitch-box">
              <div className="exhibit-box-left">
                <p>$500</p>
              </div>
              <div className="exhibit-box-right">
                <h2>Pitch at Tweet Conference 3.0</h2>
                <p>10Mins product pitch and Q/A session</p>
              </div>
            </div>
            <p>By becoming an exhibitor, you'll have the opportunity 
              to demonstrate your products in a hands-on environment, engage with potential 
              customers, and build relationships with industry influencers. With the right 
              approach, you can leverage your trade show presence to generate leads, close deals, 
              and establish your brand as a leader in your industry.</p>
          </div>

          <div className="exhibit-pitch-right"> 
            <input type="text" name="name" id="name" placeholder='Name' required />
            <input type="text" name="email" id="email" placeholder='Email' required />
            <input type="text" name="company" id="company" placeholder='Company Name' required />
            <textarea name="product" id="product" rows="10" placeholder='Product Information' required></textarea>
            <button type="submit">Exhibit my product</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exhibitor



