import GlobalStyle  from './styles/style.global.js'
import { Navbar } from './Components/Navbar/Navbar'
import { Home } from './Pages/Home/Home'






function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home/>
      
      
    </>
  )
}

export default App;
