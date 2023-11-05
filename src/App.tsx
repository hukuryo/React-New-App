import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Articles } from "./routes/Articles";
import { Stock } from "./routes/Stock";
import { Favorite } from "./routes/Favorite";
import { ArticleDetail } from "./routes/ArticleDetail";
import { NotFound } from "./routes/NotFound";
import { ArticleSearch } from "./routes/ArticleSearch";
import { SignUp } from "./routes/SignUp";
import { Login } from "./routes/Login";
import Sample from "./routes/Sample";

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path={`/`} element={<Articles />} />
          <Route path={`/stock`} element={<Stock />} />
          <Route path={`/favorite`} element={<Favorite />} />
          <Route path={`/article/:id`} element={<ArticleDetail />} />
          <Route path={`/article/search`} element={<ArticleSearch />} />
          <Route path={`/login`} element={<Login />} />
          <Route path={`/signUp`} element={<SignUp />} />
          <Route path={`/Sample`} element={<Sample />} />
          <Route path={`*`} element={<NotFound />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}
