import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <h2
          style={{
            color: "#FF9900",
            marginTop: "20px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FormattedMessage id="orderhistory" />
        </h2>
        {orderHistory.length > 0 ? (
          <div>
            {orderHistory.map((order, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "15px",
                  padding: "5px",
                  border: "1px solid lightgrey",
                  borderRadius: "5px",
                }}
              >
                {}

                <p>
                  <b>
                    {" "}
                    <FormattedMessage id="ordernumber" />:
                  </b>{" "}
                  {order.id}
                </p>
                <p>
                  <b>
                    {" "}
                    <FormattedMessage id="orderdate" />:{" "}
                  </b>
                  {new Date(order.created_at).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>
            <FormattedMessage id="orderhistoryempy" />
          </p>
        )}
      </div>
    </div>
  );
}
