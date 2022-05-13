import React, { useState, useEffect } from 'react';

// API
import { getCoin } from '../services/api';

const Landing = () => {

    const [coins, setCoins] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            console.log(data);
            setCoins(data);
        }

        fetchAPI()
    }, [])

    return (
        <div>
            Landing
        </div>
    );
};

export default Landing;