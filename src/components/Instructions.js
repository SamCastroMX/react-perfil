import React from 'react';

export const Instructions = ({ parrafo1, parrafo2, parrafo3, parrafo3_5, parrafo4, parrafo4_5, instrucciones1, instrucciones2, modeloPadre = "Calaveritas", }) => {
    return (

        <div className="mt-5 mt-lg-0" id="xse" style={{ fontFamily: "AvenirNextLTPro-Regular" }}>

            <br />
            <div>
                <a style={{ color: "#E52900", fontFamily: "AvenirNextLTPro-Bold" }}>{parrafo1}</a><b><a style={{ color: "black", fontFamily: "AvenirNextLTPro-Regular" }}>{parrafo2}</a></b>


                {modeloPadre == "Calaveritas" && <a style={{ color: "black" }} >{parrafo3}</a>}
                {modeloPadre == "Halloween" && { parrafo3_5 }}

                <br />
                <br />

                <p style={{ color: "black", textAlign: "center" }}><b>
                    {modeloPadre == "Calaveritas" && <a style={{ color: "black" }} dangerouslySetInnerHTML={{ __html: parrafo4 }}></a>}

                    {modeloPadre == "Halloween" && <a dangerouslySetInnerHTML={{ __html: parrafo4_5 }}></a>}

                </b></p>
            </div>
            <div style={{ backgroundColor: "#F0F0F0", color: "black", fontSize: "14px" }}>
                <b>
                    {instrucciones1} <br />
                </b>
                <br />
                <div className="row" >
                    <div className="col xs={2} sm={1} md={1} lg={1} xl={1}">
                        &nbsp;
                    </div>
                    <div className="xs={10} sm={11} md={11} lg={11} xl={11}">
                        <div dangerouslySetInnerHTML={{ __html: instrucciones2 }}></div>


                    </div>

                </div>


            </div>
            <div>
                <br />
                <br />

            </div>


        </div>

    );
};
