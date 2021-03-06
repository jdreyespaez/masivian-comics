import React from 'react';
import { Row, Col, Table } from 'reactstrap';

const Xkcd = (props) => {
    const { data } = props;

    if(!data)
        return <div></div>;
    return (
        <Row className="xkcd">
            <Col sm="12" md={{ size: 4, offset: 4 }}>
            <h2></h2>
            <img />
            <span></span>
            <span></span>
            <Table>
                <tbody></tbody>
            </Table>
            </Col>
        </Row>
    );
};

export default Xkcd;