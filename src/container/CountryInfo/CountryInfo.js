import React, {Component , Fragment} from 'react';
import {Link} from "react-router-dom";

class CountryInfo extends Component {
    state = {
        id: null
    };

    componentDidMount() {
        this.setState({id: this.props.match.params.id});
    }
    render() {
        return (
            <Fragment>
                <h1 className="text-primary">
                    Hello , ive catched the following id - {this.state.id}
                </h1>
                <Link to="/" className="btn btn-danger">Go Back!!!</Link>
            </Fragment>

        )
    }
}


export default CountryInfo;