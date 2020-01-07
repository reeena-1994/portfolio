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
            <ul className="My-portfolio">
                <img src={img} className="Home-img" alt="logo" />
                <li className="About-border">
                  <Link style={style.linkLine} to="/About">
                      <div className="About">
                        <div className="About-text">About</div>
                      </div>
                  </Link>
                </li>
                <li className="Work-border">
                  <Link style={style.linkLine} to="/Work">
                      <div className="Work">
                        <div className="Work-text">Work</div>
                      </div>
                  </Link>
                </li>
                <Link style={style.linkLine} to="/Contact">
                  <li className="Contact-border">
                    <div className="Contact">
                      <div className="Contact-text">Contact</div>
                    </div>
                  </li>
                </Link>
            </ul>
        </div>
    )
  }
}
export default Home;
