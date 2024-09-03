import React from 'react';
import useTheme from '../../hooks/useTheme';
import ParticleBackground from '../organisms/ParticleBackground';

const MainPage: React.FC = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className={`main-page ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <ParticleBackground isDarkMode={isDarkMode} />

            <div className="content">
                <header className="header">
                    <h1 className="title">Web Front-End Developer</h1>
                    <h2 className="subtitle">PORTFOLIO</h2>
                    <button className="theme-toggle" onClick={toggleTheme}>
                        {isDarkMode ? '라이트 모드' : '다크 모드'}
                    </button>
                </header>
                <main className="main-content">
                    <p className="author">Harrison</p>
                    <p className="institution">test</p>
                </main>
            </div>
        </div>
    );
};

export default MainPage;