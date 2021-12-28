import React from "react";
import "./index.css";

const RecentProducts = ({recentProducts}) => {
    return (
        <div className="recent-products">
            <div className="section-title"><h1>Recent Products</h1></div>
            <div className="recent-products--content">
                <div className="container">
                    {recentProducts.map((product, index) =>(
                    <div className="product" key={index}>
                        <div className="product-image"><img src="no-photo.png" alt="" /></div>
                        <div className="product-info">
                            <div className="product-desc">
                                <h2>{product.product}</h2>
                                <p>{product.desc}</p>
                            </div>
                            <div className="product-settings">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RecentProducts;