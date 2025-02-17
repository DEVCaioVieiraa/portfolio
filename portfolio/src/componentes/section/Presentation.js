import styles from './Presentation.module.css';
import ButtonA from '../elements/ButtonA';
import ButtonB from '../elements/ButtonB';
import { useEffect,useState } from "react";


function Presentation() {

  const [text, setText] = useState("");
  const toRotate = ["Caio Vieira!", "Desenvolvedor Front-end."];
  const [loop, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const period= 100;
  const [delta, setDelta]= useState(100)
  
  useEffect(()=> {
    let ticker = setInterval(()=>{
      toType()
    }, [delta])
    return()=> {clearInterval(ticker)}
  }, [text])

  const toType = () => {
    let i = loop % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1)

    setText(updatedText);
    
    if(!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === ''){
      setIsDeleting(false);
      setDelta(period);
      setLoop(loop + 1);
    }
  }

  return (
    <div className={styles.presentation} id="Presentation">
      <h1><strong>Bem-vindo ao meu PORTFÓLIO</strong></h1>
      <div className={styles.paragraphs}>
        <p className={styles.paragraph}>
          <strong>Olá, eu sou {text}</strong> <br/>
          Um entusiasta da tecnologia com um grande amor pela área de desenvolvimento.
          Com um forte foco em me tornar um desenvolvedor Full-stack, estou constantemente buscando aprimorar minhas habilidades
          e expandir meu conhecimento em todas as áreas do desenvolvimento web.
        </p>
        <p className={styles.paragraph}>
          Uma das minhas principais características é a minha paixão pela organização.
          Acredito firmemente que a organização é a chave para o sucesso em qualquer empreendimento,
          especialmente no desenvolvimento de software. Eu me esforço para garantir que meus projetos
          sejam estruturados e documentados de forma clara e eficiente, permitindo uma colaboração suave
          e um código limpo e de fácil manutenção.
        </p>
        <p className={styles.paragraph}>
          Além do meu envolvimento com a tecnologia, sou apaixonado por esportes.
          A mentalidade competitiva e a busca pela excelência que permeiam o mundo dos esportes
          ressoam profundamente comigo e se refletem no meu trabalho como desenvolvedor. Assim como em um campo de jogo,
          estou sempre determinado a vencer e a superar desafios, correndo atrás dos meus objetivos com dedicação e perseverança.
        </p>
        <p className={styles.paragraph}>
          Estou ansioso para continuar minha jornada como desenvolvedor, explorando novas tecnologias,
          enfrentando novos desafios e contribuindo para projetos inovadores. Se você está procurando um profissional comprometido,
          organizado e apaixonado pelo que faz, estou pronto para fazer parte da sua equipe e ajudar a impulsionar o sucesso do seu projeto.
        </p>
        
      </div>
      <ButtonA link='https://github.com/DEVCaioVieiraa' text='Conecte-se comigo!'/>
    </div>
  );
}

export default Presentation;