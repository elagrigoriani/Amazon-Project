import { useState } from "react";
import { Modal, Form, Input, Button, Alert } from "antd";
import { TAuthRequest } from "../../@types/requestTypes";
import { publicAxios } from "../../utils/publicAxios";
import { useAuthProvider } from "../../provider/AuthProvider";
import { FormattedMessage, useIntl } from "react-intl";

type SignInModalProps = {
  onCancel: () => void;
};

export type SignInFormValue = {
  email: string;
  password: string;
};

export function SignInModal({ onCancel }: SignInModalProps) {
  const { setAuthData } = useAuthProvider();
  const [authLoading, setAuthLoading] = useState(false);
  const [authError, setAuthError] = useState<boolean>();
  const { formatMessage } = useIntl();

  async function onFinish(values: SignInFormValue) {
    try {
      setAuthLoading(true);
      const response = await publicAxios.post("/auth/login", values);
      setAuthData(response.data as TAuthRequest);
      onCancel();
    } catch (error: any) {
      setAuthError(true);
    } finally {
      setAuthLoading(false);
    }
  }

  return (
    <Modal
      title={formatMessage({ id: "signin" })}
      centered={true}
      onCancel={onCancel}
      open={true}
      footer={
        <Button
          loading={authLoading}
          form="signin"
          type="primary"
          htmlType="submit"
          style={{ backgroundColor: "#FF9900" }}
        >
          <FormattedMessage id="signin" />
        </Button>
      }
    >
      <Form<SignInFormValue>
        onFinish={onFinish}
        name="signin"
        autoComplete="off"
      >
        <Form.Item
          label="e-mail"
          name="email"
          rules={[
            {
              required: true,
              message: formatMessage({ id: "emailerror" }),
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={formatMessage({ id: "password" })}
          name="password"
          rules={[
            { required: true, message: formatMessage({ id: "passworderror" }) },
          ]}
        >
          <Input.Password />
        </Form.Item>
        {authError && (
          <Alert type="error" message={formatMessage({ id: "signinerror" })} />
        )}
      </Form>
    </Modal>
  );
}
