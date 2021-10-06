import React, { useEffect, useState } from 'react';
import Actor from '../Actor/Actor';
import { MDBContainer, MDBCol } from 'mdb-react-ui-kit';
import { Container,Row,Col } from 'react-bootstrap';
const Actors = () => {
    const [actors, setActors] = useState([]);

    useEffect(() => {
        fetch('./actors.json')
            .then(Response => Response.json())
            .then(data => setActors(data))
    }, []);
    console.log(actors);
    return (
        <Container>
            <Row>
            {
                actors.map(
                    actor => <Col xs = {6} md = {4}><Actor
                        key={actor.id}
                        actors={actor}>
                    </Actor>
                    </Col>
                )
            }
            </Row>
            

           
        </Container>
    );
};

export default Actors;