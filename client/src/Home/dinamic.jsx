import React from 'react';
import './Home.css'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

const CardExample = () => {
  return (
   <div className="Todo">
    <div className="car1">
    <MDBCol >
      <MDBCard className="MDBCard">
        <div className="MDBimg">
        <MDBCardImage className="img-fluid" src="https://img.icons8.com/color/200/000000/jigglypuff.png"
          waves /></div>
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
          <MDBBtn href="#">Click</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    </div>
      
    <div className="card2">
    <MDBCol style={{ maxWidth: "22rem" }}>
    <MDBCard>
      <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
        waves />
      <MDBCardBody>
        <MDBCardTitle>Card title</MDBCardTitle>
        <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
        <MDBBtn href="#">Click</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  </MDBCol>
 </div>
 </div>
  )
}

export default CardExample;