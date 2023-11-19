import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Articles } from "./routes/Articles";
import { Stock } from "./routes/Stock";
import { Favorite } from "./routes/Favorite";
import { ArticleDetail } from "./routes/ArticleDetail";
import { NotFound } from "./routes/NotFound";
import { ArticleSearch } from "./routes/ArticleSearch";
import { Login } from "./routes/Login";
import { SignUp } from "./routes/SignUp";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Articles />} />
        <Route path={`/stock`} element={<Stock />} />
        <Route path={`/favorite`} element={<Favorite />} />
        <Route path={`/article/:id`} element={<ArticleDetail />} />
        <Route path={`/article/search`} element={<ArticleSearch />} />
        <Route path={`/login`} element={<Login />} />
        <Route path={`/signUp`} element={<SignUp />} />
        <Route path={`*`} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
