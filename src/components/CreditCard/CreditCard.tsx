import { useState } from "react";
import Cards from "../../images/cards.png";

export function CreditCard() {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");
  const [cardholder, setCardholder] = useState<string>("");
  const [cardNumberError, setCardNumberError] = useState<string>("");
  const [cvcError, setCvcError] = useState<string>("");
  const [cardholderError, setCardholderError] = useState<string>("");

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = event.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(.{4})/g, "$1 ").trim();
    value = value.slice(0, 19);
    setCardNumber(value);
    if (value.replace(/\s/g, "").length < 16) {
      setCardNumberError("ბარათის ნომერი უნდა იყოს 16 ციფრიანი");
    } else {
      setCardNumberError("");
    }
  };

  const handleCvcChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    value = value.replace(/\D/g, "");
    value = value.slice(0, 3);
    setCvc(value);
    if (value.length < 3) {
      setCvcError("ბარათის CVC უნდა იყოს 3 ციფრიანი");
    } else {
      setCvcError("");
    }
  };

  const handleCardholderChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setCardholder(value);
    if (!value.trim()) {
      setCardholderError("გთხოვთ ჩაწერეთ ბარათის მფლობელის სახელი და გვარი");
    } else {
      setCardholderError("");
    }
  };
  return (
    <div>
      <div
        style={{
          margin: "auto",
          marginTop: "10px",
          marginBottom: "10px",
          width: "50%",
          borderRadius: "5px",
          border: "1px solid lightgrey",
        }}
      >
        <h1
          style={{
            maxWidth: "350px",
            margin: "auto",
            marginTop: "10px",
            marginBottom: "20px",
            color: "#FF9900",
          }}
        >
          გადახდის დეტალები
        </h1>
        <img style={{ width: "100%" }} src={Cards} alt="img" />
        <div style={{ display: "flex" }}>
          <div style={{ margin: "auto", display: "flex" }}>
            <div>
              <h4>VISA</h4>
              <p>Card Number * </p>
              <p>Cardholder * </p>
              <p>Expiry date *</p>
              <p>CVC *</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                margin: "auto",
              }}
            >
              <h5>*Mandatory fields</h5>
              <input
                type="text"
                id="cardNumber"
                value={cardNumber}
                onChange={handleCardNumberChange}
                maxLength={19}
                placeholder="XXXX XXXX XXXX XXXX"
              />
              {cardNumberError && (
                <div style={{ color: "red" }}>{cardNumberError}</div>
              )}
              <input
                type="text"
                id="cardholder"
                value={cardholder}
                onChange={handleCardholderChange}
                placeholder="სახელი გვარი"
              />
              {cardholderError && (
                <div style={{ color: "red" }}>{cardholderError}</div>
              )}
              <div>
                <div>
                  <select name=" month" id="month">
                    <option value="month">თვე</option>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                  <select name="year" id="year">
                    <option value="year">წელი</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                    <option value="2030">2030</option>
                    <option value="2031">2031</option>
                    <option value="2032">2032</option>
                    <option value="2033">2033</option>
                    <option value="2034">2034</option>
                    <option value="2035">2035</option>
                    <option value="2036">2036</option>
                    <option value="2037">2037</option>
                    <option value="2038">2038</option>
                    <option value="2039">2039</option>
                    <option value="2040">2040</option>
                  </select>
                </div>
              </div>
              <input
                type="text"
                id="cvc"
                value={cvc}
                onChange={handleCvcChange}
                maxLength={3}
                placeholder="XXX"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
