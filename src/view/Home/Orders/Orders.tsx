import React, { useEffect, useState } from "react";

export function Orders() {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    const fetchOrderHistory = async () => {
      try {
        const response = await fetch("http://localhost:3000/purchases");
        if (!response.ok) {
          throw new Error("Failed to fetch order history");
        }
        const data = await response.json();
        setOrderHistory(data);
      } catch (error) {
        console.error("Error fetching order history:", error);
      }
    };

    fetchOrderHistory();
  }, []);

  return (
    <div>
      <h2 style={{ marginLeft: "20px", color: "#FF9900", marginTop: "20px" }}>
        შეკვეთების ისტორია{" "}
      </h2>
      {orderHistory.length > 0 ? (
        <div>
          {orderHistory.map((order, index) => (
            <div key={index}>
              {}
              <p>შეკვეთის ნომერი {order.id}</p>
              <p>
                შეკვეთის თარიღი {new Date(order.created_at).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p>შეკვეთების ისტორია ცარიელია</p>
      )}
    </div>
  );
}
