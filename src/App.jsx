
import { Outlet } from 'react-router-dom';
import Project from './components/PortfolioTabs';
import Footer from './components/Footer';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Project />
    {/* <Footer /> */}
      <main className="mx-3">
      
      <Outlet />
      <Footer />
      
      </main>
      
    </>
  )
}

export default App
