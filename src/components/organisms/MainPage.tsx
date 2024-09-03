import React from 'react';
import useTheme from '../../hooks/useTheme';

const MainPage: React.FC = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div>
            <header className="main-header">
                <h1>test</h1>
                <button onClick={toggleTheme}>
                    {isDarkMode ? '라이트 모드' : '다크 모드'}
                </button>
            </header>
            <main className="main-content">
                <p>test.</p>
            </main>
        </div>
    );
};

export default MainPage;