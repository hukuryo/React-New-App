import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Articles } from "./routes/Articles";
import { Stock } from "./routes/Stock";
import { Favorite } from "./routes/Favorite";
import { ArticleDetail } from "./routes/ArticleDetail";
import { NotFound } from "./routes/NotFound";

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
          <Route path={`/*/`} element={<NotFound />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}
