import React, { useState } from "react";
import './Calc.css'
import { getActiveElement } from "@testing-library/user-event/dist/utils";
export default function Cals()
{
    let [val , setVal] = useState("");

    return (
        <>
            <div id="calculator">
                <input type="text" id="display" value={val}/>
                <br />
                <button id="ac" class="operator" onClick={() => 
                {
                    setVal("");
                }}>AC</button>
                <button id="de" class="operator" value={""} onClick={(e) =>
                {
                    // val = e.target.value;
                    setVal(val.slice(0,-1));
                }}>DE</button>
                <button id="." class="operator" value={"."} onClick={(e) =>
                {
                    // val = e.target.value;
                    setVal(val+e.target.value);
                }}>.</button>
                <button id="/" class="operator" value={"/"} onClick={(e) =>
                {
                    // val = e.target.value;
                    setVal(val+e.target.value);
                }}>/</button>

                <br />
                <button id="7" value={7} onClick={(e) =>
                {
                    // val = e.target.value;
                    setVal(val+e.target.value);
                }}>7</button>
                <button id="8" value={8} onClick={(e) =>
                {
                    setVal(val+e.target.value);
                }}>8</button>
                <button id="9" value={9} onClick={(e) =>
                {
                    setVal(val+e.target.value);
                }}>9</button>
                <button id="*" class="operator" value={"*"} onClick={(e) =>
                {
                    // val = e.target.value;
                    setVal(val+e.target.value);
                }}>*</button>

                <br />
                <button id="4" value={4} onClick={(e) =>
                {
                    setVal(val+e.target.value);
                }}>4</button>
                <button id="5" value={5} onClick={(e) =>
                {
                    setVal(val+e.target.value);
                }}>5</button>
                <button id="6" value={6} onClick={(e) =>
                {
                    setVal(val+e.target.value);
                }}>6</button>
                <button id="-" class="operator" value={"-"} onClick={(e) =>
                {
                    // val = e.target.value;
                    setVal(val+e.target.value);
                }}>-</button>

                <br />
                <button id="1" value={1} onClick={(e) =>
                {
                    setVal(val+e.target.value);
                }}>1</button>
                <button id="2" value={2} onClick={(e) =>
                {
                    setVal(val+e.target.value);
                }}>2</button>
                <button id="3" value={3} onClick={(e) =>
                {
                    setVal(val+e.target.value);
                }}>3</button>
                <button id="+" class="operator" value={"+"} onClick={(e) =>
                {
                    // val = e.target.value;
                    setVal(val+e.target.value);
                }}>+</button>

                <br />
                <button id="00" value={0} onClick={(e) =>
                {
                    setVal(val+e.target.value);
                }}>00</button>
                <button id="0" value={0} onClick={(e) =>
                {
                    setVal(val+e.target.value);
                }}>0</button>
                <button id="=" class="equal operator" onClick={() => 
                {
                    setVal(eval(val));
                }}>=</button>
                <br />
            </div>
        </>
    )
}