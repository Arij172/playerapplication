// src/Player.js
import React from 'react';
import { Card } from 'react-bootstrap';

const Player = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
return (
    <Card style={{ width: '18rem' }}>
    <div className="text-center">
        <Card.Img variant="top" src={imageURL} alt={name} className="rounded" />
    </div>
    <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
        Team: {team}
        <br />
        Nationality: {nationality}
        <br />
        Jersey Number: {jerseyNumber}
        <br />
        Age: {age}
        </Card.Text>
    </Card.Body>
    </Card>
);
};

export default Player;

