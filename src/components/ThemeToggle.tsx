import { useEffect, useState } from "react";
import moonImg from '../assets/Moon.png';
import sunImg from '../assets/Sun.png';

function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(darkMode ? 'light' : 'dark');
        root.classList.add(darkMode ? 'dark' : 'light');
    }, [darkMode]);

    return (
        <div className="flex items-center justify-center h-screen">
            <button
                className={`relative inline-flex items-center mr-4 h-8 rounded-full w-16 transition-colors duration-500 ease-in-out ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}
                onClick={() => setDarkMode(!darkMode)}
            >
                <span
                    className={`transform transition-transform duration-500 ease-in-out inline-block w-6 h-6 rounded-full bg-white ${darkMode ? 'translate-x-7' : 'translate-x-1'}`}
                />
                <img
                    src={sunImg}
                    alt="Sun"
                    className={`absolute right-1 w-4 h-4 transition-opacity duration-500 ease-in-out ${darkMode ? 'opacity-0' : 'opacity-100'}`}
                />
                <img
                    src={moonImg}
                    alt="Moon"
                    className={`absolute left-1 w-4 h-4 transition-opacity duration-500 ease-in-out ${darkMode ? 'opacity-100' : 'opacity-0'}`}
                />
            </button>
        </div>
    );
}

export default ThemeToggle;
