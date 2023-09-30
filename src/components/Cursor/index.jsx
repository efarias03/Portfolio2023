import { useState } from "react";
import "./style.css"


export default function Cursor() {
    const isMobile = window.innerWidth <= 768;

    const [coords, setCoords] = useState({
        x: 0,
        y: 0
    });

    const [cursorActive, setCursorActive] = useState(false);
    const cursor = document.getElementById("cursor");


    function MoveCursor() {
        window.addEventListener("mousemove", (e) => {
            setCoords({
                x: e.clientX,
                y: e.clientY
            })
        })
    };

    function ShowCursor() {
        window.addEventListener("mouseover", (e) => {
            setCursorActive(true);
        });
        window.addEventListener("mouseout", (e) => {
            setCursorActive(false);
        });
    };
    
    ShowCursor();
    MoveCursor();

    return (
        <div id="cursor" className={cursorActive && !isMobile ? "cursor-visible" : "cursor-hidden"} style={{ left: `${coords.x}px`, top: `${coords.y}px`}}></div>
    )
}