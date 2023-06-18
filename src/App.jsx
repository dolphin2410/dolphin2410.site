import './App.css';
import React, {useState} from 'react'
import IndexCard from './cards/IndexCard';
import ProfileCard from './cards/ProfileCard';
import getNextCard from './data/dict';
import ProjectsCard from './cards/ProjectsCard';
import AboutMeCard from './cards/AboutMeCard';
import Card from './components/Card';
import TMICard from './cards/TMICard';

function App() {
  const [posX, setPosX] = useState(null);
  const [posY, setPosY] = useState(null);
  const [currentCard, setCurrentCard] = useState(".indexcd");

  function slide(direction) {
    let nextClass = getNextCard(currentCard, direction)
    if (nextClass !== null) {
      document.querySelector(currentCard).classList.remove("active")
      document.querySelector(currentCard).classList.add("inactive")
      document.querySelector(nextClass).classList.add("active")
      document.querySelector(nextClass).classList.remove("inactive")
      
      if (nextClass === ".aboutcd") {
        document.querySelector(".extra-about-01").style.display = "inline"
        document.querySelector(".extra-about-02").style.display = "inline"
      } else {
        document.querySelector(".extra-about-01").style.display = "none"
        document.querySelector(".extra-about-02").style.display = "none"
      }

      if (nextClass === ".projectscd") {
        document.querySelector(".extra-projects-01").style.display = "inline"
        document.querySelector(".extra-projects-02").style.display = "inline"
      } else {
        document.querySelector(".extra-projects-01").style.display = "none"
        document.querySelector(".extra-projects-02").style.display = "none"
      }

      setCurrentCard(nextClass)
    }
  }

  function wheel(e) {
    if (e.deltaY > 0) {
      slide("down")
    } else {
      slide("up")
    }
  }

  function handleTouchStart(e) {
    if (e.hasOwnProperty("clientX")) {
      setPosX(e.clientX);
      setPosY(e.clientY);
    } else {
      setPosX(e.touches[0].clientX);
      setPosY(e.touches[0].clientY);
    }

    setTimeout(() => {
      setPosX(null)
      setPosY(null)
    }, 200)
  }

  function handleTouchMove(e) {
    if (posX == null || posY == null) return
    let deltaX
    let deltaY
    if (e.hasOwnProperty("clientX")) {
      deltaX = posX - e.clientX
      deltaY = posY - e.clientY
    } else {
      deltaX = posX - e.touches[0].clientX
      deltaY = posY - e.touches[0].clientY
    }

    if (Math.abs(deltaY) > 10 && Math.abs(deltaX) > 10) return
    let did = false
    if (deltaX > 10) {
      slide("left")
      did = true
    }

    if (deltaX < -10) {
      slide("right")
      did = true
    }

    if (deltaY > 10) {
      slide("up")
      did = true
    }

    if (deltaY < -10) {
      slide("down")
      did = true
    }

    if (did) {
      setPosX(null)
      setPosY(null)
    }
  }

  return (
    <div
      className="App" 
      onWheel={wheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      >
      <span className='extra extra-about-01'>
        <Card helpers={{top: null, bottom: null, right: null, left: null}}>
          MonunDocs 관리자
        </Card>
      </span>
      <span className='extra extra-about-02'>
        <Card helpers={{top: null, bottom: null, right: null, left: null}}>
          Narwhallab 관리자
        </Card>
      </span>
      <span className='extra extra-projects-01'>
        <Card helpers={{top: null, bottom: null, right: null, left: null}}>
          <div className="projects-container">
            <div onClick={() => window.open("https://github.com/narwhallab/home-control-backend", "_blank")}>home-control</div>
            <div onClick={() => window.open("https://github.com/dolphin2410/midi-rs", "_blank")}>midi-rs</div>
          </div>
        </Card>
      </span>
      <span className='extra extra-projects-02'>
        <Card helpers={{top: null, bottom: null, right: null, left: null}}>
          <div className="projects-container">
            <div onClick={() => window.open("https://github.com/dolphin2410/mcphysics", "_blank")}>mcphysics</div>
            <div onClick={() => window.open("https://github.com/dolphin2410/chrome-native", "_blank")}>chrome-native</div>
          </div>
        </Card>
      </span>
      <span className='active indexcd'>
        <IndexCard />
      </span>
      <span className='inactive profilecd'>
        <ProfileCard />
      </span>
      <span className='inactive projectscd'>
        <ProjectsCard />
      </span>
      <span className='inactive aboutcd'>
        <AboutMeCard />
      </span>
      <span className='inactive tmicd'>
        <TMICard />
      </span>
    </div>
  );
}

// window addEventListener wheel

// stackoverflow detect swipe direction without scrollling

export default App;
