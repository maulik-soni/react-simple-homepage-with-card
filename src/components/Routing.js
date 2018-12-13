import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HeaderComponent from "./HeaderComponent";
import Homepage from "./Homepage";

class Routing extends Component {

    render() {
        return (
            <main>
                <BrowserRouter>
                    <Switch>
                        <HeaderComponent>
                            <Route exact={true} path="/">
                                <Homepage/>
                            </Route>
                        </HeaderComponent>
                    </Switch>
                </BrowserRouter>
            </main>
        );
    }
}

Routing.propTypes ={
    routing: PropTypes.object,
    history: PropTypes.object,
};

function mapStateToProps(state){
    return {
        routing: state.routing,
    }
}
export default connect(mapStateToProps)(Routing);