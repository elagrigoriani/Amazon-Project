import { Modal, Form, Input, Button } from "antd";
import { publicAxios } from "../../utils/publicAxios";
import { useAuthProvider } from "../../provider/AuthProvider";
import { TAuthRequest } from "../../@types/requestTypes";
import { useState } from "react";

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

  async function onFinish(values: SignUpFormValue) {
    if (values.password !== values["repeat_password"]) {
      form.setFields([
        {
          name: "repeat_password",
          errors: ["შემოყვანილი პაროლი არ ემთხვევა"],
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
      title="რეგისტრაცია"
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
          რეგისტრაცია
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
          label="სახელი"
          name="first_name"
          rules={[{ required: true, message: "გთხოვთ ჩაწეროთ თქვენი სახელი!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="გვარი"
          name="last_name"
          rules={[{ required: true, message: "გთხოვთ ჩაწეროთ თქვენი გვარი!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="ტელეფონის ნომერი"
          name="phone_number"
          rules={[
            {
              required: true,
              message: "გთხოვთ ჩაწეროთ თქვენი ტელეფონის ნომერი!",
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
              message: "გთხოვთ ჩაწეროთ თქვენი ელექტრონული ფოსტა!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="პაროლი"
          name="password"
          rules={[{ required: true, message: "გთხოვთ ჩაწეროთ თქვენი პაროლი!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="გაიმეორე პაროლი"
          name="repeat_password"
          rules={[
            { required: true, message: "გთხოვთ გაიმეოროთ თქვენი პაროლი!" },
          ]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  );
}
