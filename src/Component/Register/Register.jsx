import GoogleAuth from '../GoogleAuth/GoogleAuth';
import LogInMenu from '../LogInMenu/LogInMenu';
import style from './Register.module.css';

const Register = () => {
return (
    <>
    <LogInMenu />
    <div className={style.main}>
        
        <h2>Register Now!</h2>
        <p>Please fill in the blanks to start enjoying your favorite movies!</p>
        <form>
            <label htmlFor="">Name</label>
            <input placeholder='Name'></input>
            <label htmlFor="">E-mail</label>
            <input placeholder='E-mail'></input>
            <label htmlFor="">Password</label><label htmlFor=""></label>
            <input placeholder='Password'></input>
            <button>Register</button>
        </form>
        

        <GoogleAuth/>
    </div>
    </>
)
}

export default Register;