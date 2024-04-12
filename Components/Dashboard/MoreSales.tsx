import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';


const MoreSales = () => {
    return (
        <React.Fragment>
            <Col xl={12}>
                <Card className="bg-info-subtle text-info border-0">
                    <Card.Body>
                        <Row className="gy-3">
                            <div className='d-flex justify-content-center text-center'>
                                <p>Inputs are available<i className=' bx bx-help-circle'></i></p>
                            </div>
                            {/* <button className="button">
                                <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px"><path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path></svg>
                            </button>
                            <button className="Btn">

                                <div className="sign">+</div>

                                <div className="text">Create</div>
                            </button> */}
                        </Row>

                    </Card.Body>
                </Card>
            </Col>
        </React.Fragment>
    );
}

export default MoreSales;