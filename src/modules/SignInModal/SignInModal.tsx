import { useState } from "react";
import { Modal, Form, Input, Button, Alert } from "antd";
import { TAuthRequest } from "../../@types/requestTypes";
import { publicAxios } from "../../utils/publicAxios";
import { useAuthProvider } from "../../provider/AuthProvider";

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
      title="შესვლა"
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
          შესვლა
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
              message: "გთხოვთ შეიყვანოთ თქვენი ელექტრონული ფოსტა!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="პაროლი"
          name="password"
          rules={[
            { required: true, message: "გთხოვთ შეიყვანოთ თქვენი პაროლი!" },
          ]}
        >
          <Input.Password />
        </Form.Item>
        {authError && (
          <Alert
            type="error"
            message="მომხმარებლის email ან პაროლი არასწორია"
          />
        )}
      </Form>
    </Modal>
  );
}
