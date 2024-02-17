import FSInput from "@/components/form/FSInput";
import FormWrap from "@/components/form/FormWrap";
import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <div className="p-10 rounded-md own-shadow">
        <FormWrap onSubmit={onSubmit}>
          <FSInput type="text" name="username" label="User Name:" />

          <FSInput type="text" name="email" label="Email:" />

          <FSInput type="text" name="password" label="Password:" />

          <Button htmlType="submit" className="md:text-[15px]">
            Register
          </Button>

          <p className="mt-5 text-center 2xl:text-[15px]">
            Already have an account?{" "}
            <Link to="/login" className="text-secondary-text font-medium">
              Login
            </Link>{" "}
            now
          </p>
        </FormWrap>
      </div>
    </Row>
  );
};

export default Register;
