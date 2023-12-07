// SignInPage.jsx
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext"; // Adjust the import path

const SignInPage = () => {
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();
  const { signIn, user } = useAuth(); // Assuming you have a getCurrentUser method

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await signIn(data.email, data.password);
    } catch (error) {
      // Handle the sign-in error
      console.error("Sign In Error:", error.message);
      setError("Invalid email or password.");
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input {...register("email", { required: true })} />

        <label>Password</label>
        <input {...register("password", { required: true })} />

        <input type="submit" value="Sign In" />
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <p>
        Don&apos;t have an account? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default SignInPage;
