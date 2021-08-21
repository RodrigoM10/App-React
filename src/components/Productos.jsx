import React from 'react';
import { Producto } from './Producto';

export const Productos = ({ title, productos }) => {
    const mapProductos = productos.map((producto) => (
                   <Producto 
                   producto={producto} />
                ));

    return (
        <>
            <h2>{title}</h2>
            <div className="d-flex flex-wrap justify-content-between">
                {mapProductos}
            </div>
        </>
    );
};

