import React from "react";
import "./index.css";

import { Line, Doughnut, Bar } from "react-chartjs-2";

const LineGraph = ({data}) => {
    return (
        <div className="graph-area orders">
            <div className="graph-area--title"><h1>New Orders</h1></div>
            <div className="graph">
                <Line
                    data={{
                        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                        datasets: [{
                            data: [data.monday, data.tuesday, data.wednesday, data.thursday, data.friday, data.saturday, data.sunday]
                        }]
                    }}
                    options={{
                        gridLines: "rgba(0, 0, 0, 0)",
                        borderColor: "#a35bd2",
                        pointBackgroundColor: "white",
                        maintainAspectRatio: false,
                        showLines: false,
                        tension: "0.5",
                        plugins: {
                            legend: false
                        },
                        scales: {
                            y: {
                                ticks: {
                                    display: false
                                },
                                grid:  {
                                    display: false,
                                    borderColor: "rgba(0, 0, 0, 0)"
                                },
                            },
                            x: {
                                ticks: {
                                    display: false
                                },
                                grid: {
                                    display: false,
                                    borderColor: "rgba(0, 0, 0, 0)"
                                }
                            }
                        }
                    }}
                />
            </div>
        </div>
    );
}

const DoughnutGraph = ({data}) => {
    return (
        <div className="graph-area browsers">
            <div className="graph-area--title"><h1>Browser Usage</h1></div>
            <div className="graph">
                <Doughnut
                    data={{
                        labels: ["Chrome", "Firefox", "Safari"],
                        datasets: [{
                            data: [data.chrome, data.firefox, data.safari]
                        }]
                    }}
                    options={{
                        gridLines: "rgba(0, 0, 0, 0)",
                        backgroundColor: [
                            "#00acc0",
                            "#d91a5f",
                            "#8f23ad"
                        ],
                        pointBackgroundColor: "white",
                        maintainAspectRatio: false,
                        showLines: false,
                        tension: "0.5",
                        plugins: {
                            legend: false
                        },
                        scales: {
                            y: {
                                ticks: {
                                    display: false
                                },
                                grid:  {
                                    display: false,
                                    borderColor: "rgba(0, 0, 0, 0)"
                                },
                            },
                            x: {
                                ticks: {
                                    display: false
                                },
                                grid: {
                                    display: false,
                                    borderColor: "rgba(0, 0, 0, 0)"
                                }
                            }
                        }
                    }}
                />
                <div className="doughnut-label">
                    <div className="chrome label-container">
                        <div className="label chrome">
                            <div></div><div></div>
                        </div>
                        <p>Chrome</p>
                    </div>
                    <div className="firefox label-container">
                        <div className="label firefox">
                        <div></div><div></div>
                        </div>
                        <p>Firefox</p>
                    </div>
                    <div className="safari label-container">
                        <div className="label safari">
                        <div></div><div></div>
                        </div>
                        <p>Safari</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const BarGraph = ({data}) => {

    return (
        <div className="graph-area sales">
            <div className="graph-area--title"><h1>Monthly Sales</h1></div>
            <div className="graph">
                <Bar
                    data={{
                        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        datasets: [{
                            data: [data.january, data.february, data.march, data.april, data.may, data.june, data.july, data.august, data.september, data.october, data.november, data.december]
                        }]
                    }}
                    options={{
                        gridLines: "rgba(0, 0, 0, 0)",
                        borderColor: "",
                        backgroundColor: "#ea1e63",
                        maintainAspectRatio: false,
                        showLines: false,
                        tension: "0.5",
                        plugins: {
                            legend: false
                        },
                        scales: {
                            y: {
                                ticks: {
                                    display: false,
                                },
                                grid:  {
                                    display: false,
                                    borderColor: "rgba(0, 0, 0, 0)"
                                },
                            },
                            x: {
                                ticks: {
                                    color: "white"
                                },
                                grid: {
                                    display: false,
                                    borderColor: "rgba(0, 0, 0, 0)"
                                }
                            }
                        }
                    }}
                />
            </div>
        </div>
    );
}

export { LineGraph, DoughnutGraph, BarGraph };