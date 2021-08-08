import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../components/Footer.css';


function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                    <ul className="list-unstyled">
                        <li>Kaivon Tolooee</li>
                        <li>kaivont@gmail.com</li>
                        <li>719-310-6061</li>
                        </ul>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        <ul className="two-list-unstyled">
                   <li>This site was made by Kaivon Tolooee</li>
                   <li>&copy;{new Date().getFullYear()} KT INC | All rights Reserved | Privacy</li>
                   </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;