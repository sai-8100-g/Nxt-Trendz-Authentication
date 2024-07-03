import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="homeCard">
      <div className="homeInfo">
        <h1 className="homeHeading">Clothes That Get YOU Noticed</h1>
        <p className="homePara">
          Fashion is part of the daily air with authentication by applying the
          concepts we have learned till now.In this project lets build Nxt
          Trendz app with authentication by applying the concepts we have
          learned till now.In this project lets build Nxt Trendz app with
          authentication by applying the concepts we have learned till now.
        </p>
        <button type="button" className="shopNowBtn">
          Shop Now
        </button>
      </div>
      <div className="homeImg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  </>
)

export default Home
