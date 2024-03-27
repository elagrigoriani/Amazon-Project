import { useState } from "react";
import Cards from "../../images/cards.png";
import Order from "../../images/order.png";
import { Input, Label, SubmitButton } from "./CreditCard.styled";
import { useNavigate } from "react-router-dom";

export function CreditCard() {
  const [cardNumber, setCardNumber] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");
  const [cardholder, setCardholder] = useState<string>("");
  const [cardNumberError, setCardNumberError] = useState<string>("");
  const [cvcError, setCvcError] = useState<string>("");
  const [cardholderError, setCardholderError] = useState<string>("");
  const [expiryMonth, setExpiryMonth] = useState<string>("month");
  const [expiryYear, setExpiryYear] = useState<string>("year");
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let value = event.target.value;
    value = value.replace(/\D/g, "");
    value = value.replace(/(.{4})/g, "$1 ").trim();
    value = value.slice(0, 19);
    setCardNumber(value);
    if (value.replace(/\s/g, "").length < 16) {
      setCardNumberError("გთხოვთ შეიყვანოთ ბარათის ნომერი");
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
      setCvcError("გთხოვთ შეიყვანოთ CVC");
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
      setCardholderError("გთხოვთ შეიყვანოთ სახელი და გვარი ");
    } else {
      setCardholderError("");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let formValid = true;

    if (!cardNumber.trim() || cardNumber.replace(/\s/g, "").length < 16) {
      setCardNumberError("გთხოვთ სწორად შეიყვანოთ ბარათის ნომერი");
      formValid = false;
    } else {
      setCardNumberError("");
    }
    if (!cardholder.trim()) {
      setCardholderError("გთხოვთ სწორად შეიყვანოთ სახელი და გვარი");
      formValid = false;
    } else {
      setCardholderError("");
    }
    if (!cvc.trim() || cvc.length < 3) {
      setCvcError("გთხოვთ სწორად შეიყვანოთ CVC ");

      formValid = false;
    } else {
      setCvcError("");
    }
    if (expiryMonth === "month" || expiryYear === "year") {
      setCardNumberError("გთხოვთ აირჩიეთ თვე და წელი");
      formValid = false;
    }

    if (formValid) {
      setShowSuccessModal(true);
    }
  };
  const navigate = useNavigate();
  const handlePurchase = () => {
    navigate("/orders");
    setShowSuccessModal(false);
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
          Payment Details
        </h1>
        <img style={{ width: "100%" }} src={Cards} alt="img" />
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex" }}>
            <div style={{ margin: "auto", display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "auto",
                }}
              >
                <h4>VISA</h4>
                <Label>Card Number *</Label>
                <Label>Cardholder *</Label>
                <Label>Expiry date *</Label>
                <Label>CVC *</Label>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "auto",
                }}
              >
                <h5 style={{ marginBottom: "25px" }}>*Mandatory fields</h5>
                <Input
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
                <Input
                  type="text"
                  id="cardholder"
                  value={cardholder}
                  onChange={handleCardholderChange}
                  placeholder="Cardholder's Name"
                />
                {cardholderError && (
                  <div style={{ color: "red" }}>{cardholderError}</div>
                )}
                <div>
                  <div
                    style={{
                      marginTop: "20px",
                      marginBottom: "20px",
                      marginLeft: "10px",
                    }}
                  >
                    <select
                      name="expiryMonth"
                      id="expiryMonth"
                      onChange={(e) => setExpiryMonth(e.target.value)}
                    >
                      <option value="month">Month</option>
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
                    <select
                      name="expiryYear"
                      id="expiryYear"
                      onChange={(e) => setExpiryYear(e.target.value)}
                    >
                      <option value="year">Year</option>
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
                <Input
                  type="text"
                  id="cvc"
                  value={cvc}
                  onChange={handleCvcChange}
                  maxLength={3}
                  placeholder="XXX"
                />
                {cvcError && <div style={{ color: "red" }}>{cvcError}</div>}
                <SubmitButton type="submit" value="Pay" className="Submit" />
              </div>
            </div>
          </div>
        </form>
        {showSuccessModal && (
          <div
            style={{
              margin: "auto",
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              background: "white",
              padding: "20px",
              borderRadius: "5px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <button
              onClick={() => {
                setShowSuccessModal(false);
                navigate("/orders");
              }}
            >
              X
            </button>
            <h1>Thank you for your order!</h1>
            <img src={Order} alt="Order" style={{ marginLeft: "65px" }} />
          </div>
        )}
      </div>
    </div>
  );
}
