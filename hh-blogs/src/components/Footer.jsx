import {Link} from "react-router-dom"
import "../assets/css/footer.css"
const Footer = ()=>{
    return (
        <footer>
  <div className="footer-nav">
      <nav>
          <ul className="nav-links">
              <li>
                  <Link href="https://www.healthhighway.co.in/1-on-1-Pricing-Plan">Private Sessions</Link>
              </li>
              <li>
                  <Link href="https://www.healthhighway.co.in/Group-Yoga-classes">Group Sessions</Link>
              </li>
              <li className="desk-links"><Link href="https://www.healthhighway.co.in/">Home</Link></li>
          </ul>
      </nav>
      <p className="copyright">
          <span> &copy; </span> 2021 Health Highway. All Rights Reserved.
      </p>
      <nav className="terms-privacy">
          <ul>
              <li>
                  <Link href="https://www.healthhighway.co.in/terms-and-conditions">Terms</Link>
              </li>
              <li>
                  <Link href="https://www.healthhighway.co.in/privacy-policy">Privacy</Link>
              </li>
          </ul>
      </nav>
  </div>
</footer>
    )
}

export default Footer