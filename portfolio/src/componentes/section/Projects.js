import ButtonB from '../elements/ButtonB'
import styles from './Project.module.css'
import Card from '../elements/Card'
import portfolioimg from '../../images/projects/portfolioimg.svg'
import produtoimg from '../../images/projects/produtoimg.svg'

function Projects(){
    return(
        <div className={styles.projects} id='Projects'>
            <h1> Projetos</h1>
            <Card
            img={portfolioimg}
            title='Portfólio' 
            tech='REACT.JS' 
            description='Foi desenvolvida com o objetivo de mostrar mais sobre mim. Utilizando tecnologias como REACT.JS.' 
            repo ='https://github.com/DEVCaioVieiraa/portfolio' 
            site=''
            />
            <Card
             img={produtoimg}
             title='Gerenciador de Produtos' 
             tech='HTML, CSS, JavaScript' 
             description='Este é um simples gerenciador de produtos, projetado para auxiliar no controle e organização de itens. Com uma interface intuitiva e fácil de usar, este aplicativo permite adicionar novos produtos à lista e visualizar uma lista detalhada dos produtos existentes.' 
             repo ='https://github.com/DEVCaioVieiraa/Gerenciador-de-Produtos' 
             site=''
            />
            <ButtonB text='Veja mais!' link='https://github.com/DEVCaioVieiraa?tab=repositories'/>
        </div>
    )
}

export default Projects