import { useEffect, useState } from "react";


export default function RandomColor() {

    const [color, setColor] = useState("#000000");
    const [typeOfColor, setTypeOfColor] = useState("hex");

    function randomColorUtility(lenght) {
        return Math.floor(Math.random() * lenght);
    }

    function handleCreateHexRandomColor() {
        const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }

        setColor(hexColor);

    };

    function handleCreateRgbRandomColor() {
        const r = randomColorUtility(255);
        const g = randomColorUtility(255);
        const b = randomColorUtility(255);

        setColor(`rgb(${r}, ${g}, ${b})`);
    };

    useEffect(()=>{
        if (typeOfColor === "hex") handleCreateHexRandomColor();
        else handleCreateRgbRandomColor();
    }, [typeOfColor]);

    return (
        <div 
            style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: color,
            }}>
            <button onClick={()=> setTypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={()=> setTypeOfColor('rgb')}>Create RGB Color</button>
            <button onClick={typeOfColor === 'hex' 
                ? handleCreateHexRandomColor 
                : handleCreateRgbRandomColor}
            >
                Generate Random Color
            </button>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
                fontSize: "60px",
                marginTop: "50px",
                flexDirection: "column",
                gap: "10px"
            }}>
                <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
                <h1>{color}</h1>
            </div>
        </div>
    );

}