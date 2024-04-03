import {
  Input,
  Label,
  SubmitButton,
} from "../../components/CreditCard/CreditCard.styled";
import { FormattedMessage, useIntl } from "react-intl";

export function Profile() {
  const { formatMessage } = useIntl();

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
            <FormattedMessage id="editprofile" />
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
                <Label>
                  <FormattedMessage id="name" />
                </Label>
                <Label>
                  <FormattedMessage id="lastname" />
                </Label>
                <Label>
                  <FormattedMessage id="phonenumber" />
                </Label>
                <Label>e-mail</Label>
                <Label>
                  <FormattedMessage id="password" />
                </Label>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "auto",
                  marginTop: "35px",
                }}
              >
                <Input
                  type="text"
                  placeholder={formatMessage({ id: "name" })}
                />

                <Input
                  type="text"
                  placeholder={formatMessage({ id: "lastname" })}
                />

                <Input
                  type="text"
                  placeholder={formatMessage({ id: "phonenumber" })}
                />

                <Input type="text" placeholder="e-mail" />

                <Input
                  type="text"
                  placeholder={formatMessage({ id: "password" })}
                />

                <SubmitButton
                  type="submit"
                  value={formatMessage({ id: "edit" })}
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
