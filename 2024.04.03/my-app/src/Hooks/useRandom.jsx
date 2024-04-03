import { useState } from "react";

const useRandom = () => {
    const [random, setRandom] = useState([Math.floor(Math.random() * 100)]);

    const generateRandom = () => {
        setRandom([...random, Math.floor(Math.random() * 100)]);
    }

    return [random, generateRandom];
}

export default useRandom;