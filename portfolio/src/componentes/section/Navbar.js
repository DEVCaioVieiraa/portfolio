import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from 'react-bootstrap/Nav'

function Navbar(){
    return (
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#Presentation'>Apresentação</Nav.Link></li>
                <li><Nav.Link href='#Skills'>Habilidades</Nav.Link></li>
                <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
            </ul>
            <ul>
                <li> <a href='https://www.instagram.com/cvieiraaa/' target='blank'><FaInstagram size={30} /> </a> </li>
                <li> <a href='https://github.com/DEVCaioVieiraa' target='blank'> <FaGithub size={30}/> </a> </li>
                <li> <a href='' target='blank'> <FaLinkedin size={30}/> </a> </li>
            </ul>
        </div>
    )
}

export default Navbar