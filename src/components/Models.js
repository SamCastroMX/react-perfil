import React from 'react';

export const Models = ({ images, ErrorradioChecked=false,handleChangeModel }) => {
  
    let count = 1;

    const contentItems = images.map((item, key) => {

        return (
            <div className="col-4" style={{ textAlign: "center" }} key={key}>
                <br />
                <div className="invalid-feedback">Coloca tu nombre.</div>
                <p className={ErrorradioChecked ? "mierrorText" : ""} style={{ fontFamily: "AvenirNextLTPro-Regular" }}>
                    <input
                        type="radio"
                        name="modelo"
                        value={item.value}
                       onClick={handleChangeModel} 
                        key={item.id}
                        className={ErrorradioChecked ? "mierror" : ""}
                    /> {item.name} </p>


                <img src={item.src} width="180" />
            </div>
        );

    })


    return (

 
            <div className="row">
                <div className="invalid-feedback">
                    Selecciona un diseño
                </div>
                {contentItems}
            </div>
 

    )
};
