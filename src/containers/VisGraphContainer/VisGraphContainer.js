import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import VisGraph from "./VisGraph/VisGraph";
import './VisGraphContainer.css';

class VisGraphContainer extends Component {

    render() {

        return (

            <div className={"visGraphContainer"}>
                <VisGraph/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        nodesVis: state.nodes.nodesVis,
        edgesVis: state.nodes.edgesVis,
        searchedNodesVis: state.nodes.searchedNodesVis,
        searchedEdgesVis: state.nodes.searchedEdgesVis
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VisGraphContainer);