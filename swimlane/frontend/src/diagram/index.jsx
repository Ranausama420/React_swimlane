import './diagram.css';
import * as React from "react";
import DiagramEditor from "../DiagramEditor/DiagramEditor";
import sampleJsonData from "../DiagramEditor/sampleJsonData.json";
function Diagram() {
//
//     return (
//         <div className="diagram">
// kjgtyfdddssssssssss
//         </div>
//
//     );

    const [data, setData] = React.useState(sampleJsonData);
    const onChange = evt => {
        console.log("on Change");
    };
    const onSelected = evt => {
        console.log("selected");
    };
    const onElementAdd = evt => {
        console.log("On element add");
    };
    const onDragEnd = evt => {
        console.log("On Drag end");
    };

    return (
        <div className="App">
            <div className="container">
                <DiagramEditor
                    data={data}
                    onChange={onChange}
                    onSelected={onSelected}
                    onElementAdd={onElementAdd}
                    onDragEnd={onDragEnd}
                />
            </div>
        </div>
    );
}

export default Diagram;
