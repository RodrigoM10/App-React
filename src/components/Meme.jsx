import React from 'react';
import { Card, Button } from "react-bootstrap";
import './meme.css';

export default function Meme({ meme }) {
  const { urlToImage, title } = meme;
  return (
    <Card className="my-2 card-meme">
        <Card.Img variant="top" src={urlToImage} />
          <Card.Body>
                <Card.Title>{title}
                </Card.Title>
                 {/* <span>{publishedAt}</span> */}
          </Card.Body>
    </Card>
  );
}
