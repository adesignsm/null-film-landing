import { useEffect } from 'react';
import { atom, useAtom } from 'jotai';
import './index.css';

import EGO_LOOP from '../../Assets/E_GO/EGO_LOOP.mp4';
import INFINITE_LOOP from '../../Assets/INFINITE/I(N)FINITE_LOOP.mp4';
import NULL_LOOP from '../../Assets/NULL/NULL_LOOP.mp4';

export const pageAtom = atom(null);

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
    const [page, setPage] = useAtom(pageAtom);

    useEffect(() => {
        let appending = true;

        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollY = window.scrollY;
            const bodyHeight = document.body.scrollHeight;

            if (windowHeight + scrollY >= bodyHeight - 300 && appending) {
                const originalNode = document.querySelector('.landing-column');
                const clonedNode = originalNode.cloneNode(true);

                clonedNode.querySelectorAll('.portal').forEach((element) => {
                    element.addEventListener('click', handleClick);
                });

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

                    clonedNode.querySelectorAll('.portal').forEach((element) => {
                        element.addEventListener('click', handleClick);
                    });

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
    }, []);

    const handleClick = (e) => {
        setPage(e.target.parentElement.dataset.value)
    }

    return (
        <>
            <div className='landing-container'>
                <div className="landing-column">
                    <div className='null portal' data-value='null-page' onClick={(e) => {handleClick(e)}}>
                        <div className='video-bg-container'>
                            <video className='null-video video' loop autoPlay>
                                <source src={NULL_LOOP} type='video/mp4' />
                            </video>
                        </div>
                        <h1>Null</h1>
                        <p>Coming soon 2024</p>
                        <div className='segmentation-block'></div>
                    </div>
                    <div className='infinite portal' data-value='infinite-page' onClick={(e) => {handleClick(e)}}>
                        <div className='video-bg-container'>
                            <video className='infinite-video video' loop muted={true} autoPlay>
                                <source src={INFINITE_LOOP} type='video/mp4' />
                            </video>
                        </div>
                        <h1>I(n)finite</h1>
                        <p>2023</p>
                        <div className='segmentation-block'></div>
                    </div>
                    <div className='e_go portal' data-value='e_go-page' onClick={(e) => {handleClick(e)}}>
                        <div className='video-bg-container'>
                            <video className='ego-video video' loop autoPlay>
                                <source src={EGO_LOOP} type='video/mp4' />
                            </video>
                        </div>
                        <h1>E_GO</h1>
                        <p>2019</p>
                        <div className='segmentation-block'></div>
                    </div>
                </div>
            </div>
        </>
    )
}