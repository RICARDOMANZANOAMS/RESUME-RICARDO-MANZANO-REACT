import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Publications = () => {
    return (
        <>
       

        <Container>
            <div className="text-center">
                <h2> Publications</h2>
            </div>
            <Container>
                <Row>
                    <Col md={12}>
                        <Card >
                            <Card.Body>
                                
                                    <Card.Text>
                                    <a href="https://www.mdpi.com/1424-8220/22/20/7726" className="link-secondary">Manzano Sanchez, Ricardo Alejandro, et al. "Towards Developing a Robust Intrusion Detection Model Using Hadoop–Spark and Data Augmentation for IoT Networks." Sensors 22.20 (2022): 7726. (Journal) </a>
                                    </Card.Text> 
                                    <Card.Text>
                                    <a href="https://dl.acm.org/doi/full/10.1145/3492327" className="link-secondary">Sanchez, Ricardo Alejandro Manzano, et al. "Detection of Anomalous Behavior of Smartphone Devices using Changepoint Analysis and Machine Learning Techniques." Digital Threats: Research and Practice (2022). (Journal)</a>
                                    </Card.Text> 
                                    <Card.Text>
                                    <a href="https://ieeexplore.ieee.org/abstract/document/9623095" className="link-secondary">R. Manzano et al. “Developing Machine Learning and Deep Learning Models for host overload detection in cloud data center”, in 2021 IEMCON, IEEE. AWARD: Best paper in Machine Learning area. </a>
                                    </Card.Text> 
                                    <Card.Text>
                                    <a href="https://ieeexplore.ieee.org/abstract/document/8815676" className="link-secondary">R. Manzano et al. “Detection of anomalous behavior in wireless devices using changepoint analysis,” in 2019 IEEE International Congress on Internet of Things (ICIOT). IEEE, 2019, pp. 82–90.  </a>
                                    </Card.Text> 
                                    <Card.Text>
                                    <a href="https://ieeexplore.ieee.org/abstract/document/8817163" className="link-secondary">Albasir, R. Manzano, and K. Naik, “Deep learning based approach for classifying power signals and detecting anomalous behavior of wireless devices,” in 2019 IEEE World Congress on Services (SERVICES), vol.2642-939X, July 2019, pp. 92–98.</a>
                                    </Card.Text> 
                                    <Card.Text>
                                    <a href="https://ieeexplore.ieee.org/abstract/document/8817163" className="link-secondary">Albasir, R. Manzano, and K. Naik, “Deep learning based approach for classifying power signals and detecting anomalous behavior of wireless devices,” in 2019 IEEE World Congress on Services (SERVICES), vol.2642-939X, July 2019, pp. 92–98.</a>
                                    </Card.Text> 
                                    <Card.Text>
                                    <a href="https://ieeexplore.ieee.org/abstract/document/8984518" className="link-secondary">M. Al-tekreeti, T. Kapoor, R. Manzano, and et al., “Machine learning based malware detection in wireless devices using power footprints”, in 2019 International Symposium on Systems Engineering (ISSE), Oct 2019, pp. 1–8. </a>
                                    </Card.Text> 
                                    <Card.Text>
                                    <a href="https://ieeexplore.ieee.org/abstract/document/9272246" className="link-secondary">Albasir, K. Naik, R. Manzano, P. Shah, and N. Naik, “A strongly non-intrusive methodology to monitor and detect anomalous behaviour of wireless devices,” in 2020 IEEE International Symposium on Systems Engineering (ISSE), (pp. 1-8). IEEE. </a>
                                     
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
    export default Publications;