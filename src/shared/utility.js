import * as d3 from "d3";

export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};

export const d3Create = (nodesD3, linksD3) => {
    let CANVAS_WIDTH = 1000,
        CANVAS_HEIGHT = 800,
        FORCE_RADIUS = 80,
        FORCE_STRENGTH = 0.2,
        NODE_RADIUS = 5,
//        NODE_OFFSET_FROM_EDGE = 20, // offset from edge of SVG - used to prevent nodes from leaving the viewable space.  currently unused (see tickActions() function below)
//        EDGE_STROKE_WIDTH = 0.5,
//        ARROWHEAD_SIZE = 30,
        NODE_LABEL_TEXT_OFFSET_X = 8,
        NODE_LABEL_TEXT_OFFSET_Y = "0.31em";

    //remove all inner nodes as graph updates
    const myNode = document.getElementById("graph");
    myNode.innerHTML = '';

    let vis = d3.select("#graph")
        .append("svg");

    vis.attr("width", CANVAS_WIDTH)
        .attr("height", CANVAS_HEIGHT);
    //.attr("viewbox", "0 0 100 100");

    // Createathon Team

    // Firm Stuff Sample
    let links = linksD3;

    let nodes = nodesD3;

    // This code sets up the force simulation.
    let collide = d3.forceCollide().radius(FORCE_RADIUS).strength(FORCE_STRENGTH);
    let linkforce = d3.forceLink(links).id(function (d) {
        return d.id;
    }).distance(0);

    let simulation = d3.forceSimulation().nodes(nodes);
    simulation
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2))
        .force("collision", collide)
        .force("links", linkforce);

    let defs = vis.append("defs");

/*    let marker = defs.append("marker")
        .attr("id", "arrowhead")
        .attr("viewBox", "0 -" + ARROWHEAD_SIZE / 4 + " " + ARROWHEAD_SIZE / 2 + " " + ARROWHEAD_SIZE / 2)
        .attr("refX", NODE_RADIUS + ARROWHEAD_SIZE / 2)
        .attr("refY", -0.5)
        .attr("markerWidth", ARROWHEAD_SIZE)
        .attr("markerHeight", ARROWHEAD_SIZE)
        .attr("orient", "auto")
        .append("path")
        .attr("fill", "#0082d1")
        .attr("d", "M0 -" + ARROWHEAD_SIZE / 4 + " L" + ARROWHEAD_SIZE / 2 + " 0 L0 " + ARROWHEAD_SIZE / 4 + " L" + ARROWHEAD_SIZE / 2.5 + " 0 Z");*/

    // This code puts the images in the circles.  Currently unused.
    let pattern = defs.selectAll("pattern")
        .data(nodes)
        .enter().append("pattern")
        .attr("id", function (d) {
            return d.name;
        })
        .attr("patternUnits", "userSpaceOnUse")
        .attr("height", function (d) {
            return 2 * rad(d);
        })
        .attr("width", function (d) {
            return 2 * rad(d);
        });

/*    let image = pattern.append("image")
        .attr("height", function (d) {
            return 2 * rad(d);
        })
        .attr("width", function (d) {
            return 2 * rad(d);
        })
        .attr("href", function (d) {
            return d.url;
        });*/

    // This code creates the lines.
    let link = vis.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(links)
        .join("g");

/*    let line = link.append("line")
        .attr("stroke-width", EDGE_STROKE_WIDTH)
        .attr("marker-end", "url(#arrowhead)");*/

    // This code creates the circles.
    let node = vis.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(nodes)
        .join("g");

    node.append("circle")
        .attr('class', function (d) {
            return d.type;
        })
        .attr("r", function (d) {
            return rad(d);
        })
        .attr("onclick", function (d) {
            return "getNodeDetails('" + d.name + "')";
        });

    // This code creates the labels on the circles.
    node.append("text")
        .attr("x", NODE_LABEL_TEXT_OFFSET_X)
        .attr("y", NODE_LABEL_TEXT_OFFSET_Y)
        .attr("onclick", function (d) {
            return "getNodeDetails('" + d.name + "')";
        })
        .text(d => d.name)
        .clone(true).lower()
        .attr("class", "shadow")
        .attr("onclick", function (d) {
            return "getNodeDetails('" + d.name + "')";
        });

    // This code animates the simulation.
    function tickActions() {
        node
        //.attr("cx", function(d) { return d.x = Math.max(rad(d) + NODE_OFFSET_FROM_EDGE, Math.min(w - rad(d) - NODE_OFFSET_FROM_EDGE, d.x)); })
        //.attr("cy", function(d) { return d.y = Math.max(rad(d) + NODE_OFFSET_FROM_EDGE, Math.min(h - rad(d) - NODE_OFFSET_FROM_EDGE, d.y)); });
            .attr("transform", d => `translate(${d.x}, ${d.y})`);
        pattern
            .attr("x", function (d) {
                return d.x - rad(d);
            })
            .attr("y", function (d) {
                return d.y - rad(d);
            });

        // need to write a new link animation function
        link.selectAll("line")
            .attr("x1", function (d) {
                return d.source.x;
            })
            .attr("y1", function (d) {
                return d.source.y;
            })
            .attr("x2", function (d) {
                return d.target.x;
            })
            .attr("y2", function (d) {
                return d.target.y;
            });
    }

    simulation.on("tick", tickActions);

    // Misc functions
    function rad(d) {
        return NODE_RADIUS;
        /* d.type == "person" ? rf : rh; */
    }

/*    function getNodeDetails(arg) {
        console.log(arg);
        alert("That's " + arg + ".");
    }

    function doMyThing(arg) {
        console.log(arg);
    }*/
};