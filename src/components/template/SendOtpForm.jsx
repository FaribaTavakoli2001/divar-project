import { sendOtp } from "services/auth";
function SendOtpForm( {mobile , setMobile , setStep}) {

    const sendHandler = async (event) =>  {
      event.preventDefault();

        if ( mobile.length !== 11 ) return;

        const { response , error } = await sendOtp(mobile);
        // console.log({response , error})

        if (response) setStep(2)
       
        if(error) console.log(error.response.data.message)

    }

    

  return (
    <div>
        <form>
            <p> ورود به حساب کاربری</p>
            <span>.برای استفاده از امکانات دیوار، لطفاً شمارهٔ موبایل خود را وارد کنید. کد تأیید به این شماره پیامک خواهد شد</span>
            <label htmlFor="input">شمارهٔ موبایل خود را وارد کنید</label>
            <input 
            type="text" 
            id="input"
            placeholder="شماره موبایل"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            />
            <button onClick={sendHandler}>ارسال کد تایید</button>
            <span>شرایط استفاده از خدمات و حریم خصوصی دیوار را می‌پذیرم.</span>
        </form>
    </div>
  )
}

export default SendOtpForm