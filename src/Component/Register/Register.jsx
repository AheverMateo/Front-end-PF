import style from './Register.module.css';

const Register = () => {
return (
    <div className={style.main}>
        <h2>Register Now!</h2>
        <p>Please fill in the blanks to start enjoying your favorite movies</p>
        <form>
            <label htmlFor="">Name</label>
            <input></input>
            <label htmlFor="">E-mail</label>
            <input></input>
            <label htmlFor="">Password</label><label htmlFor=""></label>
            <input></input>
            <button>Register</button>
        </form>
    </div>
)
}

export default Register;