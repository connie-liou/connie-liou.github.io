
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0*/

particlesJS("particles-js", {
    "particles": {
        "number": {
        "value": 500,
        "density": {
            "enable": true,
            "value_area": 800
        }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.9,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 2,
            "random": true,
            "anim": {
            "enable": true,
            "speed": 2,
            "size_min": 0,
            "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    // interactivity
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble trail"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "ondrag": {
                "enable": true,
                "mode": "trail"
            },
            "resize": true
        },
    // modes
    "modes": {
        "grab": {
            "distance": 400,
            "line_linked": {
                "opacity": 1
            }
        },
        "bubble": {
            "distance": 83.91608391608392,
            "size": 2,
            "duration": 5,
            "opacity": 1,
            "speed": 0.7
        },
        "repulse": {
            "distance": 10,
            "duration": 0.1
        },
        "push": {
            "particles_nb": 4
        },
        "remove": {
            "particles_nb": 2
        },
        "trail": {
            "delay": 0.005,
            "particles_nb": 5
        }
      }
    },
    "retina_detect": true
  });