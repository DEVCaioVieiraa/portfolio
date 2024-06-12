import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/section/Navbar'
import Presentation from './componentes/section/Presentation';
import Skill from './componentes/section/Skill';
import Projects from './componentes/section/Projects';
import Footer from './componentes/section/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Presentation/>
      <Skill/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
