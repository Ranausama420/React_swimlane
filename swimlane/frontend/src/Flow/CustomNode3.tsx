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
const CustomNode2: FC<NodeProps> = ({ data,xPos, yPos ,isConnectable }) => {
    const color=data.colorname
    return (
        <>
            {/*<div style={{transform: 'rotate(180deg)',writingMode:"vertical-lr",borderLeft:'1px solid',paddingTop:'15px'}}>*/}
            {/*<div >*/}

            {/*    <p >{data.tst}</p>*/}
            {/*        */}
            {/*</div>*/}
            <Box sx={{height:'100%', width:35,textAlign:'center',transform:'rotate(180deg)',writingMode:"vertical-lr", border:'0.2px solid grey'}}>
               <span style={{marginLeft:-35}}>{data.label}</span>
            </Box>

        </>
    );
};
export default memo(CustomNode2);

