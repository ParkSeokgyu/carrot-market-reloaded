"use server";

export async function handleForm(prevState: any, formData: FormData) {
  console.log(prevState);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return {
    errors: ["잘못된 비밀번호", "비밀번호가 너무 짧음"],
  };
}