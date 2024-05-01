import { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect( () => {
        fetch('price.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    },[])
    return (
        <div>
            <h2 className="text-4xl bg-blue-500 mt-6 text-center font-bold p-4 ">Awesome Prices</h2>
            <div className="grid md:grid-cols-3 gap-4 mx-5">
                {
                    prices.map(price => <PriceCard 
                        key={price.id} 
                        priceObj={price}
                    ></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PriceList;