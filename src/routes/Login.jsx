import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_API_URL, SUPABASE_API_KEY } from "../lib/client";
import { SignUpModal } from "../components/SignUpModal";

const supabase = createClient(SUPABASE_API_URL, SUPABASE_API_KEY);

export const Login = () => {
  const [user, setUser] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async () => {
    const { data } = await supabase.from("users").select();
    setUser(data);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <button onClick={openModal}>Open Modal</button>
      <SignUpModal isOpen={isModalOpen} closeModal={closeModal}>
        <h2>Modal Content</h2>
        <p>This is the content of the modal.</p>
      </SignUpModal>
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
              className="w-full py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
              type="submit"
            >
              ログイン
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
