import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Settings = () => {
  const [newPassowrd, setNewPassword] = useState<string>("");
  const [newsletter, setNewsletter] = useState<boolean>(true);

  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const { data, error } = await supabase.from("users").select().single();
      if (error) {
        console.log(error);
      }
      if (data) {
        setNewsletter(data.newsletter);
      }
    };

    getData().catch(console.error);
  }, [supabase]);

  useEffect(() => {
    if (!session) {
      router.push("/signin");
    }
  }, [session, router]);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error);
    }
  };

  const updateNewsletter = async () => {
    const { error } = await supabase
      .from("users")
      .update({ newsletter: !newsletter })
      .eq("id", session?.user?.id);

    if (error) {
      console.log(error);
    }

    setNewsletter(!newsletter);
  };

  const changePassword = async () => {
    const { error } = await supabase.auth.updateUser({
      password: newPassowrd,
    });

    if (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Mockury | Settings</title>
      </Head>
      <div className="max-w-3xl mx-auto">
        <h1 className="mt-10">Settings</h1>
        <div className="card mt-10 flex items-center justify-between">
          <div>
            <h3 className="text-gray-900">Newsletter</h3>
            <p className="mt-3 text-gray-700">
              Receive important updates and news about Mockury.
            </p>
          </div>
          {newsletter ? (
            <button onClick={updateNewsletter} className="btn">
              Deactivate
            </button>
          ) : (
            <button onClick={updateNewsletter} className="btn highlight">
              Activate
            </button>
          )}
        </div>
        <div className="card mt-10 flex items-center justify-between">
          <div>
            <h3 className="text-gray-900">Reset password</h3>
            <p className="mt-3 text-gray-700">Change your password.</p>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="newPassword"
            >
              New password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="newPassword"
              type="password"
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={changePassword} className="btn mt-3 w-full">
              Change
            </button>
          </div>
        </div>
        <div className="card mt-10 flex items-center justify-between">
          <div>
            <h3 className="text-gray-900">Sign out</h3>
            <p className="mt-3 text-gray-700">
              Have the watermark back or change your account.
            </p>
          </div>
          <button onClick={signOut} className="btn">
            Sign out
          </button>
        </div>
      </div>
    </>
  );
};

export default Settings;
