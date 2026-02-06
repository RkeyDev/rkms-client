import { Link, useNavigate } from 'react-router-dom';
import './register-styles.css';

function Register() {

  const handleSubmit = async (e)=>{
    //TODO handle register
  };

  return (
     <div>
      <form onSubmit={handleSubmit}>
        <h1>RKMS - Register</h1>
        
        <div id="inputs-container">
          <label>First Name</label> 
          <input placeholder="E.g Jhon" required></input>

          <label>Last Name</label>
          <input placeholder="E.g Smith" required></input>


          <label>Email</label> 
          <input type="email" placeholder="E.g jhonsmith123@gmail.com" required></input>

          <label>Company Name</label> 
          <input placeholder="E.g Smith Company Inc." required></input>


          <label >Password</label> <span id="password-hint">?</span> 
          <input type="password" placeholder="E.g aaBBccDD11223344!" required></input>

          <label>Confirm Password</label> 
          <input type="password" placeholder="Same as password" required></input>
        </div>

        <div id="checkbox-container">
          <input type="checkbox" required></input>
          <label>I agree to the <a>Terms of Service</a></label>
          <input type="checkbox"></input>
          <label>Remember Me</label>
        </div>
        
        <button type="submit">Create Account</button>
        <label>Already have an account? <Link to={"/login"}>Sign in</Link>.</label>
      </form>
      
      
    </div>
  );
}

export default Register;