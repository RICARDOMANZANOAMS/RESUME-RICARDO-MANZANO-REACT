import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Certifications = () => {
    return (
        <>
   

        <Container>
            <div className="text-center">
                <h2>Certifications</h2>
            </div>
            <Container>
                <Row>
                    <Col md={12}>
                        <Card >
                            <Card.Body>
                                
                                <Card.Text>
                                
                                    DP-100: Designing and Implementing a Data Science Solution on Azure (Pipeline deployment in Databricks).  
                                                              
                                
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </Container>

        </Container>

        
        </>
        
        )
    }
    export default Certifications;