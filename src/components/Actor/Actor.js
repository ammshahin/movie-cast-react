import React, { useState } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
const Actor = (props) => {

    const { name, email, genre, salary, img } = props.actors;
    console.log(name);
    return (
        <div>
            <MDBCard style={{ maxWidth: '22rem' }}>
                <MDBCardImage src={img} position='top' alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>{name}</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn href='#'>Button</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
};

export default Actor;