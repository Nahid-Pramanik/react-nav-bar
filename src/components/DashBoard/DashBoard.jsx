import { useEffect, useState } from "react";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";


const DashBoard = () => {
    const [students, setStudents] = useState([]);

    useEffect( () => {
        fetch('chart.json')
        .then(res => res.json())
        .then(data => setStudents(data))
    },[]);

    return (
        <div>
            <LineChart 
            width={300}
            height={200}
            data={students}
            >
                <Line dataKey="physics"></Line>
                <Line dataKey="math" stroke="#82ca9d"></Line>
                <Line dataKey="english" stroke="black"></Line>
                <XAxis dataKey="id"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
            </LineChart>
        </div>
    );
};

export default DashBoard;