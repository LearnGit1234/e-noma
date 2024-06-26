import SignInForm from "../components/SignInForm"
import "../cssStyles/signIn.css"
import {Link} from "react-router-dom"


export default function SignIn(){
    const signInBg = {
        background: `linear-gradient(rgba(245, 245, 245, 0),rgba(0, 0, 0, 0.486)), url("signinBg.jpg")`,
        backgroundSize: `cover`, 
        backgroundPosition: `center`,
        position: `relative`,

    }

    return(
        <div className="signIn--container">

       <div className="signInBg"  style={signInBg}>
         <h1 className="enoma--header">E-Noma</h1>
       </div>


       <div className="signIn---fields">
         <h1 className="signIn--header">Sign in</h1>

      {/* Google facebook buttons */}
       <div className="google--facebook--buttons"> 

        <a href="">
             <button className="google-button">

            <figure>
            <img src="googleLogo.svg" alt="Google Icon" width="40px" />
            </figure>

            <p>Continue with Google</p>
        </button>
        </a>

        <a href="">
        <button className="facebook-button">
            <figure>
            <img src="facebookSignin2.svg" alt="Facebook Icon" width="40px" />

            </figure>
           <p> Continue with Facebook</p>
        </button>
        </a>

        </div> 

        <div className="or">OR</div>
        <SignInForm />
       
        <div className="sign-up">
            Dont have an account? <Link  className="to--sign--up" to="/welcomePage">Sign up</Link>
        </div>

        </div>
   
        </div>
        
    )
}