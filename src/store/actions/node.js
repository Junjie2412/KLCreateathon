import * as actionTypes from './actionTypes';
import axios from 'axios';
import * as links from '../../shared/links';

export const search = (searchTerm, numConnections) => {
    return {
        type: actionTypes.SEARCH,
        searchTerm: searchTerm,
        numConnections: numConnections
    }
};

export const editSearch = (searchTerm) => {
    return {
        type: actionTypes.EDIT_SEARCH,
        searchTerm: searchTerm
    }
};

export const d3Update = (links, nodes) => {
    return {
        type: actionTypes.D3_UPDATE,
        nodes: nodes,
        links: links
    }
};

export const editNumConnections = (numConnections) => {
    return {
        type: actionTypes.EDIT_NUM_CONNECTIONS,
        numConnections: numConnections
    }
};

export const searchVis = (searchTerm, numConnections) => {
    return {
        type: actionTypes.SEARCH_VIS,
        searchTerm: searchTerm,
        numConnections: numConnections
    }
};

export const clearVis = () => {
    return {
        type: actionTypes.CLEAR_VIS,
    }
};

export const showNodes = (showNodes) => {
    return {
        type: actionTypes.SHOW_NODES,
        showNodes: showNodes
    }
};

export const showEdges = (showEdges) => {
    return {
        type: actionTypes.SHOW_EDGES,
        showEdges: showEdges
    }
};

export const changeFontSize = (fontSize) => {
    return {
        type: actionTypes.CHANGE_FONT_SIZE,
        fontSize: fontSize
    }
};

export const fetchDataStart = () => {
    return {
        type: actionTypes.FETCH_DATA_START
    }
};

export const fetchDataSuccess = (nodes, edges) => {
    return {
        type: actionTypes.FETCH_DATA_SUCCESS,
        nodes: nodes,
        edges: edges
    }
};

export const fetchData = () => {
    return dispatch => {
        dispatch(fetchDataStart());
        axios.get(links.FETCH_DATA_LOCAL)
            .then(response => {
                const nodes = [];
                const edges = [];
                for (let node in response.data.nodes) {
                    nodes.push( {
                        ...response.data.nodes[node]
                    })
                }
                for (let edge in response.data.edges) {
                    edges.push( {
                        ...response.data.edges[edge]
                    })
                }
                dispatch(fetchDataSuccess(nodes, edges));
            })
    }
};