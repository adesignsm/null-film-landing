import { useState, useEffect } from "react";
import { useAtom } from "jotai";

import { Landing } from "./Components/Landing"
import { E_GO } from "./Components/E_GO"
import { INFINITE } from './Components/INFINITE';
import { NULL } from './Components/NULL';
import { EmailPopUp } from './Components/EmailPopUp';

import { Loader } from "./Components/Loader";
import { loadedAtom } from "./Components/Landing";

export const App = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [loaded] = useAtom(loadedAtom);

    useEffect(() => {
        if (loaded) {
            setIsLoading(false);
        }
    }, [loaded]);

    console.log(loaded);

    return (
        <>
            <main className='page'>
                <Loader load={isLoading} />
                <EmailPopUp />
                <Landing />
                <E_GO />
                <INFINITE />
                <NULL />
            </main>
        </>
    )
}