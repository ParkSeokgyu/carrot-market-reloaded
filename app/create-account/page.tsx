"use client"

import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";

export default function CreateAccount() {

  const [state, dispatch] = useFormState(createAccount, null);
  
  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium text-center">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">아래 양식을 작성하여 가입하세요!!</h2>
      </div>

      <form action={dispatch} className="flex flex-col gap-3">
        <FormInput 
          name="userName" 
          type="text" 
          placeholder="이름" 
          required 
          errors={state?.fieldErrors.username}
        />
        <FormInput 
          name="email" 
          type="email" 
          placeholder="이메일" 
          required 
          errors={state?.fieldErrors.email}
        />
        <FormInput
          name="password"
          type="password"
          placeholder="비밀번호"
          required
          errors={state?.fieldErrors.password}
        />
        <FormInput
          name="confirmPassword"
          type="password"
          placeholder="비밀번호 확인"
          required
          errors={state?.fieldErrors.confirm_password}
        />
        <FormButton text="계정 만들기" />
      </form>

      <SocialLogin />

    </div>
  );
}