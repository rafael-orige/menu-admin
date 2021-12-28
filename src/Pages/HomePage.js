import React, { useState, useEffect } from "react";
import "./index.css";

import api from "../services/api";

import UserMenu from "../Components/UserMenu";
import Header from "../Components/Header";
import Container from "../Components/Container";
import InfoCard from "../Components/InfoCard";
import { LineGraph, DoughnutGraph, BarGraph } from "../Components/Graphs";
import RecentProducts from "../Components/RecentProducts";

const HomePage = () => {
    const [menuActive, setMenuActive] = useState(false);

    const handleMenu = () => {
        setMenuActive(!menuActive);
    }


    const [newOrders, setNewOrders] = useState([]);
    const [monthlySales, setMonthlySales] = useState([]);
    const [browsersUsed, setBrowsersUsed] = useState([]);
    const [recentProducts, setRecentProducts] = useState([]);

    const getStats = async () => {
        const stats = await api.getStats();
        setMonthlySales(stats.json[0].monthlySales);
        setNewOrders(stats.json[1].newOrders);
        setBrowsersUsed(stats.json[2].browsers);
        setRecentProducts(stats.json[3].recentProducts);
    }

    useEffect(() => {
        getStats()
    }, []);


    return (
    <div id="flex-wrapper">
        <aside id="admin-menu">
            <UserMenu menuOpen={menuActive} handleCloseMenu={handleMenu} />
        </aside>
        <main id="main-content">
            <Header onClick={handleMenu} />
            <Container>
                <p className="area-title">Application / Dashboard</p>
                <div className="cards-area">
                    <InfoCard imageColor="#d41d60" cardTitle="Total Profit" cardText="1500k" theme="shopcart" />
                    <InfoCard imageColor="#00adbe" cardTitle="Likes" cardText="4231" theme="like" />
                    <InfoCard imageColor="#8f25ab" cardTitle="Sales" cardText="460" theme="stats" />
                    <InfoCard imageColor="#fa8d00" cardTitle="New Members" cardText="248" theme="members" />
                </div>
                <div className="charts-area">
                    <LineGraph data={newOrders} />
                    <BarGraph data={monthlySales} />
                    <RecentProducts recentProducts={recentProducts}/>
                    <DoughnutGraph data={browsersUsed} />
                </div>
                <div className="credits">
                    Created by Rafael Vargas<br/>
                    Design from unknown <span>(I found it on Google Images)</span>
                </div>
            </Container>
        </main>
    </div>
    );
}

export default HomePage;