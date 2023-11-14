import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_API_URL, SUPABASE_API_KEY } from "../lib/client";
import { Link } from "react-router-dom";
import { login } from "../store/userSlice";
import { useDispatch, useSelector } from "react-redux";

const supabase = createClient(SUPABASE_API_URL, SUPABASE_API_KEY);

export const Login = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const { data } = await supabase.from("users").select();
    setUser(data);
  };

  // const login = () => {
  //   console.log(user.some((user) => user.name === ))
  // }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 space-y-8 bg-white rounded-lg shadow-md">
        <div>
          <h2 className="text-3xl font-semibold text-center">ログイン</h2>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              ユーザー名
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="ユーザー名を入力してください"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              パスワード
            </label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="パスワードを入力してください"
            />
          </div>
          <div>
            <button
              className="w-full mt-4 py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              type="submit"
              onClick={login}
            >
              ログイン
            </button>
          </div>
        </form>
        <div className="mt-5 text-right">
          <Link to="/signup">
            <a className="hover:opacity-70 hover:underline">
              未登録の方はこちら
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
