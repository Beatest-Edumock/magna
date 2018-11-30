const config = {
    particles: {
        number: {
            value: 25,
            density: {
                enable: false,
                value_area: 800
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 2
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                nb_sides: 8
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: false,
                mode: 'grab'
            },
            onclick: {
                enable: false,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 400,
                line_linked: {
                    opacity: 1
                }
            },
            repulse: {
                distance: 200,
                duration: 0.4
            }
        }
    },
    retina_detect: false
};

export default config;