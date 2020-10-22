import React, {Component} from 'react';
//import Graph from 'vis-react';
import connect from "react-redux/es/connect/connect";
import './VisGraph.css';
import { Network, Node, Edge } from 'react-vis-network';
import * as actions from '../../../store/actions/index';
import Search from '../../../components/Search/Search';
import ReactHtmlParser from 'react-html-parser';
import {nodesData} from "../../../shared/data";

class VisGraph extends Component {

    componentDidMount() {
        this.props.onFetchData();
    }

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
                },/*
                icon: {
                    face: "'Font Awesome 5 Free'",
                    weight: "900", // Font Awesome 5 doesn't work properly unless bold.
                    code: "\uf1ad",
                    size: 50
                },*/
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
                arrows: "to"
            },
            manipulation: {
                deleteNode: true,
                deleteEdge: true
            },
            arrowStrikethrough: false,
            physics: {
                enabled: true,
                solver: "repulsion", // I found this solver displayed better than the default
                minVelocity: 0.05 // I thought the default value made the graph "screech to a halt" unnaturally so I lowered it slightly
            }
        };

        /*
        5 = #e60000
4 = #e66300
3 = #eb9c00
2 = #8f751e
1 = #635d4b
null = #919191
         */

        let riskColors =  {
            5: "#e60000",
            4:"#e66300",
            3:"#eb9c00",
            2:"#8f751e",
            1:"#635d4b",
            0:"#919191"
        };

        let nodesList = this.props.searchedNodesVis.map(node => (
            <Node
                key={node.id}
                id={node.id}
                label={node.label}
                value={node.value }
                color={node.properties.risk_code ? (riskColors[node.properties.risk_code]) : "#919191"}
                font={node.properties.risk_code ? ({color:riskColors[node.properties.risk_code]}) : {color:"#919191"}}
                onClick={() => this.props.onSelectNode(node)}
                shape = {(node.type==="Individual"||node.type==="Firm")?"icon":"dot"}
                icon={{
                    face: "'Font Awesome 5 Free'",
                    weight: "900", // Font Awesome 5 doesn't work properly unless bold.
                    code: node.type==="Individual" ? "\uf007" : (node.type==="Firm" ? "\uf1ad" : ""),
                    size: 50,
                    color: node.properties.risk_code ? (riskColors[node.properties.risk_code]) : "#919191"
                }}
            />
        ));

        let edgesList = this.props.searchedEdgesVis.map(edge => (
            <Edge
                key={edge.id}
                id = {edge.id}
                label={edge.label}
                to={edge.to}
                from={edge.from}
                value={edge.value}
                color={edge.id===this.props.selectedEdge ? {color:"white"} : ""}
                font={edge.id===this.props.selectedEdge ? {strokeColor:"#6c757d", } : ""}
            />
        ));

        let edgeDescriptions = this.props.searchedEdgesVis.map(edge => (
            <li key={edge.id} onClick={() => this.props.onSelectEdgeFromList(edge.id)} style={{backgroundColor : edge.id===this.props.selectedEdge ? "#818d96" : ""}}>
                {/*{ReactHtmlParser(edge.description)}*/}
                {this.props.searchedNodesVis.find(node => node.id===edge.from).label+" "+edge.label+" "+this.props.searchedNodesVis.find(node => node.id===edge.to).label}
            </li>
            )
        );

        return (
            <div>
                <Search/>
                <div id="edgepanel" className="panel">
                    <div id="edgecontainer" className="panelcontainer">
                        <ul>
                            {edgeDescriptions}
                        </ul>
                    </div>
                </div>
                <div id={"mynetwork"}>
                    <Network
                        options={options}>
                        {nodesList}
                        {edgesList}
                    </Network>
                </div>
                <div id="nodepanel" className="panel">
                    <div id="nodecontainer" className="panelcontainer">{/*
                        <h1>

                        </h1>
                        <ul>
                            <li>

                            </li>
                        </ul>*/}
                    </div>
                </div>
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
        currentFontSize: state.nodes.currentFontSize,
        selectedEdge: state.nodes.selectedEdge,
        selectedNode: state.nodes.selectedNode
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchData: () => dispatch(actions.fetchData()),
        onSelectEdgeFromList: (edge) => dispatch(actions.selectEdgeFromList(edge)),
        onSelectNode: (node) => dispatch(actions.selectNode(node))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VisGraph);