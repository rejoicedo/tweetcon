import './Sponsor.css'

const data = [
  {
    id: 1,
    price: '1,500',
    title: 'Become our basic sponsor',
    desc: "Brand logo on all materials, Joint announcement on all socials, Partnership announcement on Twitter space, 10Mins product pitch and Q/A session, Company’s recent objective on brochures, Booth Space"
  },
  {
    id: 2,
    price: '5,000',
    title: 'Become our exclusive sponsor',
    desc: "Brand logo on all materials, Joint announcement on all socials, Partnership announcement on Twitter space, 10Mins product pitch and Q/A session, Company’s recent objective on brochures, Booth Space"
  },
  {
    id: 3,
    price: '20,000',
    title: 'Become our premium sponsor',
    desc: "Brand logo on all materials Joint announcement on all socials Partnership announcement on Twitter space 10Mins product pitch and Q/A sessionCompany’s recent objective on brochures, On-site QR Code to social media & Bonus TV's Advert on sponsorship value, Access attendee contacts, Booth Space"
  },
]


const Sponsor = () => {
  return (
    <div className='sponsor'>
      <div className="sponsor-main">
        <div className="main">
          <h2>Become the talk of a global <br /> community towards a global cause.</h2>
          <hr />
        </div>

        <div className="main-pitch">
          {
            data.map(({id, price, title, desc}) => {
              return (
                  <div className="pitch-left">
                    <div key={id} className="pitch-box">
                      <div className="box-left">
                        <p>${parseInt(price.replace(",", ""))}</p>
                      </div>
                      <div className="box-right">
                        <h3>{title}</h3>
                        <p>{desc}</p>
                      </div>
                    </div>
                  </div>
                )
              })
            }
        </div>

      </div>
    </div>
  )
}

export default Sponsor