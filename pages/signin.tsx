import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const supabase = useSupabaseClient();
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session) {
      router.push("/studio");
    }
  }, [session, router]);

  async function signInWithGoogle() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) {
      console.log(error);
    }
  }

  const signIn = async (e: FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      console.log(error);
    }

    if (data) {
      router.push("/studio");
    }
  };

  return (
    <>
      <Head>
        <title>Mockury | Welcome back</title>
      </Head>
      <div className="max-w-3xl mx-auto min-h-screen flex justify-center items-center">
        <div className="card mx-3 my-6 w-[390px]">
          <h1 className="font-rubik text-center">Welcome back</h1>
          <div className="flex justify-center mt-5">
            <p className="text-gray-900">No account?</p>
            <Link href="/signup" className="link ml-3">
              Sign up
            </Link>
          </div>
          <h3 className="text-center border bg-gray-400 border-gray-400 leading-[0px] mt-10">
            <span className="bg-white text-gray-400 px-5">Sign in with</span>
          </h3>
          <div>
            <button className="btn w-full mt-10" onClick={signInWithGoogle} disabled>
              Google
            </button>
          </div>
          <h3 className="text-center border bg-gray-400 border-gray-400 leading-[0px] mt-10">
            <span className="bg-white text-gray-400 px-5">or</span>
          </h3>
          <form className="mt-10" onSubmit={signIn}>
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
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <input type="submit" className="btn w-full" value="Sign in" />
            </div>
          </form>
          <div className="flex justify-center mt-5">
            <p className="text-gray-900">Forgot your password?</p>
            <Link href="/reset" className="link ml-3">
              Reset password
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;
