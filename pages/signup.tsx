import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";

const Signup = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [success, setSuccess] = useState(false);

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

  const signUp = async (e: FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    if (error) {
      console.log(error);
    }

    if (data) {
      setSuccess(true);
    }
  };

  return (
    <>
      <Head>
        <title>Mockury | Get started</title>
      </Head>
      <div className="max-w-3xl mx-auto min-h-screen flex justify-center items-center">
        <div className="card mx-3 my-6 w-[390px]">
          <h1 className="font-rubik text-center">Get started</h1>
          {success ? (
            <div>
              <div className="border my-3"></div>
              <h3 className="mt-5 text-center">
                Please confirm your email address to continue.
              </h3>
              <h3 className="mt-3 text-center">
                You should receive an email shortly. Click on the link in the email to
                confirm your email address.
              </h3>
            </div>
          ) : (
            <div>
              <div className="flex justify-center mt-5">
                <p className="text-gray-900">Already registered?</p>
                <Link href="/signin" className="link ml-3">
                  Sign in
                </Link>
              </div>
              <h3 className="text-center border bg-gray-400 border-gray-400 leading-[0px] mt-10">
                <span className="bg-white text-gray-400 px-5">Sign up with</span>
              </h3>
              <div>
                <button className="btn w-full mt-10" onClick={signInWithGoogle}>
                  Google
                </button>
              </div>
              <h3 className="text-center border bg-gray-400 border-gray-400 leading-[0px] mt-10">
                <span className="bg-white text-gray-400 px-5">or</span>
              </h3>
              <form className="mt-10" onSubmit={signUp}>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
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
                  <input type="submit" className="btn w-full" value="Sign up" />
                </div>
              </form>
              <div>
                <p className="text-center">
                  By signing up, you agree to our{" "}
                  <Link href="/terms" className="link">
                    terms of service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="link">
                    privacy policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Signup;
