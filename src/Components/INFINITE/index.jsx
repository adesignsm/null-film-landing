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
            <div className={`infinite-container ${page === null ? 'hide' : 'show'}`}>
                <div className='close-button-container'>
                    <img src={CLOSE_ICON} onClick={handleClick}/>
                </div>
                <div className='video-container'>
                    <ReactPlayer 
                        url='https://player.vimeo.com/video/792515906?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' 
                        controls
                        className='video-player'
                        width={400}
                    />
                </div>
                <div className='copy-content'>
                    <div className='title-container'>
                        <h1> In(f)inite</h1>
                        <p> 2023 </p>
                    </div>
                    <div className='description-container'>
                        <p>
                            “I(N)FINITE” - The individual's identity is neither lost nor created; it is constantly transformed. 
                            Second group collaboration. Shot in Toronto, Canada. Directed by: Alim Sabir, Choreography 
                            by: Eric Cheung, Creative Direction by: Sebastian Palencia, Cinematography by: Bradley Stuckel, 
                            Produced by: Imad Elsheikh, VFX by: Luke Bellissimo
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