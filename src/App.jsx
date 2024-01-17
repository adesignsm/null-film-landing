import { useState } from 'react';
import { pageAtom } from "./Components/Landing"

import { Landing } from "./Components/Landing"
import { E_GO } from "./Components/E_GO"
import { INFINITE } from './Components/INFINITE';
import { useAtom } from 'jotai';

export const App = () => {
    const [page] = useAtom(pageAtom);

    return (
        <>
            <main className='page'>
                <Landing />
                <E_GO />
                <INFINITE />
            </main>
        </>
    )
}