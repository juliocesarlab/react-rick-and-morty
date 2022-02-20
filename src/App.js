import GlobalStyle  from './styles/style.global'
import Particles from 'react-tsparticles'
import { PaginationProvider } from './Components/Pagination/PaginationContext';

export function App() {
  const particlesInit = (main) => console.log(main);
  const particlesLoaded = (container) => console.log(container);
 
  return (
    <>
      <GlobalStyle />
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        "background": {
          "color": {
            "value": ""
          },
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "100%"
        },
        "fullScreen": {
          "zIndex": 1
        },
        "interactivity": {
          "events": {
            "onHover": {
              "enable": true,
              "mode": "bubble"
            },
            "onHover": {
              "enable": true,
              "mode": "bubble"
            }
          },
          "modes": {
            "bubble": {
              "distance": 250,
              "duration": 2,
              "opacity": 0,
              "size": 0
            },
            "grab": {
              "distance": 400
            },
            "repulse": {
              "distance": 400
            }
          }
        },
        "particles": {
          "color": {
            "value": "#ffffff"
          },
          "links": {
            "color": {
              "value": "#ffffff"
            },
            "distance": 150,
            "opacity": 0.4
          },
          "move": {
            "attract": {
              "rotate": {
                "x": 600,
                "y": 600
              }
            },
            "enable": true,
            "outModes": {
              "bottom": "out",
              "left": "out",
              "right": "out",
              "top": "out"
            },
            "random": true,
            "speed": 1
          },
          "number": {
            "density": {
              "enable": true
            },
            "value": 160
          },
          "opacity": {
            "random": {
              "enable": true
            },
            "value": {
              "min": 0,
              "max": 1
            },
            "animation": {
              "enable": true,
              "speed": 1,
              "minimumValue": 0
            }
          },
          "size": {
            "random": {
              "enable": true
            },
            "value": {
              "min": 1,
              "max": 3
            },
            "animation": {
              "speed": 4,
              "minimumValue": 0.3
            }
          }
        }
      }}
    />
    
    </>
  )
}

export default App
