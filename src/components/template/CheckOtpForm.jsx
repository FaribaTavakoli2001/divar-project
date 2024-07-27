import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { checkOtp } from "services/auth";
import { setCookie } from "utils/cookie";
import { getProfile } from "../../services/user";

import styles from './ChechOtpForm.module.css'

function CheckOtpForm({code , setCode , mobile , setStep}) {
  const { refetch } = useQuery({
    queryKey:['profile'],
    queryFn:getProfile,
  })
  
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log({code , mobile})
    if (code.length !== 5) return;

    const { response , error } = await checkOtp(mobile , code);
    // console.log({response , error})

    if (response) {
      setCookie(response.data);
      navigate("/")
      refetch()
    }
    if (error) console.log(error.response.data.message)
  }

  return (
    <div>
      <form onSubmit={submitHandler} className={styles.form}>
        <p>تایید کد ارسال شده</p>
        <span>کد پیامک شده به شماره «{mobile}» را وارد کنید.</span>
        <label htmlFor="input"> کد تایید را وارد کنید</label>
        <input 
        type="text"
        id="input"
        placeholder="کد تایید"
        value={code}
        onChange={e => setCode(e.target.value)}
        />
        <button type="submit">ورود</button>
        <button 
        className={styles.backBottun}
        onClick={() => setStep(1)}>تغییر شماره موبایل</button>

      </form>
    </div>
  )
}

export default CheckOtpForm