import FSInput from "@/components/form/FSInput";
import FormWrap from "@/components/form/FormWrap";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

// type TUser = {
//   email: string;
//   iat: number;
//   exp: number;
// };

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login, { error }] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await login(data).unwrap();
      console.log("res", res);
      const user = verifyToken(res.token);

      dispatch(setUser({ user, token: res.token }));
      navigate("/");
      console.log("user login success");
    } catch (error) {
      console.log("error from catch", error);
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <div className="p-10 rounded-md own-shadow">
        <FormWrap onSubmit={onSubmit}>
          <FSInput type="text" name="email" label="Email:" />

          <FSInput type="text" name="password" label="Password:" />

          <Button htmlType="submit" className="md:text-[15px]">
            Login
          </Button>

          <p className="mt-5 text-center 2xl:text-[15px]">
            Didn't have any account?{" "}
            <Link to="/register" className="text-secondary-text font-medium">
              Register
            </Link>{" "}
            now
          </p>
        </FormWrap>
      </div>
    </Row>
  );
};

export default Login;
