import React, {Component} from 'react';
import './NodeGraph.css';
import {connect} from 'react-redux';
import * as actions from "../../store/actions";

class NodeGraph extends Component {

    state = {
    };

    componentDidMount() {
        this.props.onD3Update(this.props.searchedLinks, this.props.searchedNodes);
    }

    componentDidUpdate() {
        this.props.onD3Update(this.props.searchedLinks, this.props.searchedNodes);
    }

    render() {

        return (
            <div className={"nodeGraph"}>

                <div id="graph"></div>
                {/*
                <div id="person-details-popup" className="hide">
                    <img id="profile-image" src="placeholder.jpg"/>
                    <h2 id="profile-header">Placeholder Name</h2>
                    <div id="profile-details"></div>
                    <div id="profile-buttons-wrapper">
                        <finra-button theme="primary" size="md" onClick={"addToTeam()"}>Add to Team</finra-button>
                        <finra-button theme="primary" size="md" onClick={"closePopup()"}>Close</finra-button>
                    </div>
                </div>*/}
            </div>
        )
    }
};

const mapStateToProps = state => {
    return {
        searchedNodes: state.nodes.searchedNodes,
        searchedLinks: state.nodes.searchedLinks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onD3Update: (links, nodes) => dispatch( actions.d3Update(links, nodes))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NodeGraph);