import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const TopLoader = () => {
    const [progress, setProgress] = useState(0);
    const { pathname } = useLocation();

    useEffect(() => {
        // Reset and start animation on path change
        setProgress(30);

        const timer1 = setTimeout(() => {
            setProgress(70);
        }, 100);

        const timer2 = setTimeout(() => {
            setProgress(100);
        }, 300);

        const timer3 = setTimeout(() => {
            setProgress(0);
        }, 600);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };
    }, [pathname]);

    if (progress === 0) return null;

    return (
        <div className="fixed top-0 left-0 w-full z-[100]">
            <div
                className="h-1 bg-[#39a34a] transition-all duration-300 ease-out shadow-[0_0_10px_#39a34a,0_0_5px_#39a34a]"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

export default TopLoader;
