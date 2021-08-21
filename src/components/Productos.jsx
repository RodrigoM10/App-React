import React from 'react'
import { Card, Button } from 'react-bootstrap'

export const Productos = ({title, producto}) => {

    const {nombre, imagen} = producto;
    return (
        <>
        <h2>{title}</h2>  
        <div className="d-flex flex-wrap justify-content-between">
        <Card style={{ width: '15rem' }}>
        <Card.Img 
        variant="top"
        src={imagen}
         />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      
      <Card style={{ width: '15rem' }}>
        <Card.Img variant="top" src="https://tse1.mm.bing.net/th?id=OIP.rTYfHDrTyYL7U2Dl8S0gTAAAAA&pid=Api&P=0&w=300&h=300" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      </div>
      </>
    )
}

