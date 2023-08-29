// import React from 'react'
import {
  BiLogoFacebookCircle,
  BiLogoMessenger,
  BiLogoInstagramAlt,
  BiLogoTwitter,
  BiLogoLinkedinSquare,
} from "react-icons/bi";

function Footer() {
  const styles = {
    fontSize: "30px",
    margin: "10px 10px 0 0",
  };
  return (
    <>
      <div className="footer row">
        <div className="topic-foot">Contact</div>
        <div className="foot col-lg mx-3">
          <li>GoGreen</li>
          <li>Location: Earth</li>
          <li>gogreen123@green.com</li>
          <li>+001 123456789</li>
          <li>+001 456789123</li>
          <li>+001 987654321</li>

          <BiLogoFacebookCircle style={styles} />
          <BiLogoMessenger style={styles} />
          <BiLogoInstagramAlt style={styles} />
          <BiLogoTwitter style={styles} />
          <BiLogoLinkedinSquare style={styles} />
        </div>
        <div className="foot col-lg">
          <li>GoGreen</li>
          <li>Location: Earth</li>
          <li>gogreen123@green.com</li>
          <li>+001 123456789</li>
          <li>+001 456789123</li>
          <li>+001 987654321</li>

          <BiLogoFacebookCircle style={styles} />
          <BiLogoMessenger style={styles} />
          <BiLogoInstagramAlt style={styles} />
          <BiLogoTwitter style={styles} />
          <BiLogoLinkedinSquare style={styles} />
        </div>
        <div className="foot col-lg">
          <li>GoGreen</li>
          <li>Location: Earth</li>
          <li>gogreen123@green.com</li>
          <li>+001 123456789</li>
          <li>+001 456789123</li>
          <li>+001 987654321</li>

          <BiLogoFacebookCircle style={styles} />
          <BiLogoMessenger style={styles} />
          <BiLogoInstagramAlt style={styles} />
          <BiLogoTwitter style={styles} />
          <BiLogoLinkedinSquare style={styles} />
        </div>
      </div>
    </>
  );
}

export default Footer;
