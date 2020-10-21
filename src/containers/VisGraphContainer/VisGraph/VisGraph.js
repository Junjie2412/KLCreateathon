import React, {Component} from 'react';
//import Graph from 'vis-react';
import connect from "react-redux/es/connect/connect";
import './VisGraph.css';
import { Network, Node, Edge } from 'react-vis-network';

class VisGraph extends Component {

    render() {

        let options = {
            nodes: {
                shape: "dot",
                font: {
                    size: this.props.showNodes ? (this.props.currentFontSize==="Large" ? 18 : (this.props.currentFontSize==="Medium" ? 12 : (this.props.currentFontSize==="Small" ? 8 : 8))) : 0,
                    face: "Open Sans",
                    color: "white",
                    strokeColor: "black",
                    strokeWidth: 8,
                },
                scaling: {
                    min: 4,
                    max: 40
                },
                borderWidth: 2,
            },
            edges: {
                width: 2,
                color: {
                    color:'#848484',
                    highlight:'#848484',
                    hover: '#848484',
                    inherit: 'from',
                    opacity:1.0
                },
                font: {
                    size: this.props.showEdges ? 10 : 0,
                    align: "top",
                    face: "Open Sans",
                    color: "white",
                    strokeColor: "black",
                    strokeWidth: 8,
                },
                scaling: { label: {enabled: false } },
                arrows: "to",
            },
            manipulation: {
                deleteNode: true,
                deleteEdge: true
            }
        };

        let nodesList = this.props.searchedNodesVis.map(node => (
            <Node key={node.id} id={node.id} label={node.label} value={node.value} />
        ));

        let edgesList = this.props.searchedEdgesVis.map(edge => (
            <Edge key={edge.id} id = {edge.id} label={edge.label} to={edge.to} from={edge.from} value={edge.value}/>
        ));

        return (
            <div id={"mynetwork"}>
                <Network
                    options={options}>
                    {nodesList}
                    {edgesList}
                </Network>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        nodesVis: state.nodes.nodesVis,
        edgesVis: state.nodes.edgesVis,
        searchedNodesVis: state.nodes.searchedNodesVis,
        searchedEdgesVis: state.nodes.searchedEdgesVis,
        showNodes: state.nodes.showNodes,
        showEdges: state.nodes.showEdges,
        currentFontSize: state.nodes.currentFontSize
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VisGraph);