import { Modal, Form, Input, Button } from "antd";
import { publicAxios } from "../../utils/publicAxios";
import { useAuthProvider } from "../../provider/AuthProvider";
import { TAuthRequest } from "../../@types/requestTypes";
import { useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";

type SignUpModalProps = {
  onCancel: () => void;
};

export type SignUpFormValue = {
  first_name: string;
  last_name: string;
  phone_number: number;
  email: string;
  password: string;
  repeat_password: string;
};

export function SignUpModal({ onCancel }: SignUpModalProps) {
  const [form] = Form.useForm();
  const [authLoading, setAuthLoading] = useState(false);
  const { setAuthData } = useAuthProvider();
  const { formatMessage } = useIntl();

  async function onFinish(values: SignUpFormValue) {
    if (values.password !== values["repeat_password"]) {
      form.setFields([
        {
          name: "repeat_password",
          errors: [formatMessage({ id: "repeatpassworderror" })],
        },
      ]);
      return;
    }
    try {
      setAuthLoading(true);
      const response = await publicAxios.post("/auth/register", values);
      setAuthData(response.data as TAuthRequest);
      onCancel();
    } catch (error) {
    } finally {
      setAuthLoading(false);
    }
  }

  return (
    <Modal
      title={formatMessage({ id: "signup" })}
      centered={true}
      onCancel={onCancel}
      open={true}
      footer={
        <Button
          loading={authLoading}
          form="signup"
          type="primary"
          htmlType="submit"
          style={{ backgroundColor: "#FF9900" }}
        >
          <FormattedMessage id="signup" />
        </Button>
      }
    >
      <Form<SignUpFormValue>
        name="signup"
        form={form}
        autoComplete="off"
        onFinish={onFinish}
      >
        <Form.Item
          label={formatMessage({ id: "name" })}
          name="first_name"
          rules={[
            { required: true, message: formatMessage({ id: "nameerror" }) },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={formatMessage({ id: "lastname" })}
          name="last_name"
          rules={[
            { required: true, message: formatMessage({ id: "lastnameerror" }) },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={formatMessage({ id: "phonenumber" })}
          name="phone_number"
          rules={[
            {
              required: true,
              message: formatMessage({ id: "phonenumbererror" }),
            },
          ]}
        >
          <Input />
        </Form.Item>

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

        <Form.Item
          label={formatMessage({ id: "repeatpassword" })}
          name="repeat_password"
          rules={[
            { required: true, message: formatMessage({ id: "passworderror" }) },
          ]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  );
}
