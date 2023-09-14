import React, {useState} from 'react'
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import styles from './Login.module.css';
import Button from '../../components/Button';

const Login = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('input', inputs);
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        setInputs((values) => ({...values, [target.name]: target.value}))
    }
  return (
    <>
        <DefaultLayout>
            <section className='main_wrapper flex'>
                <div className={styles.login_wrapper}>
                    <form action="" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <input placeholder="Your Email" type="email" name="email" value={inputs.email} id={styles.email} onChange={handleChange}  />
                        <input placeholder="Password" type="password" name="password" value={inputs.password} id={styles.password} onChange={handleChange}  />
                        <Button label='Login' typeName='submit' />
                    </form>
                    <p className={styles.note}>You don't have an account <a href="register.html">Register now</a></p>
                </div>
            </section>
        </DefaultLayout>
    </>
  )
}

export default Login