import React from 'react'
import './Home.css';
import img from './background.jpeg';
import { Link, } from 'react-router-dom'

class Home extends React.Component {

  render(){
    const style = {
      linkLine: {textDecoration: 'none'},
    }
    return(
        <div className="home__main">
            <div className="My-portfolio">
                <img src={img} className="Home-img_pc" alt="logo" />                <img src={img} className="Home-img" alt="logo" />
                <img src={img} className="Home-img_sp" alt="logo" />
                <Link style={style.linkLine} to="/About">
                  <div className="About">
                    <div className="About-text">About</div>
                  </div>
                </Link>
                <Link style={style.linkLine} to="/Work">
                  <div className="Work">
                    <div className="Work-text">Work</div>
                  </div>
                </Link>
                <Link style={style.linkLine} to="/Contact">
                  <div className="Contact">
                    <div className="Contact-text">Contact</div>
                  </div>
                </Link>
            </div>
        </div>
    )
  }
}
export default Home;
