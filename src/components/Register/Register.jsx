import { Link } from 'react-router-dom';
import styles from './register-styles.module.css';

function Register() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle registration logic here
  };

  return (
    <div className={styles.registerPage}>
      <form onSubmit={handleSubmit} className={styles.registerForm}>
        <h1 className={styles.title}>RKMS - Register</h1>
        
        <div className={styles.inputsContainer}>
          <label>First Name</label> 
          <input placeholder="E.g Jhon" required />

          <label>Last Name</label>
          <input placeholder="E.g Smith" required />

          <label>Email</label> 
          <input type="email" placeholder="E.g jhonsmith123@gmail.com" required />

          <label>Company Name</label> 
          <input placeholder="E.g Smith Company Inc." required />

          <label>Password</label> 
          <span className={styles.passwordHint}>?</span> 
          <input type="password" placeholder="E.g aaBBccDD11223344!" required />

          <label>Confirm Password</label> 
          <input type="password" placeholder="Same as password" required />
        </div>

        <div className={styles.checkboxContainer}>
          <input type="checkbox" id="terms" required />
          <label htmlFor="terms">I agree to the <a href="/tos">Terms of Service</a></label>
          
          <input type="checkbox" id="remember-reg" />
          <label htmlFor="remember-reg">Remember Me</label>
        </div>
        
        <button type="submit" className={styles.submitBtn}>Create Account</button>
        
        <label className={styles.footerText}>
          Already have an account? <Link to="/login">Sign in</Link>.
        </label>
      </form>
    </div>
  );
}

export default Register;