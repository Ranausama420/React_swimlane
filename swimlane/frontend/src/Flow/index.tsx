import React,{ useCallback } from 'react';
import ReactFlow, {
  addEdge,
  useNodesState,
  useEdgesState,
  type Connection,
  type Edge,
  type Node,
  Background,
  BackgroundVariant,
  Controls,
  MarkerType,
    Panel,
  useOnSelectionChange,
  ReactFlowProvider,
} from 'reactflow';

import CustomNode from './CustomNode';
import CustomNode2 from './CustomNode2';
import CustomNode3 from './CustomNode3';
import DecisionTree from './decisionTree';
import Oval from './oval';
import 'reactflow/dist/style.css';
import '../parentNode/style.css';
import './Flow.css';
import CustomParentNode from "../parentNode/CustomNode";
import Custompanel from "../panel";
interface Flowprop {
  data: string;

}


function Flow(props: Flowprop) {
  const nodeTypes = {
    custom: CustomNode,
    custom1: CustomNode2,
    sum:CustomNode3,
    decisionTree:DecisionTree,
    oval:Oval,
    parent: CustomParentNode,
  };


  const defaultEdgeOptions = {
    style: { strokeWidth: 3, stroke: 'black' },
    markerEnd: {
      type: MarkerType.Arrow,
      color: 'black',
    },
  };
  const connectionLineStyle = {
    strokeWidth: 3,
    stroke: 'black',
  };
  const array = props.data.split('-');
  // for(){}
  const initialNodes: Node[] = [
    {
      id: 'x',
      data: { label: 'Group A',colorname:'#2B98E3'},
      position: { x: 0, y: 0 },
      className: 'light',
      style: { backgroundColor: 'rgba(255, 0, 0, 0.2)', width: 680, height: 100,border: '1px solid grey',},
      type: 'sum',
      draggable:false,
    },
    {
      id: 'x1',
      data: { label: 'Group B',colorname:'#EDB000'},
      position: { x: 0, y: 100 },
      className: 'light',
      style: { backgroundColor: 'rgba(255, 0.3, 0, 0.1)', width: 680, height: 100,border: '1px solid grey' },
      type: 'sum',
      draggable:false,
    },
    {
      id: 'x3',
      data: { label: 'Group c',colorname:'#15CABD'},
      position: { x: 0, y: 200 },
      className: 'light',
      style: { backgroundColor: 'rgba(190, 0.9, 0.6, 0.4)', width: 680, height: 100,border: '1px solid grey' },
      type: 'sum',
      draggable:false,
    },
    {
      id: '2a',
      data: { label: 'Node A.1' },
      position: {x: 250, y: 5 },
      parentNode: 'x',
      expandParent:true,
      extent:'parent'
    },
    {
      id: '3a',
      data: { label: 'Node A.2' },
      position: {x: 50, y: 5 },
      type:'decisionTree',
      parentNode: 'x',
      expandParent:true,
      extent:'parent',
    },
    // {
    //   id: '4a',
    //   data: { label: 'Node A.3' },
    //   position: {x: 450, y: 5 },
    //   type:'oval',
    //   parentNode: 'x',
    //   expandParent:true,
    //   extent:'parent',
    // },
    {
      id: '5a',
      data: { label: 'Node A.4' },
      position: {x: 450, y: 5 },
      type:'parent',
      parentNode: 'x',
      expandParent:true,
      extent:'parent',
    },
    {
      id: '2b',
      data: { label: 'Node b.2' },
      position: {x: 100, y: 20 },
      parentNode: 'x1',
      expandParent:true,
      extent:'parent',

    },
    {
      id: '3b',
      data: { label: 'Node b.3' },
      position: {x: 400, y: 20 },
      parentNode: 'x1',
      expandParent:true,
      extent:'parent'
    },
    {
      id: '1c',
      data: { label: 'Node c.2' },
      position: {x: 240, y: 30 },
      parentNode: 'x3',
      expandParent:true,
      extent:'parent'
    },

  ];

  const initialEdges: Edge[] = [
    { id: 'e1', source: '2a', target: '2b', animated: true },
    { id: 'e2', source: '2a', target: '3b', animated: true },
    { id: 'e3', source: '2a', target: '1c'},
    { id: 'e4', source: '3b', target: '1c'},
  ];

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  const getNodeId = () => `randomnode_${+new Date()}`;
  // const reactFlowInstance = useReactFlow();

  const onAdd = useCallback(() => {
    const newNode = {
      id: getNodeId(),
      data: { label: 'Added node' },
      position: {
        x:-80,
        y:0,
      },
      type:'parent',
    };
    // alert(reactFlowInstance.getNode(getNodeId()));
    setNodes((nds) => nds.concat(newNode));
  }, [setNodes]);
  function SelectionChangeLogger() {
    useOnSelectionChange({
      onChange: ({ nodes, edges }) => console.log('changed selection', nodes, edges),
    });

    return null;
  }

  SelectionChangeLogger();
  return (
    <div className="Flow">
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        nodeTypes={nodeTypes}
        defaultEdgeOptions={defaultEdgeOptions}
        connectionLineStyle={connectionLineStyle}
      >
        <Background  gap={10} variant={BackgroundVariant.Dots} />
        <Panel position="top-left" style={{marginTop:20,}}> <Custompanel onAdd={onAdd}/></Panel>


        <Controls/>

      </ReactFlow>

    </div>
  );
}




function FlowWithProvider(props: Flowprop) {
  return (
      <ReactFlowProvider>
        <Flow {...props} />
      </ReactFlowProvider>
  );
}

export default FlowWithProvider;