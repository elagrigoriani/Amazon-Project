import {
  Input,
  Label,
  SubmitButton,
} from "../../components/CreditCard/CreditCard.styled";

export function Profile() {
  return (
    <div>
      <div
        style={{
          width: "50%",
          margin: "auto",
          borderRadius: "8px",
          border: "1px solid lightgrey",
          marginTop: "10px",
          marginBottom: "10px",
          padding: "10px",
        }}
      >
        <div style={{ margin: "auto", display: "flex" }}>
          <h1
            style={{
              margin: "auto",
              display: "flex",
              color: "#FF9900",
              marginTop: "15px",
            }}
          >
            პროფილის რედაქტირება
          </h1>
        </div>

        <form>
          <div style={{ display: "flex" }}>
            <div style={{ margin: "auto", display: "flex" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "auto",
                }}
              >
                <Label>სახელი</Label>
                <Label>გვარი</Label>
                <Label>ტელეფონის ნომერი</Label>
                <Label>e-mail</Label>
                <Label>პაროლი</Label>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "auto",
                  marginTop: "35px",
                }}
              >
                <Input type="text" placeholder="სახელი" />

                <Input type="text" placeholder="გვარი" />

                <Input type="text" placeholder="ტელეფონის ნომერი" />

                <Input type="text" placeholder="e-mail" />

                <Input type="text" placeholder="პაროლი" />

                <SubmitButton
                  type="submit"
                  value="განახლება"
                  className="Submit"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
