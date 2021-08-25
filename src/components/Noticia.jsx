import React from 'react';
import { Card, Button } from "react-bootstrap";
import './noticia.css';

export default function Noticia({ noticia }) {
  const { urlToImage, title, description, publishedAt, url } = noticia;
  return (
    <Card className="my-2 card-noticia">
        <Card.Img variant="top" src={urlToImage} />
          <Card.Body>
                <Card.Title>{title}
                </Card.Title>
                <Card.Text>
                  {description}
                </Card.Text>
                 <span>{publishedAt}</span>
                 <Button href={url} variant="info" >Go somewhere</Button>
          </Card.Body>
    </Card>
  );
}
