
import { Outlet } from 'react-router-dom';
import Project from './components/PortfolioTabs';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Project />
      <main className="mx-3">
      <Outlet />
     
      </main>
      
    </>
  )
}

export default App
