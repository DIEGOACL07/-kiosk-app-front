import { useContext } from "react";
import { QuioscoContext } from "../context/QuioscoProvider";

const UseQuiosco = () => {
    return (
        useContext(QuioscoContext)
    );
}

export default UseQuiosco;
