import { useForm } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { signUp, user } = useAuth();

  const onSubmit = (data) => {
    signUp(data.email, data.password);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div>
      {user ? (
        <p>Welcome, {user.email}!</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            )}
          </div>

          <div>
            <label>Password</label>
            <input
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p style={{ color: "red" }}>{errors.password.message}</p>
            )}
          </div>

          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      )}
      <p>
        Already have an account? <Link to="/signin">Sign Ip</Link>
      </p>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default SignUpPage;
