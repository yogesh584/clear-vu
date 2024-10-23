import React from 'react';
import Chart from 'react-apexcharts';
import barConfig from "./bar.config"


const serise = [
        {
            "name": "Column",
            "data": [
                {
                    "x": "Top flat sheets",
                    "y": 10
                },
                {
                    "x": "Bottom fitted sheet",
                    "y": 20
                },
                {
                    "x": "Pillow case",
                    "y": 30
                },
                {
                    "x": "Bath Blanket",
                    "y": 40
                },
                {
                    "x": "Underpad",
                    "y": "30"
                },
                {
                    "x": "Thermal blanket",
                    "y": "70"
                }
            ],
            "group": "apexcharts-axis-0",
            "zIndex": 0
        },
        {
            "name": "series-2",
            "group": "apexcharts-axis-0",
            "data": [
                {
                    "x": "Top flat sheets",
                    "y": "20"
                },
                {
                    "x": "Bottom fitted sheet",
                    "y": "30"
                },
                {
                    "x": "Pillow case",
                    "y": "50"
                },
                {
                    "x": "Bath Blanket",
                    "y": "40"
                },
                {
                    "x": "Underpad",
                    "y": 10
                },
                {
                    "x": "Thermal blanket",
                    "y": "18"
                }
            ],
            "zIndex": 1
        }
    ]
const Bar = () => {
    return (
        <Chart options={barConfig} series={serise} type="bar" height={350}/>
    )
}

export default Bar;