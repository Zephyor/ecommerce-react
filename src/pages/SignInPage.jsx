// SignInPage.jsx
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/style.scss';

const SignInPage = () => {
  const { register, handleSubmit } = useForm();
  const { signIn, user } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await signIn(data.email, data.password);
    } catch (error) {
      console.error('Sign In Error:', error.message);
      let errorMessage =
        'An error occurred during sign in. Please try again later.';

      if (
        error.code === 'auth/invalid-email' ||
        error.code === 'auth/wrong-password'
      ) {
        errorMessage =
          'Invalid email or password. Please check your credentials.';
      }

      alert(errorMessage);
    }
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div className='signin-container'>
      <h2>Sign In</h2>
      <form className='signin-form' onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input {...register('email', { required: true })} />

        <label>Password</label>
        <input type='password' {...register('password', { required: true })} />

        <button className='button' type='submit'>
          Sign In
        </button>
      </form>

      <p>
        Don&apos;t have an account? <Link to='/signup'>Sign Up</Link>
      </p>
    </div>
  );
};

export default SignInPage;
