
import DefaultLayout from '../../components/Layouts/DefaultLayout'
import styles from './Login.module.css';
import Button from '../../components/Button';
import { useFormik } from 'formik';

interface FormValues {
    email: string,
    password: string,
}
const validate = (values: FormValues) => {
    const errors: any = {};
    if(!values.email){
        errors.email = 'email required';
    }else if(!/^[A-Za-z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'email khong dung dinh dang!';
    }
    if(!values.password) {
        errors.password = 'password required';
    }else if(!(values.password.length > 4)) {
        errors.password = 'password toi thieu 4 ky tu'
    }
    return errors;
}
const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate,
        onSubmit: values => {
            console.log('inputs value',values);
        }
    });
  return (
    <>
        <DefaultLayout>
            <section className='main_wrapper flex'>
                <div className={styles.login_wrapper}>
                    <form action="" onSubmit={formik.handleSubmit}>
                        <h2>Login</h2>
                        <input placeholder="Your Email" type="email" name="email" id={styles.email} onChange={formik.handleChange} value={formik.values.email} />
                        {formik.errors.email ? <p style={{color: 'red'}}>{formik.errors.email}</p>: null}
                        <input placeholder="Password" type="password" name="password" id={styles.password} onChange={formik.handleChange} value={formik.values.password} />
                        {formik.errors.password ? <p style={{color: 'red'}}>{formik.errors.password}</p>: null}
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