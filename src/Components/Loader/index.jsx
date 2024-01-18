import './index.css';

export const Loader = ({ load }) => {
    
    return (
        <>
            <div className={`loader ${load ? '' : 'hide'}`}>
                <h1> Loader </h1>
            </div>
        </>
    )
}