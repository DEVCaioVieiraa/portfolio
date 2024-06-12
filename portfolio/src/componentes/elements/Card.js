import styles from './Card.module.css'
import ButtonB from './ButtonB'

function Card({img, title, tech, description, repo, site}){
    return(
        <div className={styles.card}>
            <a href={site}>
            <img src={img}/>
            </a>
            
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologias:</strong> {tech}</p>
                <p>{description}</p>
                <ButtonB text='Repositório' link={repo} className={styles.button}/>
            </section>
        </div>
    )
}

export default Card