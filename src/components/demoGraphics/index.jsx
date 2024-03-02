import './style.scss'
import { IoMdContact } from "react-icons/io";
import { RiContactsFill } from "react-icons/ri";
import { IoPeople } from "react-icons/io5";
import { FaMobileScreenButton } from "react-icons/fa6";
import { CiMobile4 } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";

const Demographic = () => {
  return (
    <div className="Demographic-container">
      <div className="contact_details">
       <h4>Demographic</h4>
       <div className="contact_details2">
       <p><IoMdContact /> Contact Details</p>
        <ul>
          <li><RiContactsFill /><span className="contact-text">Mr. Naman</span></li>
          <li><IoPeople /><span className="contact-text">Properietor</span></li>
          <li><FaMobileScreenButton /><span className="contact-text">738873333443</span></li>
          <li><CiMobile4 /><span className="contact-text">014123344</span></li>
          <li><IoMdMail /><span className="contact-text">Naman54@gmail.com</span></li>
        </ul>
       </div>
      </div>
    </div>
  )
}

export default Demographic
