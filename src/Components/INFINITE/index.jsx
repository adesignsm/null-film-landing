import ReactPlayer from 'react-player';

import { useAtom } from 'jotai';
import { pageAtom } from '../Landing';

import CLOSE_ICON from '../../Assets/Icons/close.png';
import IMAGE1 from '../../Assets/INFINITE/infinite-bts-01.png';
import IMAGE2 from '../../Assets/INFINITE/infinite-bts-02.png';
import IMAGE3 from '../../Assets/INFINITE/infinite-bts-03.png';
import IMAGE4 from '../../Assets/INFINITE/infinite-bts-04.png';

import './index.css';

export const INFINITE = () => {
    const [page, setPage] = useAtom(pageAtom);

    const handleClick = () => {
        setPage(null);
    }

    return (
        <>
            <div className={`infinite-container ${page === 'infinite-page' ? 'show' : 'hide'}`}>
                <div className='close-button-container'>
                    <img src={CLOSE_ICON} onClick={handleClick}/>
                </div>
                <div className='video-container'>
                    <ReactPlayer 
                        url='https://player.vimeo.com/video/792515906?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' 
                        controls
                        className='video-player'
                        key='infinite-video'
                    />
                </div>
                <div className='copy-content'>
                    <div className='title-container'>
                        <h1> In(f)inite</h1>
                        <p> 2022 </p>
                    </div>
                    <div className='description-container'>
                        <p>
                            “I(N)FINITE” - The individual's identity is neither lost nor created; it is constantly transformed. 
                            <br />
                            <br />
                            Second group collaboration. Shot in Toronto, Canada.
                            <br />
                            <br />
                            Directed by Alim Sabir
                            <br />
                            Choreography: Eric Cheung
                            <br /> 
                            Creative Direction: Sebastian Palencia 
                            <br />
                            Produced: Imad Elsheikh
                            <br />
                            Cinematography: Bradley Stuckel  
                            <br />
                            VFX: Luke Bellissimo
                            <br />
                            <br />
                            Medium: Digital
                        </p>
                    </div>
                </div>
                <div className='media-container'>
                    <img className='image' src={IMAGE1} />
                    <img className='image' src={IMAGE2} />
                    <img className='image' src={IMAGE3} />
                    <img className='image' src={IMAGE4} />
                </div>
            </div>
        </>
    )
}