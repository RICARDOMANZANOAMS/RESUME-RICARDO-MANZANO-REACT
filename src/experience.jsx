import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Experience = () => {
    return (
        <>            
            

            <Container fluid="md">
                {/* <!-- -------------Text title --> */}              
                    <div className="text-center">
                        <h2> Experience</h2>
                    </div>
                    <div>
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Cistech-Cistel</Accordion.Header>
                                    <Accordion.Body>
                                            <div className="container">      
                                              <ul className="cistech">
                                                <li className="item">
                                                  Lead and implement proof of concept models to solve problems related to Big Data, IT security, Mobile security, Cloud Resource Management, and IoT projects using supervised learning, unsupervised learning, and anomaly detection.
                                                </li>
                                                <li className="item">
                                                  Develop robust and scalable application integrations for a suite of enterprise-level software products.
                                                </li>
                                                <li className="item">
                                                  Design and implement machine and deep learning pipelines including data collection, data cleaning, feature extraction, validation, and presentation of the data. 
                                                </li>
                                                <li className="item">
                                                  Create and deploy software applications as RESTful APIs in production to serve client’s requirements. 
                                                </li>
                                                <li className="item">
                                                  Efficient researcher and paper reviewer to vision new paths in Deep and Machine Learning, Ensemble Learning, Cloud Resource Management, and Malware and network anomaly detection.
                                                </li>
                                                <li className="item">
                                                  Elaborate custom and detailed reports related to algorithm implementation and mathematical background.
                                                </li>
                                              </ul>
                                            </div>
                                            <Container fluid="md">

                                                {/* -----First row with two columns------------2 columns with 2 cards for projects ------ */}
                                                <Row className="mb-3">
                                                    <Col md={6}>
                                                        <Card >
                                                            <Card.Body>
                                                                <Card.Title className="text-center">Canada Project</Card.Title>
                                                                                <Card.Text>   
                                                                                 &bull; Design, create, and deploy a RESTFul Api using Python, Flask, Docker, and WSGI to classNameify text extracted from natural health product images.
                                                                                </Card.Text>

                                                                                <Card.Text>
                                                                                &bull; Use client’s API integration using Python to create an automated tool to collect (big data), pre-process, and extract meaningful features from text to do classNameification
                                                                                </Card.Text>

                                                                                <Card.Text>
                                                                                &bull; Use Natural Language Processing techniques in Python to train and fine-tune commercial language processing models to do classNameification depending on client’s requirements.
                                                                                </Card.Text>

                                                                                <Card.Text>
                                                                                &bull; Utilize Fuzzy techniques for text comparison in Python.
                                                                                </Card.Text>

                                                                                <Card.Text>
                                                                                &bull; Implement parallel processing in Python to serve client’s requests efficiently.
                                                                                </Card.Text>

                                                                                <Card.Text>
                                                                                &bull; Implement Asynchronous Request-Reply pattern in Azure (trigger, queue, storage) to serve client’s requests neatly and efficiently.
                                                                                </Card.Text>
                                                                
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    <Col md={6}>
                                                    <Card >
                                                            <Card.Body>
                                                                <Card.Title className="text-center">IoT security (2020-Present)</Card.Title>
                                                                                <Card.Text>
                                                                                &bull; Design and implement big data pipelines using Hadoop-Spark (MLIB) framework to create classNameification models detecting attacks in IoT devices.
                                                                                </Card.Text>
                                                                                <Card.Text>
                                                                                &bull; Implement undersampling techniques in Hadoop-Spark framework to handle highly imabalaced datasets.
                                                                                </Card.Text>
                                                                                <Card.Text>
                                                                                &bull; Design and implement Generative Adversarial networks to generate new tabular data to handle imbalaced datasets.
                                                                                </Card.Text>
                                                                                <Card.Text>
                                                                                &bull; Create a Federated Learning framework using Python and Blockchain to train and test classNameification problems in a distributed and secured way.
                                                                                </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Row>

                                                {/* -----Second row with two columns------------2 columns with 2 cards for projects ------ */}
                                                <Row className="mb-3">
                                                    <Col md={6}>
                                                        <Card >
                                                            <Card.Body>
                                                                <Card.Title className="text-center">Robot-Assisted Sensor Deployment (2023-Present)</Card.Title>
                                                                            <Card.Text>
                                                                            &bull; Design and implement a full-stack web application using Spring Boot as the backend framework, React for the frontend, and MySQL for the database.
                                                                            </Card.Text>
                                                                            <Card.Text>
                                                                            &bull; Implement authorization and authentication to secure the full-stack web application.
                                                                            </Card.Text>
                                                                
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                    <Col md={6}>
                                                    <Card >
                                                            <Card.Body>
                                                                <Card.Title className="text-center">Cloud Resource Management(2020-2022)</Card.Title>
                                                                                    <Card.Text>
                                                                                    &bull;  Designed and implemented forecasting algorithms in Java-Cloudsim to reduce power consumption in data centers guarateeing service level agreement.
                                                                                    </Card.Text> 
                                                                                    <Card.Text>
                                                                                    &bull; Weka API integration for resource forecasting in Java.
                                                                                    </Card.Text> 
                                                                                    <Card.Text>
                                                                                    &bull; Trained and tested forecasting pipelines in Python to predict CPU utilization.
                                                                                    </Card.Text>
                                                            </Card.Body>
                                                        </Card>
                                                    </Col>
                                                </Row>






                                        
                                            </Container>


                                    </Accordion.Body>
                                </Accordion.Item>
                                {/* -----------------------Experience University of Waterloo---------------- */}
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header> University of Waterloo</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="container">      
                                            <ul className="waterloo">
                                            <li className="item">
                                            Knowledgeable researcher in anomaly detection creating methodologies using machine and deep learning techniques, statistical analysis in time-series, forecasting, classNameification; as a result, 4 IEEE papers published, 3 papers in process. 
                                            </li>
                                            <li className="item">
                                            Possessed strong commitment as a team player to develop and create new methodologies related to anomaly detection.
                                            </li>
                                            <li className="item">
                                            Mentored and coached students to simulate queues in routers, CSMA CA/CD protocols, PDU analysis, MySQL queries, Database design, stored procedures, transactions, DB performance, and data analysis.
                                            </li>
                                            <li className="item">
                                            Taught tutorials using efficient and understandable material on MySQL and database design in a classNameroom of 120 students.
                                            </li>
                                            <li className="item">
                                            Promoter of fair and proficient feedback while grading students' assignments and quizzes.	
                                            </li>
                                            </ul>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                 {/* -----------------------Experience Telefonica Ecuador---------------- */}
                                 <Accordion.Item eventKey="2">
                                    <Accordion.Header> Telefonica-Ecuador</Accordion.Header>
                                    <Accordion.Body>
                                        <div className="container">      
                                            <ul className="telefonica">
                                                <li className="item">
                                                Designed, selected and elaborated technical IT solutions related to Routing, Switching, Wireless, Cloud, IP-VPN, Internet, UCAAS, and M2M.
                                                </li>
                                                <li className="item">
                                                Knowledgeable elaboration of Cisco BOMs (Bill of materials) for client´s requirements in WIFI, SWITCHING, ROUTING, UCAAS, and connectivity solutions.
                                                </li>
                                                <li className="item">
                                                Communicated collaboratively and closely with commercial, product development, and project managers teams to provide adjusted technical and financial solutions for clients; as a result, revenue increases.
                                                </li>
                                                <li className="item">
                                                Efficient and proactive communication with clients to identify needs and propose solutions; in consequence, expand customer relationships generating business opportunities.
                                                </li>
                                                <li className="item">
                                                Analyzed clients' RFPs (Request For Purpose) precisely providing suitable financial and technical requirements on time.
                                                </li>
                                               
                                            </ul>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>


                                {/* -----------------------Experience Greepo Energy---------------- */}
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header> Greeepo Energy-Ecuador</Accordion.Header>
                                    <Accordion.Body>
                                    <div className="container">      
                                            <ul className="greepo">
                                                <li className="item">
                                                Able to recognize industrial automation customers’ needs through efficient communication with technical teams.
                                                </li>
                                                <li className="item">
                                                Designed and implemented flexible manufacturing systems integrating KUKA robots, PLC (Programmable Logic Controller), sensors, actuators to guarantee high productivity reducing costs in Beverage, Manufacturing, and Educational fields.
                                                </li>
                                                <li className="item">
                                                Conducted technical safety training to operate flexible manufacturing systems.
                                                </li>
                                                <li className="item">
                                                Simulated robots, CNCs (Computer Numerical Control), conveyors and AS/RS systems using specialized software to verify if the components, machines and processes are suitable to obtain high productivity.
                                                </li>   
                                            
                                            </ul>
                                    </div>
                                    </Accordion.Body>
                                </Accordion.Item>



                            </Accordion>
                    </div>


               
            </Container>           
      
    </>
    )
}
export default Experience;