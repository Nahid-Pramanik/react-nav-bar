import axios from "axios";
import { useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const PhoneBar = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const loadedData = data.data.data;

                const phoneData = loadedData.map(phone => {
                    const price = parseInt(phone.slug.split("-")[1]);
                    const phoneInfo = {
                        name: phone.phone_name,
                        price: price
                    }
                    return phoneInfo;
                })

                setPhones(phoneData);
            });

    }, []);

    return (
        <div>
                <BarChart 
                width={350} 
                height={300} 
                data={phones}>
                    <Bar dataKey="price" fill="#8884d8"></Bar>
                    <XAxis dataKey="name"></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                </BarChart>
        </div>
    );
};

export default PhoneBar;