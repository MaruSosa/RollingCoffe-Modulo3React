import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/common/Menu'
import Footer from './components/common/Footer'
import InicioPrincipal from './components/pages/InicioPrincipal'
import Administrador from './components/pages/Administrador'
import Error404 from './components/pages/Error404';

function App() {
 
  return (
    <>
      <Menu></Menu>
      <InicioPrincipal></InicioPrincipal>
      {/* <Administrador></Administrador> */}
      {/* <Error404></Error404> */}
      <Footer></Footer>
    </>
  )
}

export default App