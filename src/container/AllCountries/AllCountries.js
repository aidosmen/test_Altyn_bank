import React, {Component} from 'react';
import Country from "../../components/Country/Country";
import {Row} from "reactstrap";
import {fetchData} from "../../store/actions/actions";
import {connect} from "react-redux";
import Pagination from "../../components/Pagination/Pagination";

class AllCountries extends Component {
    state = {
        currentPage: 1,
        postsPerPage: 5
    }
    componentDidMount() {
        this.props.onFetchData();
    }

    goToAlbums(artist) {
        this.props.history.push(`/id/${artist}`)
    }
    render() {
        const setCurrentPage = (number) => (
           this.setState({currentPage: number})
        );
        const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
        const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
        const currentPosts = this.props.countries.slice(indexOfFirstPost , indexOfLastPost);

        const paginate = (pageNumber) => setCurrentPage(pageNumber)
        return (
            <div>
                <Row>
                    {
                        currentPosts.map(obj => {
                            return (
                                <Country
                                    Onclick={() => this.goToAlbums(obj.responsibleUser.id)}
                                    key={obj.createdAt}
                                    name={obj.createdAt}
                                    // photo={obj.previewImage}
                                />
                            )
                        })
                    }


                </Row>
                <Pagination postsPerPage={this.state.postsPerPage} totalPosts={this.props.countries.length} paginate={paginate}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        countries: state.countries
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchData: () => dispatch(fetchData()),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(AllCountries);