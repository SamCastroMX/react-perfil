import React, { useEffect, useState } from 'react';
import { Canvas } from './Canvas';
import { Instructions } from './Instructions';
import { Models } from './Models';
import { SideBar } from './SideBar';

export const MainPanel = () => {

    const [imagesData, setImagesData] = useState({ lang: "spanish", modelType: "Calaveritas", load: true, modelo: "", nombre: "", instructions: {}, images: [] });

    useEffect(() => {
        getInfo();
    }, [imagesData.modelType])

    const getInfo = async () => {
      

        const resp = await fetch(`https://cassamstudio.net/instructions.php?modelType=${imagesData.modelType}`)
        const data = await resp.json();

      

        setImagesData({ ...imagesData, instructions: data.instructions, images: data.images, load: false })

    }

    const handleChangeModel = (e) => {
        const { name, value } = e.target;

        setImagesData({ ...imagesData, [name]: value });

   
    }

  


   
    
   



    return (
        <>
            <div className="row">

                <div className="col-6">
                    {!imagesData.load && <Instructions {...imagesData.instructions} />}
                    {!imagesData.load && <Models {...imagesData} handleChangeModel={handleChangeModel} />}
                </div>

                <div className="col-6">
                    {!imagesData.load && <SideBar {...imagesData.instructions} nombre={imagesData.nombre} handleChangeModel={handleChangeModel} />}

                    {!imagesData.load && <Canvas {...imagesData} />}
                </div>

            </div>
           
        </>
    );
};
