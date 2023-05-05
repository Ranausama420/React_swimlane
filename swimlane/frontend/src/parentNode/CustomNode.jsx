import { Handle, Position, useStore } from 'reactflow';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const connectionNodeIdSelector = (state) => state.connectionNodeId;

export default function CustomParentNode({ id, isConnectable }) {
    // const connectionNodeId = useStore(connectionNodeIdSelector);
    // const isTarget = connectionNodeId && connectionNodeId !== id;
    //
    // const targetHandleStyle = { zIndex: isTarget ? 3 : 1 };
    const label = 'Drag to connect';

    return (
        <div className="customNode">
            <div style={{textAlign:'center'}}><span className={"parentTop"}><MailOutlineIcon/></span></div>
            <div
                className="customNodeBody"
                style={{ backgroundColor:'#ccd9f6'}}
                // style={{
                //     borderStyle: isTarget ? 'dashed' : 'solid',
                //     backgroundColor: isTarget ? '#ffcce3' : '#ccd9f6',
                // }}
            >
                <Handle
                    className="targetHandle"
                    style={{ zIndex: 2 }}
                    position={Position.Right}
                    type="source"
                    isConnectable={isConnectable}
                />
                <Handle
                    className="targetHandle"
                    // style={targetHandleStyle}
                    position={Position.Left}
                    type="target"
                    isConnectable={isConnectable}
                />
                {label}
            </div>
        </div>
    );
}
