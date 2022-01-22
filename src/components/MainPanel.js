import React, { useEffect, useState } from 'react';
import { Canvasa } from './Canvas';
import { Instructions } from './Instructions';
import { Models } from './Models';
import { SideBar } from './SideBar';

export const MainPanel = () => {

    const [imagesData, setImagesData] = useState({ lang: "spanish", modelType: "Calaveritas", load: true, modelo: "", nombre: "", instructions: {}, images: [] });

    useEffect(() => {
        getInfo();
    }, [imagesData.modelType])

    const getInfo = async () => {
        console.log(`https://cassamstudio.net/instructions.php?modelType=${imagesData.modelType}`)

        const resp = await fetch(`https://cassamstudio.net/instructions.php?modelType=${imagesData.modelType}`)
        const data = await resp.json();

        console.log(data);

        setImagesData({ ...imagesData, instructions: data.instructions, images: data.images, load: false })

    }

    const handleChangeModel = (e) => {
        const { name, value } = e.target;
        console.log(name);
        console.log(value);
        setImagesData({ ...imagesData, [name]: value });

   
    }

  


   
    
    console.log("sam");



    return (
        <>
            <div className="row">

                <div className="col-6">
                    {!imagesData.load && <Instructions {...imagesData.instructions} />}
                    {!imagesData.load && <Models {...imagesData} handleChangeModel={handleChangeModel} />}
                </div>

                <div className="col-6">
                    {!imagesData.load && <SideBar {...imagesData.instructions} nombre={imagesData.nombre} handleChangeModel={handleChangeModel} />}

                    {!imagesData.load && <Canvasa {...imagesData} />}
                </div>

            </div>
           
        </>
    );
};
