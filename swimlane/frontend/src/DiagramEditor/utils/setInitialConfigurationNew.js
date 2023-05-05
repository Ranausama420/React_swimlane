import {
  mxGraph,
  mxRubberband,
  mxKeyHandler,
  mxClient,
  mxUtils,
  mxEvent,
  mxEdgeHandler
} from "mxgraph-js";
import initToolbar from "./initToolbar";

export default function setInitialConfiguration(graph, toolbarRef) {
  if (!mxClient.isBrowserSupported()) {
    // Displays an error message if the browser is not supported.
    mxUtils.error("Browser is not supported!", 200, false);
  } else {
    initToolbar(graph, toolbarRef.current);

    // Enables rubberband selection
    new mxRubberband(graph);

    // Gets the default parent for inserting new cells. This is normally the first
    // child of the root (ie. layer 0).
    var parent = graph.getDefaultParent();

    // Enables tooltips, new connections and panning

    graph.setPanning(true);
    graph.setTooltips(true);
    graph.setConnectable(true);
    graph.setEnabled(true);
    graph.setEdgeLabelsMovable(false);
    graph.setVertexLabelsMovable(false);
    graph.setGridEnabled(true);
    graph.setAllowDanglingEdges(false);

    mxEdgeHandler.prototype.addEnabled = true;

    graph.getModel().beginUpdate();
    try {
      //mxGrapg component
      var doc = mxUtils.createXmlDocument();
      var node = doc.createElement("Node");
      node.setAttribute("ComponentID", "[P01]");
      var v6 = graph.insertVertex(parent, null, "shape6", 0, 30, 710, 10);
      var vx = graph.insertVertex(
        v6,
        null,
        node,
        90,
        40,
        150,
        30,
        "shape=ellipse;fillColor=yellow"
      );

      var v5 = graph.insertVertex(parent, null, "shape5", 0, 100, 710, 10);
      var v1 = graph.insertVertex(
        v5,
        null,
        "shape1",
        60,
        20,
        80,
        30,
        "rounded=1;strokeColor=red;fillColor=orange"
      );
      var v4 = graph.insertVertex(parent, null, "shape4", 0, 180, 710, 0);

      var v2 = graph.insertVertex(v5, null, "shape2", 300, 49, 80, 30);
      var v3 = graph.insertVertex(v4, null, "shape3", 620, 80, 80, 30);

      var e1 = graph.insertEdge(
        parent,
        null,
        "",
        v1,
        v2,
        "strokeWidth=2;endArrow=block;endSize=2;endFill=1;strokeColor=blue;rounded=1;"
      );
      var e2 = graph.insertEdge(parent, null, "Edge 2", v2, v3);
      var e3 = graph.insertEdge(parent, null, "Edge 3", v1, v3);

      //data
    } finally {
      // Updates the display
      graph.getModel().endUpdate();
    }

    // Enables rubberband (marquee) selection and a handler for basic keystrokes
    var rubberband = new mxRubberband(graph);
    var keyHandler = new mxKeyHandler(graph);
  }
}
