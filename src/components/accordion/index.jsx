
// single selection
// multiple selection

import { useState } from "react"
import data from "./data"
import './styles.css';

export default function Accordion() {

    const [selected, setSelected] = useState(null);
    const [enableMultiSelected, setEnableMultiSelected] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected? null : getCurrentId);
    }

    function handleMultiSelection(getCurrentId) {
        let cpyMultiple = [...multiple];
        const findIndexOfCurrentId = cpyMultiple.findIndex(id => id === getCurrentId);

        if (findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId);
        else cpyMultiple.splice(findIndexOfCurrentId, 1);

        setMultiple(cpyMultiple);
    }

    return (
        <div className="wrapper">
            <button onClick={()=> setEnableMultiSelected(!enableMultiSelected)}>
                {
                    enableMultiSelected 
                    ? "Disable Multi-Selection" 
                    : "Enable Multi-Selection"
                }
            </button>
            <div className="accordion">
                {data && data.length > 0 ? (
                    data.map((dataItem) => (
                        <div className="item">
                            <div 
                                onClick={
                                    enableMultiSelected 
                                        ? ()=> handleMultiSelection(dataItem.id) 
                                        : () => handleSingleSelection(dataItem.id)
                                } 
                                className="title">
                                <h3>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected === dataItem.id ||
                                multiple.indexOf(dataItem.id)!== -1? (
                                    <div className="content">
                                        {dataItem.answer}
                                    </div>
                                ) : null
                            }
                        </div>
                    )
                    )
                ) : (
                    <div>No data found!</div>
                )

                }
            </div>
        </div>
    )
}
