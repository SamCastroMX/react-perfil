import React from 'react';

export const SideBar = ({ titleName = "", nombre = "", Errornombre = false, handleChangeModel,titleDownload="" }) => {
    return (
        <>


            <div style={{ fontFamily: "Arial" }} className="mt-5 mt-lg-0" >
                <br />

                <div>

                    <div className="row mb-4">
                        <div className="col-lg-12">
                            <p className="text-uppercase  font-weight-medium f-14 mb-0" style={{ fontFamily: "AvenirNextLTPro-Regular", fontSize: "18px" }}>
                                <b> {titleName} </b>
                            </p>
                        </div>
                        <div className="col-lg-12">

                            <input
                                onChange={handleChangeModel}
                                value={nombre}
                                name="nombre"
                                id="name"
                                type="text"
                                className={Errornombre ? "form-control is-invalid" : "form-control "}
                                placeholder={titleName}
                                maxLength="50"
                            />
                            <div className="invalid-feedback">
                                Coloca tu nombre.
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
            
                            <button 
                                onClick={handleChangeModel}
                                name="modelType" 
                                value="Calaveritas" 
                                style={{ backgroundColor: "#FF3A00", color: "#ffffff", fontFamily: "AvenirNextLTPro-Regular" }} 
                                className="btn col-sm-12">
                                    DÍA DE LOS MUERTOS
                                </button>
                            <br />
                            <br />

                        </div>
                        <div className="col-lg-12 col-sm-12">
                            <button 
                            onClick={handleChangeModel}
                            name="modelType" 
                            value="Halloween" 
                            style={{ backgroundColor: "#FF3A00", color: "#ffffff", fontFamily: "AvenirNextLTPro-Regular" }} 
                            className="btn col-sm-12">
                                HALLOWEEN
                            </button>

                            <br />
                            <br />
                        </div>
                    </div>

                    





                </div>

            </div>

        </>
    );


};
