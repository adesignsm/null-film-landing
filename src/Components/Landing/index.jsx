import { useEffect } from 'react';
import './index.css';

const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

export const Landing = () => {
    useEffect(() => {
        let appending = true;

        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;
            const bodyHeight = document.body.scrollHeight;

            if (windowHeight + scrollY >= bodyHeight - 300 && appending) {
                const originalNode = document.querySelector('.landing-column');
                const clonedNode = originalNode.cloneNode(true);
                document.querySelector('.landing-container').appendChild(clonedNode);
            }
        }

        const debouncedScrollHandler = debounce(handleScroll, 10);

        const handleTouchEnd = () => {
            if (appending) {
                const windowHeight = window.innerHeight;
                const scrollY = window.scrollY;
                const bodyHeight = document.body.scrollHeight;

                if (windowHeight + scrollY >= bodyHeight) {
                    const originalNode = document.querySelector('.landing-column');
                    const clonedNode = originalNode.cloneNode(true);
                    document.querySelector('.landing-container').appendChild(clonedNode);
                }
            }
        }

        window.addEventListener('scroll', debouncedScrollHandler);
        window.addEventListener('touchend', handleTouchEnd);

        return () => {
            appending = false;
            window.removeEventListener('scroll', debouncedScrollHandler);
            window.removeEventListener('touchend', handleTouchEnd);
        };
    });

    return (
        <>
            <div className='landing-container'>
                <div className="landing-column">
                    <div className='null'>
                        <h1>Null</h1>
                        <p>Coming soon 2024</p>
                        <div className='segmentation-block'></div>
                    </div>
                    <div className='infinite'>
                        <h1>I(n)finite</h1>
                        <p>2023</p>
                        <div className='segmentation-block'></div>
                    </div>
                    <div className='e_go'>
                        <h1>E_GO</h1>
                        <p>2019</p>
                        <div className='segmentation-block'></div>
                    </div>
                </div>
            </div>
        </>
    )
}