import ReactPlayer from 'react-player';

import { useAtom } from 'jotai';
import { pageAtom } from '../Landing';

import CLOSE_ICON from '../../Assets/Icons/close.png';
import IMAGE1 from '../../Assets/E_GO/ego-bts-01.png';
import IMAGE2 from '../../Assets/E_GO/ego-bts-02.png';
import IMAGE3 from '../../Assets/E_GO/ego-bts-03.png';
import IMAGE4 from '../../Assets/E_GO/ego-bts-04.png';

import './index.css';

export const E_GO = () => {
    const [page, setPage] = useAtom(pageAtom);

    const handleClick = () => {
        setPage(null);
    }

    return (
        <>
            <div className={`e_go-container ${page === null ? 'hide' : 'show'}`}>
                <div className='close-button-container'>
                    <img src={CLOSE_ICON} onClick={handleClick}/>
                </div>
                <div className='video-container'>
                    <ReactPlayer 
                        url='https://player.vimeo.com/video/314690744?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479' 
                        controls
                        className='video-player'
                        width={400}
                    />
                </div>
                <div className='copy-content'>
                    <div className='title-container'>
                        <h1> E_go</h1>
                        <p> 2019</p>
                    </div>
                    <div className='description-container'>
                        <p>
                            “E_GO” is an analysis of the dualistic nature of the ego mind and its role in shaping one's 
                            identity and perspective on oneself. First collaboration between Eric, Alim and Seb. Shot in 
                            Vancouver, Canada. Directed by: Alim Sabir, Choreography by: Eric Cheung, Creative Direction by: 
                            Sebastian Palencia 
                            Medium: 35mm
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