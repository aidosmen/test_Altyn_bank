import React from 'react';
import { Card, CardBody, CardImg, CardTitle, Col} from "reactstrap";
import './Country.css';
import defaultPicture from '../../assets/images/image_not_available.png';
import config from "../../config";

const Country = (props) => {

    let photo = defaultPicture;
    if (props.photo) {
        photo = config.apiURL + '/uploads/' + props.photo;
    }
    return (
        <Col md="3" className="d-flex align-items-stretch">
            <Card onClick={props.Onclick} className="text-center Artist">
                <CardImg top width="100%" src={photo} alt="photo"/>
                <CardBody>
                    <CardTitle className="">{props.name}</CardTitle>
                </CardBody>
            </Card>
        </Col>

    )
};

export default Country;