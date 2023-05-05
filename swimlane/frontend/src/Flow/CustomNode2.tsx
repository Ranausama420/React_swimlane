import { memo, type FC, type CSSProperties } from 'react';
import { Handle, Position, type NodeProps, NodeResizer } from 'reactflow';

const sourceHandleStyleA: CSSProperties = { left: 50 };
const sourceHandleStyleB: CSSProperties = {
  right: 50,
  left: 'auto',
};
const CustomNode2: FC<NodeProps> = ({ data,xPos, yPos ,isConnectable }) => {
    return (
        <>
            <NodeResizer />
            <Handle
                type="target"
                position={Position.Left}
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
            />
            <div>
                Custom Color Picker Node: <strong>{data.color}</strong>
            </div>
            <input className="nodrag" type="color" onChange={data.onChange} defaultValue={data.color} />
            <Handle
                type="source"
                position={Position.Right}
                id="a"
                style={{ top: 10, background: '#555' }}
                isConnectable={isConnectable}
            />
            <Handle
                type="source"
                position={Position.Right}
                id="b"
                style={{ bottom: 10, top: 'auto', background: '#555' }}
                isConnectable={isConnectable}
            />
        </>
    );
};
export default memo(CustomNode2);

