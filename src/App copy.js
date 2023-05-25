import image from "./stats-preview-card-component-main/images/image-header-desktop.jpg";
import { Container, Row, Col,Image } from 'react-bootstrap';

function App() {
  return (
    <main>


      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="info-container">
              <div>
                <h1>Get <span>insights</span> that help your business grow.</h1>
                <p className="main-p"> Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
              </div>
              <div className="statics-container">
                <div>
                  <p>10k+</p>
                  <p>companies</p>
                </div>

                <div>
                  <p>314</p>
                  <p>templates</p>
                </div>

                <div>
                  <p>12m+</p>
                  <p>queries</p>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="image-container">
              <Image src={image}  alt="people working in office"/>
          </Col>
        </Row>
      </Container>




    </main>

  );

}
export default App;









