import React, {Component} from 'react';
import './Search.css';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import {Form} from 'react-bootstrap';

class Search extends Component {

    search = (event) => {
        event.preventDefault();
        this.props.onClearVis();
        this.props.onSearchVis(this.props.searchValue, this.props.numConnections);
    };

    editSearch = (event) => {
        event.preventDefault();
        this.props.onEditSearch(event.target.value);
    };

    editNumConnections = (event) => {
        event.preventDefault();
        this.props.onEditNumConnections(event.target.value);
    };

    clickDropDown = (event, search) => {
        event.preventDefault();
        this.props.onClearVis();
        this.props.onEditSearch(search);
        this.props.onSearchVis(search, this.props.numConnections);
    };

    showNodes = () => {
        console.log("show nodes");
        if (this.props.showNodes === true) {
            this.props.onShowNodes(false);
        } else {
            this.props.onShowNodes(true);
        }
    };

    showEdges = () => {
        console.log("show edges");
        if (this.props.showEdges === true) {
            this.props.onShowEdges(false);
        } else {
            this.props.onShowEdges(true);
        }
    };

    changeFontSize = (event) => {
        this.props.onChangeFontSize(event.target.value);
    };

    render () {
        let searchList = this.props.nodesVis.map(node => (
            <li
                key={node.id}
                style={{display: node.label.toLowerCase().includes(this.props.searchValue.toLowerCase()) ? "block" : "none"}}
                onClick={(event) => this.clickDropDown(event, node.label)}
            >
                {node.label}
            </li>
        ));

        let options = this.props.fontOptions.map(font => (
            <option key={font} value={font}>
                {font}
            </option>
        ));

        return (
                <div className={"searchBox"}>
                    <form action="/action_page.php" onSubmit={(event) => this.search(event)}>
                        <input type="text" autoComplete="off" placeholder="Search.." name="search" value={this.props.searchValue} onChange={(event) => this.editSearch(event)}/>

                        <ul style={{"display":this.props.searchValue.length > 0 ? "block" : "none"}} className={"searchList"}>
                            {searchList}
                        </ul>
                        <p>Connections: </p>
                        <input type="number" autoComplete="off" placeholder="Number of Connections" name="search"
                               value={this.props.numConnections} onChange={(event) => this.editNumConnections(event)} min="1"/>
                    </form>

                    <Form className={"checkBox"}>
                        <Form.Group controlId="showNodesSwitch">
                            <Form.Check type="switch" checked={this.props.showEdges} onChange={this.showEdges} label={"Show pointer labels"} />
                        </Form.Group>
                    </Form>

                    <Form className={"checkBox"}>
                        <Form.Group controlId="showEdgesSwitch">
                            <Form.Check type="switch" checked={this.props.showNodes} onChange={this.showNodes} label={"Show node labels"} />
                        </Form.Group>
                    </Form>

                    <label className={"label"}>Node Font Size: </label>
                    <select value={this.props.currentFontSize} className={"select"} onChange={(event) => this.changeFontSize(event)}>
                        {options}
                    </select>
                </div>

        );
    }
};

const mapStateToProps = state => {
    return {
        nodesVis: state.nodes.nodesVis,
        searchedNodesVis: state.nodes.searchedNodesVis,
        searchedEdgesVis: state.nodes.searchedEdgesVis,
        searchValue: state.nodes.searchValue,
        numConnections: state.nodes.numConnections,
        searchAmount: state.nodes.searchAmount,
        showNodes: state.nodes.showNodes,
        showEdges: state.nodes.showEdges,
        currentFontSize: state.nodes.currentFontSize,
        fontOptions: state.nodes.fontOptions
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onEditSearch: (searchValue) => dispatch (actions.editSearch(searchValue)),
        //onSearch: (searchTerm, numConnections) => dispatch( actions.search (searchTerm, numConnections)),
        onD3Update: (links, nodes) => dispatch( actions.d3Update(links, nodes)),
        onEditNumConnections: (links, nodes) => dispatch( actions.editNumConnections(links, nodes)),
        onSearchVis: (searchTerm, numConnections) => dispatch( actions.searchVis(searchTerm, numConnections)),
        onClearVis: () => dispatch( actions.clearVis()),
        onShowNodes: (showNodes) => dispatch(actions.showNodes(showNodes)),
        onShowEdges: (showEdges) => dispatch(actions.showEdges(showEdges)),
        onChangeFontSize: (option) => dispatch(actions.changeFontSize(option))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Search);