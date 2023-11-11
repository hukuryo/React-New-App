import React from "react";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 space-y-8 bg-white rounded-lg shadow-md">
        <div>
          <h2 className="text-3xl font-semibold text-center">サインアップ</h2>
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
            <label className="block text-sm font-medium text-gray-700">
              パスワード(確認)
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
            >
              サインアップ
            </button>
          </div>
        </form>
        <div className="mt-5 text-right">
          <Link to="/login">
            <a className="hover:opacity-70 hover:underline">
              ログイン済みの方はこちら
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
