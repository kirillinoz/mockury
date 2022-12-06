import { useSupabaseClient } from "@supabase/auth-helpers-react";
import Head from "next/head";
import { FormEvent, useState } from "react";

const Reset = () => {
  const [email, setEmail] = useState("");

  const supabase = useSupabaseClient();

  const reset = async (e: FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Mockury | Reset password</title>
      </Head>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-1/3">
          <h3 className="text-center border bg-gray-400 border-gray-400 leading-[0px] mt-10">
            <span className="bg-white text-gray-400 px-5">Reset password</span>
          </h3>
          <form className="mt-10" onSubmit={reset}>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <input type="submit" className="btn w-full" value="Reset password" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Reset;
