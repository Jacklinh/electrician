import DefaultLayout from '../../components/Layouts/DefaultLayout'
import styles from '../Login/Login.module.css';
import Button from '../../components/Button';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const schema = yup.object({
    firtname: yup.string().required().min(4,'nhap toi thieu 4 ky tu'),
    lastname: yup.string().required().min(4,'nhap toi thieu 4 ky tu'),
    mobile: yup.string().required().matches(phoneRegExp,'mobile nhap dung dinh dang').max(10),
    email: yup.string().email('email phai dung dinh dang').required(),
    password: yup.string().required(),
    password_confirm: yup.string().required().oneOf([yup.ref('password')],'password confirm vui long trung voi password'),
}).required();
type FormData = yup.InferType<typeof schema>;
const Register = () => {
    const { register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: FormData) => console.log('data',data);
  return (
    <>
        <DefaultLayout>
            <section className='main_wrapper flex'>
                <div className={styles.login_wrapper}>
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <h2>Register</h2>
                        <input placeholder="Firt Name" type="text" {...register("firtname")} />
                        <p style={{color: 'red'}}>{errors.firtname?.message}</p>
                        <input placeholder="Last Name" type="text" {...register("lastname")} />
                        <p style={{color: 'red'}}>{errors.lastname?.message}</p>
                        <input placeholder="Mobile" type="text" {...register("mobile")} />
                        <p style={{color: 'red'}}>{errors.mobile?.message}</p>
                        <input placeholder="Your Email" type="email" {...register("email")} />
                        <p style={{color: 'red'}}>{errors.email?.message}</p>
                        <input placeholder="Password" type="password" {...register("password")} />
                        <p style={{color: 'red'}}>{errors.password?.message}</p>
                        <input placeholder="Password Confirm" type="password" {...register("password_confirm")} />
                        <p style={{color: 'red'}}>{errors.password_confirm?.message}</p>
                        <p className={styles.term}>By click Register Button below, You agree to Terms of Privacy Plolicy </p>
                        
                        <Button label='Register' typeName='submit' />
                    </form>
                    <p className={styles.note}>Aready have an account <a href="login.html">Login now</a></p>
                </div>
            </section>
        </DefaultLayout>
    </>
  )
}

export default Register