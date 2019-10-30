import React, {Component, Fragment} from 'react';
import {Container} from "reactstrap";
import {Route} from "react-router";
import AllArtists from "./container/AllCountries/AllCountries";
import CountryInfo from "./container/CountryInfo/CountryInfo";


class App extends Component {

    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Route path="/" exact component={AllArtists}/>
                    <Route path="/id/:id"  component={CountryInfo}/>
                </Container>
            </Fragment>
        );
    }

}

export default App;
