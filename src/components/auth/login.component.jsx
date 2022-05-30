import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Icon } from "@iconify/react";

export default function Login() {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [typeField, setTypeField] = useState("text");
  let navigate = useNavigate();
  useEffect(() => {
    if (isShowPassword) {
      setTypeField("password");
    } else {
      setTypeField("text");
    }
  }, [isShowPassword]);

  const isShowIcon =
    isShowPassword === false ? (
      <Icon icon="akar-icons:eye-closed" />
    ) : (
      <Icon icon="akar-icons:eye" />
    );

  return (
    <>
      <section className="bg-[#1d1d28] text-white absolute top-0 bottom-0 left-0 right-0 w-full h-full">
        <main className="flex justify-center h-full  ">
          <div className="shadow-xl self-center bg-[#333344] shadow-gray/20 border/20 p-3 rounded-lg w-[360px]">
            <h1 className="text-2xl font-bold">It's Lucky day.</h1>
            <p className="text-xs ">Alhamdulillah  !</p>
            <form className="my-2 text-slate-500">
              <input type="text" className="py-2 px-3 w-full mb-2 rounded-sm placeholder:text-xs" placeholder="Username"/>
              <div className="flex gap-1">
                <input
                  type={typeField}
                  className="py-2 px-3 w-full mb-2 rounded-sm placeholder:text-xs"
                  placeholder="Input your password"
                />
                <span
                  className="self-center mx-3"
                  onClick={() => setIsShowPassword(!isShowPassword)}
                >
                  {isShowIcon}
                </span>
              </div>
            </form>
            <div className="flex gap-1 justify-between">
              <button className="default" onClick={() => navigate("/register")}>
                Register
              </button>
              <button className="primary" onClick={()=> navigate('/dashboard')}>
                Login
              </button>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
