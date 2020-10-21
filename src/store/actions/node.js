import * as actionTypes from './actionTypes';

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