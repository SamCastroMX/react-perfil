import React from 'react';
import intro from "../assets/img/intro.jpg"

export const Intro = ({principal, setPrincipal}) => {
  return (
    <div className='row'>
      <div className="col-lg-12">
        <div className="mt-5 mt-lg-3" id="xse" style={{ fontFamily: "AvenirNextLTPro-Regular" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ color: "#ff3A00", fontSize: "20px", textAlign: "center" }}><b>¡Únete a la celebración!</b> <br /> Join to this celebration</p>
            <p style={{ color: "black", textAlign: "center" }}><b>Personaliza tu avatar de redes sociales o medios de comunicación con la celebración de tu agrado <br />
              Costumize your avatar on the social network with the options to celebrate these traditions
            </b></p>
            <img alt="xpo" src={intro} />
          </div>
          <div className="col-lg-12">
            <div className="d-flex justify-content-center">
              <button onClick={()=>{setPrincipal({...principal,intro:false})}} name="items" value="Calaveritas" style={{ justifyContent: 'center' }} className="btn buttonIni ">
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
};
