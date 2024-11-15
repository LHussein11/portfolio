import './App.css'
import Header from './components/Header'
import About from './pages/About'
import Tech from './pages/Tech'
import Contact from './pages/Contact'
import LangProvider from './state/LangContext'
import Experience from './pages/Experience'
import Education from './pages/Education'


function App() {

  return (
    <>
    <LangProvider>
      <Header></Header>
      <About></About>
      <Experience></Experience>
      <Education></Education>
      <Tech></Tech>
      <Contact></Contact>
    </LangProvider>
    </>
  )
}

export default App
