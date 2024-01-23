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
                        <p> NULL - Coming 2024</p>
                    </div>
                    <div className='description-container'>
                        <p>
                            Directed by Alim Sabir
                            <br />
                            Choreography: Eric Cheung
                            <br /> 
                            Creative Director: Sebastian Palencia 
                            <br />
                            <br />
                            Production: Spy Films
                            <br />
                            Executive Producer: Marcus Trulli 
                            <br />
                            Service Production Company: Escuro
                            <br />
                            Executive Producer: Keyon Slowly
                            <br />
                            Director of Photography: Jeremy Cox
                            <br />
                            Trailer Editor: Miguell Branco
                            <br />
                            Editor: Nick Yumil 
                            <br />
                            Colorist: Sam Gilling
                            <br />
                            VFX Composer: Leo Luxford
                            <br />
                            Original Score: Amine R. Bouzahe
                        </p>
                    </div>
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