import { Link } from "react-router-dom";
import styles from "../Login/login-styles.module.css";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle Login Logic
  };

  return (
    <div className={styles.loginPage}>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <h1 className={styles.title}>RKMS - Login</h1>
        
        <div className={styles.inputsContainer}>
          {/* Email Group */}
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input 
              type="email" 
              placeholder="E.g jhonsmithl23@gmail.com" 
              required 
            />
          </div>

          {/* Password Group */}
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input 
              type="password" 
              placeholder="E.g aaBBccDDII223344!" 
              required 
            />
          </div>
        </div>

        {/* Row for Checkbox and Forgot Link */}
        <div className={styles.optionsRow}>
          <div className={styles.rememberMe}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember Me</label>
          </div>
          <Link to="/forgot-password" className={styles.forgotLink}>
            Forgot password?
          </Link>
        </div>
        
        <button type="submit" className={styles.signInBtn}>Sign In</button>
        
        <div className={styles.footerText}>
          Don't have an account yet? <Link to="/register">Sign up</Link>.
        </div>
      </form>
    </div>
  );
}

export default Login;