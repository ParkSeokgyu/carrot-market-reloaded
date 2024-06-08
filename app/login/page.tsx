"use client";
import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { handleForm } from "./actions";

export default function LogIn() {
  // // 서버 동작 함수  
  // async function handleForm(formData: FormData) {
  //   "use server";
  //   await new Promise(resolve => setTimeout(resolve, 5000))
  //   console.log("로그인 버튼 누르면 로그인!");
  //   console.log("가져온데이터 :", formData.get("email"), formData.get("password"));
  //   // 홈(페인페이지)로 이동하기
  //   redirect("/");
  // }

  const [state, action] = useFormState(handleForm, null);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">이메일과 비밀번호로 로그인합니다.</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <FormInput name="email" type="email" placeholder="Email" required errors={[]} />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <FormButton text="로그인" />
      </form>
      <SocialLogin />
    </div>
  );
}