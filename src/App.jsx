import { useState, useEffect  } from 'react'
import { useNavigate, useRoutes } from 'react-router-dom'
import themeOneRouter from './routes/themeone.routes'
import themeTwoRouter from './routes/themetwo.routes'
import themeThreeRouter from './routes/themethree.routes'
import Header from './components/Header'

function App() {
  const navigate = useNavigate()
  const [activeTheme, setActiveTheme] = useState(1);

  // check for theme in localstorage and navigate to theme
  const renderActiveTheme = () => {
    switch (activeTheme) {
      case 1:
        navigate("/themeone")
        break;
      case 2:
        navigate("/themetwo")
        break;
      case 3:
        navigate("/themethree")
        break;
      default:
        return navigate("/themeone");
    }
  };  

  // check if page refresh or a new page
  useEffect(()=> {
      let theme =  localStorage.getItem("theme")
      if(!theme) localStorage.setItem('theme', '1')
      setActiveTheme(parseInt(theme))
      const navigationEntries = performance.getEntriesByType("navigation");
      if (navigationEntries.length > 0 && navigationEntries[0].type === "reload") {
        console.log("Page was refreshed");
      } else {
        renderActiveTheme() 
      }
  }, [activeTheme])


  // Routing for all the pages
  const routing = useRoutes([
    themeOneRouter,
    themeTwoRouter,
    themeThreeRouter
  ])


  return (
    <>
    <div className='min-h-screen'>
      <main>
        <Header/>
        {routing}
      </main>
    </div>
    </>
  )
}

export default App
