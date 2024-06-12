import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer(){
    return(
        <div className={styles.footer}>
           <ul>
                <li> <a href='https://www.instagram.com/cvieiraaa/' target='blank'><FaInstagram size={30} /> </a> </li>
                <li> <a href='https://github.com/DEVCaioVieiraa' target='blank'> <FaGithub size={30}/> </a> </li>
                <li> <a href='' target='blank'> <FaLinkedin size={30}/> </a> </li>
            </ul>
            <p>caiobarbosa.vieiraa@gmail.com</p>
            <p>Caio Vieira © 2024</p>
        </div>
    )
}

export default Footer