var width = 1280,
    height = 720;

var color = d3.scale.category10();

var force = d3.layout.force()
    .charge(-1500)
    .linkDistance(80)
    .size([width, height])

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)

svg.append("defs").selectAll("marker")
    .data(["EOJ","WEOJ"])
  .enter().append("marker")
    .attr("id", function(d) { return d; })
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 15)
    .attr("refY", -1.5)
    .attr("markerWidth", 5)
    .attr("markerHeight", 5)
    .attr("orient", "auto")
  .append("path")
    .attr("d", "M0,-5L10,0L0,5");

d3.json("brgrflow.json", function(error, graph) {
  force
      .nodes(graph.nodes)
      .links(graph.links)
      .start();

  graph.links.forEach(function (d) {
    d.group = Math.floor(Math.random() * 6)
  });

  var link = svg.selectAll(".link")
      .data(graph.links)
      .enter().append("line")
      .attr("class", "link")
      .style("stroke-width", "2px")
      .style("stroke", function(d) {

        if (d.type == "EOJ") {
          return "#ff7f0e";
        }
        else {
          return "#1f77b4";
        }

       })
      .attr("marker-end", function(d) { return "url(#" + d.type + ")"; });

  var node = svg.selectAll(".node")
      .data(graph.nodes)
      .enter().append("circle")
      .attr("class", "node")
      .attr("r", 8)
      .style("fill", "black")
      .call(force.drag);


  var label = svg.append("g")
      .selectAll(".node")
      .data(graph.nodes)
      .enter().append("text")
      .attr("class", "labels")
      .attr("class", "label")
      .attr("font-size", "10pt")
      .attr("font-family", "Courier, monospace")
      .attr("font-weight", "bold")
      .text(function(d) { return d.name; });

  node.append("title")
      .text(function(d) { return d.name; });

  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
    label.attr("x", function(d) { return d.x+8; })
        .attr("y", function(d) { return d.y+3; });
  });
});