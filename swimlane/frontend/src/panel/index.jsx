
import './panel.css';
import {useCallback} from "react";


import { useEffect, useState } from "react";

const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const setFromEvent = (e) => setPosition({ x: e.clientX, y: e.clientY });
        window.addEventListener("mousemove", setFromEvent);

        return () => {
            window.removeEventListener("mousemove", setFromEvent);
        };
    }, []);

    return position;
};

const Custompanel =({onAdd}) => {
    const position = useMousePosition();
    return (
        <div className="panel">
            <button onClick={onAdd}>add node {position.x} {position.y}</button>

        </div>
    );
}
export default Custompanel;
