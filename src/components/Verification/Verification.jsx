import { Link } from "react-router-dom";
import styles from "./verification-styles.module.css";

function Verification() {

  const sendVerificationCode = async () => {
    // TODO: handle send verification code via email
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.messageContainer}>
        <h1 className={styles.title}>Verify Your Email Address</h1>
        
        <p className={styles.description}>
          A verification link has sent to your inbox. <br />
          Please open it to continue
        </p>
        
        <button 
          className={styles.resendButton} 
          onClick={sendVerificationCode}
        >
          Resend Link
        </button>
        
        <label className={styles.footerLabel}>
          Still having troubles? <Link to="/support">Contact us</Link>.
        </label>
      </div>
    </div>
  );
}

export default Verification;