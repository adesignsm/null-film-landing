import { Landing } from "./Components/Landing"
import { E_GO } from "./Components/E_GO"
import { INFINITE } from './Components/INFINITE';
import { NULL } from './Components/NULL';
import { EmailPopUp } from './Components/EmailPopUp';

export const App = () => {
    return (
        <>
            <main className='page'>
                <Landing />
                <E_GO />
                <INFINITE />
                <NULL />
                <EmailPopUp />
            </main>
        </>
    )
}