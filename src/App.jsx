import { useState  , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion } from 'framer-motion';
import Header from './components/Header';
import Home from './components/Home';
import Recent from './components/Recent';
import Image from './components/Image';
import Imagereverse from './components/Imagereverse';
import Image2 from './components/Image2';
import Vedio from './components/Vedio';
import Grid from './components/Grid';
import Drag from './components/Drag';
import Scrolling from './components/Scrolling';
import Joinus from './components/Joinus';
function App() {
  
  
  
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("scroll" , mouseMove) ;

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");
  return (
    <>
   
    
    <Header/>
    <Home/>
   
    <Recent/>
    <Image url= {"./public/assets (2)/asset 4.webp"} title = {"loftloom"} top={"2rem"}/>
    <Imagereverse url={"./public/assets (2)/asset 5.webp"} title={"imusic"}/>
    <Image2 url= {"./public/assets (2)/asset 6.webp"} title = {"technis"}/>
    <Grid/>
    <Drag/>
 
    <Joinus/>
    


    
    </>
   
  )
}

export default App
