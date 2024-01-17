import { useState } from 'react';
import { pageAtom } from "./Components/Landing"

import { Landing } from "./Components/Landing"
import { E_GO } from "./Components/E_GO"
import { INFINITE } from './Components/INFINITE';
import { NULL } from './Components/NULL';
import { useAtom } from 'jotai';
import { EmailPopUp } from './Components/EmailPopUp';

export const App = () => {
    const [page] = useAtom(pageAtom);

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