import React, { useState } from 'react';
import { Intro } from './components/Intro';
import { MainPanel } from './components/MainPanel';
import { Nav } from './components/Nav';


export const PerfilApp = () => {

    const [principal, setPrincipal] = useState({ intro: true, sam: "sam" });

    return (
        <>

            <Nav />

            <div className="container">

                {principal.intro && <Intro principal={principal} setPrincipal={setPrincipal} />}

                {!principal.intro && <MainPanel />}

            </div>

        </>

    )
};
