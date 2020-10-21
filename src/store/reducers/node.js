import {nodesData, linksData, nodesDataVis, linksDataVis} from '../../shared/data';
import * as actionTypes from '../actions/actionTypes';
import {shuffleArray, updateObject, d3Create} from '../../shared/utility';

const initialState = {
    nodes: JSON.parse(JSON.stringify(nodesData)),
    links: JSON.parse(JSON.stringify(linksData)),
    searchedNodes: [],
    searchedLinks: [],
    searchValue: "",
    numConnections: 1,
    //nodesVis: JSON.parse(JSON.stringify(nodesDataVis)),
    //edgesVis: JSON.parse(JSON.stringify(linksDataVis)),
    nodesVis: [],
    edgesVis: [],
    searchedNodesVis: [],
    searchedEdgesVis: [],
    showNodes: true,
    showEdges: true,
    currentFontSize: "Large",
    fontOptions: ["Small", "Medium", "Large"],
    loading: false
};

const search = (state, action) => {

    let newSearchedNodes = [];
    let newSearchedLinks = [];
    let targets = [];

    let searchedNode = nodesData.find(node => node.name===action.searchTerm);

    if (searchedNode != null) {
        newSearchedNodes.push(JSON.parse(JSON.stringify(searchedNode)));
        targets.push(searchedNode.id);

        if (action.numConnections === "") {
            action.numConnections = 1;
        }

        for (let i = 0; i < action.numConnections || i < nodesData.length; i++) {
            for (let link of linksData){
                if (targets.includes(link.target) && !newSearchedLinks.includes(link)) {
                    newSearchedLinks.push(JSON.parse(JSON.stringify(link)));
                } else if (targets.includes(link.source) && !newSearchedLinks.includes(link)) {
                    newSearchedLinks.push(JSON.parse(JSON.stringify(link)));
                }
            }

            for (let link of newSearchedLinks) {
                if (!targets.includes(link.source)) {
                    targets.push(link.source);
                }
                if (!targets.includes(link.target)) {
                    targets.push(link.target);
                }
            }
            for (let node of nodesData){
                if (targets.includes(node.id) && !newSearchedNodes.find(n => n.id === node.id)) {
                    newSearchedNodes.push(JSON.parse(JSON.stringify(node)));
                }
            }
        }
    }

    shuffleArray(newSearchedNodes);
    shuffleArray(newSearchedLinks);

    return updateObject( state, {
        searchedNodes: newSearchedNodes,
        searchedLinks: newSearchedLinks,
        numConnections: action.numConnections
    })
};

const editSearch = (state, action) => {
    return updateObject( state, {
        searchValue: action.searchTerm
    })
};

const editNumConnections = (state, action) => {

    return updateObject( state, {
        numConnections: action.numConnections
    })
};

const
    d3Update = (state, action) => {
        d3Create(action.nodes, action.links);
        return updateObject( state, {
            nodes: JSON.parse(JSON.stringify(nodesData)),
            links: JSON.parse(JSON.stringify(linksData))
        })
    };

const searchVis = (state, action) => {

    let newSearchedNodesVis = [];
    let newSearchedEdgesVis = [];
    let targets = [];

    let searchedNodeVis = nodesDataVis.find(node => node.label===action.searchTerm);

    console.log(searchedNodeVis);

    if (searchedNodeVis != null) {
        newSearchedNodesVis.push(searchedNodeVis);
        targets.push(searchedNodeVis.id);

        if (action.numConnections === "" || action.numConnections < 1) {
            action.numConnections = 1;
        }
        let numLoops = action.numConnections < nodesDataVis.length ? action.numConnections : nodesDataVis.length;

        for (let i = 0; i < numLoops; i++) {
            for (let link of linksDataVis){
                if (!newSearchedEdgesVis.includes(link)) {
                    if (targets.includes(link.to)) {
                        newSearchedEdgesVis.push(link);
                    } else if (targets.includes(link.from)) {
                        newSearchedEdgesVis.push(link);
                    }
                }
            }

            for (let link of newSearchedEdgesVis) {
                if (!targets.includes(link.from)) {
                    targets.push(link.from);
                }
                if (!targets.includes(link.to)) {
                    targets.push(link.to);
                }
            }

            for (let node of nodesDataVis){
                if (targets.includes(node.id) && !newSearchedNodesVis.find(n => n.id === node.id)) {
                    newSearchedNodesVis.push(node);
                }
            }
            console.log(newSearchedNodesVis);
            console.log(newSearchedEdgesVis);
        }
    }

    return updateObject( state, {
        searchedNodesVis: newSearchedNodesVis,
        searchedEdgesVis: newSearchedEdgesVis,
        numConnections: action.numConnections
    })
};

const clearVis = (state, action) => {
    return updateObject( state, {
        searchedNodesVis: [],
        searchedEdgesVis: []
    })
};

const showNodes = (state, action) => {
    return updateObject( state, {
        showNodes: action.showNodes
    })
};

const showEdges = (state, action) => {
    return updateObject( state, {
        showEdges: action.showEdges
    })
};

const changeFontSize = (state, action) => {
    return updateObject( state, {
        currentFontSize: action.fontSize
    })
};

const fetchDataStart = (state, action) => {
    return updateObject(state, {loading: true})
};

const fetchDataSuccess = (state, action) => {
    return updateObject(state, {
        loading: false,
        nodesVis: action.nodes,
        edgesVis: action.edges
    })
};

const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case actionTypes.SEARCH: return search(state, action);
        case actionTypes.EDIT_SEARCH: return editSearch(state, action);
        case actionTypes.D3_UPDATE: return d3Update(state, action);
        case actionTypes.EDIT_NUM_CONNECTIONS: return editNumConnections(state, action);
        case actionTypes.SEARCH_VIS: return searchVis(state, action);
        case actionTypes.CLEAR_VIS: return clearVis(state, action);
        case actionTypes.SHOW_NODES: return showNodes(state, action);
        case actionTypes.SHOW_EDGES: return showEdges(state, action);
        case actionTypes.CHANGE_FONT_SIZE: return changeFontSize(state, action);
        case actionTypes.FETCH_DATA_START: return fetchDataStart(state, action);
        case actionTypes.FETCH_DATA_SUCCESS: return fetchDataSuccess(state, action);
        default:
            return state;
    }
};

export default reducer;