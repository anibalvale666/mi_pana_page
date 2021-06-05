import React from 'react';
import CardItem from './CardItem';
import './Cards.css';


//para tabajar con las imagenes
const allImgs = require.context('../assets/images/', true);


function Cards() {
    return (
        <div className="cards">
            <h1>SERVICIOS Y PRODUCTOS</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src= {allImgs("./cambioaceite.jpg").default}
                            text="Mantenimiento preventivo de motor"
                            label="Servicios"
                            path="/Servicios"
                        /> 
                    
                        <CardItem 
                            src={allImgs("./cambio-anticongelante.jpg").default}
                            text="Revisión de niveles y cambio total de refrigerante de radiador "
                            label="Servicios"
                            path="/Servicios"
                        /> 

                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src={allImgs("./products.jpeg").default}
                            text="Venta y cambio de aceite y articulos para su nave"
                            label="productos"
                            path="/productos"
                        /> 
                        <CardItem 
                            src={allImgs("./filtros.jpeg").default}
                            text="Venta y cambio de filtros de aceite"
                            label="productos"
                            path="/productos"
                        /> 
                        <CardItem 
                            src={allImgs("./aire.jpeg").default}
                            text="Venta y cambio de filtros de aire y cabina"
                            label="productos"
                            path="/productos"
                        /> 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
