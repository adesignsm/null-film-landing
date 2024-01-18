import ReactPlayer from 'react-player';

import { useAtom } from 'jotai';
import { pageAtom } from '../Landing';

import CLOSE_ICON from '../../Assets/Icons/close.png';
import './index.css';

export const NULL = () => {
    const [page, setPage] = useAtom(pageAtom);

    const handleClick = () => {
        setPage(null);
    }

    return (
        <>
            <div className={`null-container ${page === 'null-page' ? 'show' : 'hide'}`}>
                <div className='close-button-container'>
                    <img src={CLOSE_ICON} onClick={handleClick}/>
                </div>
                <div className='video-container'>
                    <ReactPlayer
                        url='https://player.vimeo.com/video/896039872?h=6a3f22bc4c&amp;badge=0&amp;autoplay=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' 
                        controls
                        className='video-player'
                        key='null-video'
                    />
                </div>
                <div className='copy-content'>
                    <div className='title-container'>
                        <h1> NULL </h1>
                        <p> NULL 2024 COMING SOON</p>
                    </div>
                    {/* <div className='description-container'>
                        <p>
                            “E_GO” is an analysis of the dualistic nature of the ego mind and its role in shaping one's 
                            identity and perspective on oneself. First collaboration between Eric, Alim and Seb. Shot in 
                            Vancouver, Canada. Directed by: Alim Sabir, Choreography by: Eric Cheung, Creative Direction by: 
                            Sebastian Palencia 
                            Medium: 35mm
                        </p>
                    </div> */}
                </div>
                {/* <div className='media-container'>
                    <img className='image' src={IMAGE1} />
                    <img className='image' src={IMAGE2} />
                    <img className='image' src={IMAGE3} />
                    <img className='image' src={IMAGE4} />
                </div> */}
            </div>
        </>
    )
}