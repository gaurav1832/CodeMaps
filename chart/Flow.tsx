import { useCallback } from "react";
import ReactFlow, {
  Node,
  addEdge,
  Background,
  Edge,
  Connection,
  useNodesState,
  useEdgesState
} from "reactflow";

import CustomNode from "./CustomNode";

import "reactflow/dist/style.css";

const initialNodes: Node[] = [
  {
    id: "1",
    type: "input",
    data: { label: "Arrays{1-D & 2-D}" },
    position: { x: 10, y: 10 }
  },
  { id: "2", data: { label: "Linked List" }, position: { x: 100, y: 80 } },
  { id: "3", data: { label: "Recursion" }, position: { x: 150, y: 160 } },
  {
    id: "4",
    data: { label: "Backtracking" },
    position: { x: 200, y: 240 }
  },
  {
    id: "5",
    type: "custom",
    data: { label: "Dynamic Programming" },
    position: { x: 250, y: 1 }
  },
  {
    id: "6",
    type: "custom",
    data: { label: "Tree" },
    position: { x: 400, y: 80 }
  },
  {
    id: "7",
    type: "custom",
    data: { label: "BST" },
    position: { x: 450, y: 160 }
  },
  {
    id: "8",
    type: "custom",
    data: { label: "Graph" },
    position: { x: 500, y: 240 }
  },
  {
    id: "9",
    type: "custom",
    data: { label: "Trie" },
    position: { x: 550, y: 160 }
  },
  {
    id: "10",
    type: "custom",
    data: { label: "Segment Tree" },
    position: { x: 600, y: 240 }
  }

];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "2", target: "3", animated: true },
  { id: "e1-4", source: "3", target: "4", animated: true },
  { id: "e1-5", source: "4", target: "5", animated: true },
  { id: "e1-6", source: "5", target: "6", animated: true },
  { id: "e1-7", source: "6", target: "7", animated: true },
  { id: "e1-8", source: "7", target: "8", animated: true },
  { id: "e1-9", source: "9", target: "8", animated: true },
  { id: "e1-10", source: "9", target: "10", animated: true }




];

const nodeTypes = {
  custom: CustomNode
};

const BasicFlow = () => {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
    >
      <Background />
    </ReactFlow>
  );
};

export default BasicFlow;
