import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Education = () => {
    return (
        <>
        

        <Container>
            <div className="text-center">
                <h2> Education</h2>
            </div>
            <Container>
                <Row>
                    <Col md={6}>
                        <Card >
                            <Card.Body>
                                <Card.Title className="text-center">University of Waterloo</Card.Title>
                                <Card.Text>
                                
                                
                                       Department: Electrical and Computer Engineering
                                        </Card.Text>
                                        <Card.Text>
                                        Master of Applied Science (2018-2020)
                                        </Card.Text>
                                        <Card.Text>
                                        <strong>Area of research:</strong> Pattern Analysis and Machine Intelligence (PAMI) GPA: 85.60/100
                                        </Card.Text>
                                        <Card.Text>
                                        <strong>Awards</strong> University of Waterloo. International Masters Student Award and Graduate Research Studentship.
                                                             
                                </Card.Text>
                                
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={6}>
                        <Card >
                            <Card.Body>
                                <Card.Title className="text-center">Army Polytechnic School</Card.Title>
                                <Card.Text>
                                Department: Energy and Mechanics Engineering
                                </Card.Text>

                                <Card.Text>
                                Mechatronics Engineering (2006-2012)
                                </Card.Text>
                                <Card.Text>
                                <strong>Thesis:</strong> : Design and implementation of a modular and reconfigurable system for quality control of zippers
                                </Card.Text>
                                <Card.Text>
                                <strong>Academic Exchange and Internship:</strong> Tecnológico de Monterrey, Monterrey México. Research: Hybrid manufacturing systems using DELMIA AUTOMATION.
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
    export default Education;