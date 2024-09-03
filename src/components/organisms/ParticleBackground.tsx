import React from 'react';
import Particles from 'react-tsparticles';
import { Engine } from 'tsparticles-engine';
import { loadFull } from 'tsparticles';
import { ParticleBackgroundProps } from '../../types/themeTypes';

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ isDarkMode }) => {
    const particlesInit = async (engine: Engine): Promise<void> => {
        await loadFull(engine);
    };

    return (
        <Particles
            key={isDarkMode ? 'dark' : 'light'}
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: isDarkMode ? "#000000" : "#ffffff",
                    },
                },
                fpsLimit: 60,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "grab",
                        },
                        resize: true,
                    },
                    modes: {
                        grab: {
                            distance: 200,
                            links: {
                                opacity: 0.5,
                            },
                        },
                    },
                },
                particles: {
                    color: {
                        value: isDarkMode ? "#ffffff" : "#000000",
                    },
                    links: {
                        color: isDarkMode ? "#ffffff" : "#000000",
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 1,
                    },
                    number: {
                        value: 100,
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    size: {
                        value: { min: 1, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticleBackground;