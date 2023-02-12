import React from "react";
import Header from "../../components/Header";
import ProtectedRoute from "../ProtectedRoute";

import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
  } from 'mdb-react-ui-kit';
import { Button, Card } from "react-bootstrap";

export default function Index() {

    const id = localStorage.getItem('id');
    const balance = localStorage.getItem('balance');
    const email = localStorage.getItem('email');
    const hasPremium = localStorage.getItem('hasPremium');
    const role = localStorage.getItem('role');
    const username = localStorage.getItem('username');

    return (
        <>
        <Header />
            <MDBContainer className="py-5">
               
                    <Card.Header>
                        <MDBRow>
                            <MDBCol>
                                <MDBBreadcrumb className="bg-dark rounded-3 p-3 mb-4">
                                    <MDBBreadcrumbItem>
                                        <a href='#'>User</a>
                                    </MDBBreadcrumbItem>
                                    <MDBBreadcrumbItem>
                                        <a href="#">Profile</a>
                                    </MDBBreadcrumbItem>
                                    <MDBBreadcrumbItem active>View Profile</MDBBreadcrumbItem>
                                </MDBBreadcrumb>
                            </MDBCol>
                        </MDBRow>
                    </Card.Header>
                    <Card
                    bg="dark"
                    text="white"
                >
                    <br></br>
                    <MDBRow>
                        <MDBCol lg="4">
                            <MDBCard className="bg-dark mb-4">
                                <MDBCardBody className="text-center">
                                    <MDBCardImage
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                        alt="avatar"
                                        className="rounded-circle"
                                        style={{ width: '150px' }}
                                        fluid />
                                    <p className="text-muted mb-1">{email}</p>
                                    <p className="text-muted mb-4">{balance} R$</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <Button
                                        variant="light"

                                        >
Adicionar saldo
                                        </Button>
                                        <Button
                                        variant="warning"
                                        >
Reportar Erro
                                        </Button>
                                    </div>
                                </MDBCardBody>
                            </MDBCard>


                        </MDBCol>
                        <MDBCol lg="8">
                            <MDBCard className="mb-4 bg-dark">
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Username</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">{username}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Email</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">{email}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Balance</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">{balance} R$</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Premium</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">{hasPremium}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>


                        </MDBCol>
                    </MDBRow>
                </Card>
            </MDBContainer>
        </>
      );
}

