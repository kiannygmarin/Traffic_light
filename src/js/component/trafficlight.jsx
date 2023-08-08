import React, { useState, useEffect } from "react";


const TrafficLight = () => {
    const [lightRed, setLightRed] = useState("")
    const [lightYellow, setLightYellow] = useState("")
    const [lightGreen, setLightGreen] = useState("")
    const onLight = (color) => {

        if (color === "red") {
            setLightRed("light-on")
            setLightYellow("")
            setLightGreen("")

        } else if (color === "yellow") {
            setLightYellow("light-on")
            setLightRed("")
            setLightGreen("")
        } else if (color === "green") {
            setLightGreen("light-on")
            setLightRed("")
            setLightYellow("")
        }
    }
    return (
        <>
            <main>
                <div>
                    <div className={`bg-red ${lightRed}`}
                        onClick={() => onLight("red")}
                    ></div>
                    <div className={`bg-yellow ${lightYellow}`}
                        onClick={() => onLight("yellow")}
                    ></div>
                    <div className={`bg-green ${lightGreen}`}
                        onClick={() => onLight("green")}
                    ></div>
                </div>
            </main>
        </>
    )

}
export default TrafficLight