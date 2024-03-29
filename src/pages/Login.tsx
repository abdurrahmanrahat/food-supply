import FSInput from "@/components/form/FSInput";
import FormWrap from "@/components/form/FormWrap";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

// type TUser = {
//   email: string;
//   iat: number;
//   exp: number;
// };

const Login = () => {
  const dispatch = useAppDispatch();

  // for redirect purpose
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("User logging in...");

    try {
      const res = await login(data).unwrap();
      console.log("res", res);
      const user = verifyToken(res.token);

      dispatch(setUser({ user, token: res.token }));
      toast.success("User logged in successfully", {
        id: toastId,
        duration: 2000,
      });
      navigate(from, { replace: true });
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

          <FSInput type="password" name="password" label="Password:" />

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
