import { motion } from "framer-motion";
import image from "./stats-preview-card-component-main/images/image-header-desktop.jpg";
import { Container, Row, Col, Image } from 'react-bootstrap';
function App() {


  return (
    <main>


      <Container>
        <Row>
          <Col xs={12} md={6}>
            <div className="info-container">
              <div>
                <h1>
                  <motion.span

                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: .7, delay: 0 } }}>Get
                  </motion.span>

                  <span className="lighted">

                    <motion.span

                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0, transition: { duration: .7, delay: 0.2 } }}> &nbsp;insights
                    </motion.span>

                  </span>
                  <motion.span

                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: .7, delay: 0.4 } }}>&nbsp;that&nbsp;
                  </motion.span>


                  <motion.span

                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: .7, delay: 0.6 } }}> help&nbsp;
                  </motion.span>



                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: .7, delay: 0.8 } }}>your&nbsp;
                  </motion.span>

                   
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: .7, delay: 1} }}>business&nbsp;
                  </motion.span>
                  
                  
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: .7, delay: 1.2} }}>grow.
                  </motion.span></h1>
                <motion.p 
                  initial={{ scale:0 }}
                  animate={{ scale:1, transition: { duration: 2} }}
                className="main-p"> Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</motion.p>
              </div>
              <div className="statics-container">
                <motion.div
                   initial={{ opacity: 0, y:50 }}
                   animate={{ opacity: 1, y: 0, transition: { duration: .7, delay: 2 } }}
                >
                  <p>10k+</p>
                  <p>companies</p>
                </motion.div>

                <motion.div
                 initial={{ opacity: 0, y:50 }}
                 animate={{ opacity: 1, y: 0, transition: { duration: .7, delay: 2.2 } }}
                >
                  <p>314</p>
                  <p>templates</p>
                </motion.div>

                <motion.div
                   initial={{ opacity: 0, y:50 }}
                   animate={{ opacity: 1, y: 0, transition: { duration: .7, delay: 2.4 } }}
                > 
                  <p>12m+</p>
                  <p>queries</p>
                </motion.div>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="image-container">
          
            <motion.img src={image} alt="people working in office" 
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 2, delay: 0 } }}
            />
           
          </Col>
        </Row>
      </Container>




    </main>

  );

}
export default App;









