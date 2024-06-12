import styles from './Skills.module.css'
import javascript from '../../images/skills/javascript.svg'
import html from '../../images/skills/html.svg'
import css from '../../images/skills/css.svg'
import react from '../../images/skills/react.svg'

function Skill(){
    return(
        <div className={styles.skill} id="Skills">
            <h1> Habilidades</h1>
            <p>Conheça um pouco das minhas habilidades e conheciementos.</p>
            <div id="imgs">
                <img src={html} />
                <img src={css} />
                <img src={javascript} />
                <img src={react} />
            </div>
        </div>
    )
}

export default Skill