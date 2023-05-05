import { memo, type FC, type CSSProperties } from 'react';
import { Handle, Position, type NodeProps, NodeResizer } from 'reactflow';
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Theme } from '@mui/material/styles';

const sourceHandleStyleA: CSSProperties = { left: 50 };
const sourceHandleStyleB: CSSProperties = {
  right: 50,
  left: 'auto',
};
const DecisionTree: FC<NodeProps> = ({ data,xPos, yPos ,isConnectable }) => {

    return (
        <>

            <Handle
                type="target"
                position={Position.Bottom}
                style={{ background: '#555' }}
                onConnect={(params) => console.log('handle onConnect', params)}
                isConnectable={isConnectable}
            />
            <Box sx={{}}>
               {/*<span >{data.label}</span>*/}
               <div className={"trapezium"} >{data.label}</div>
            </Box>

        </>
    );
};
export default memo(DecisionTree);

