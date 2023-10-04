import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header";
import { Home } from "./routes/Home";
import { Stock } from "./routes/Stock";
import { Favorite } from "./routes/Favorite";
import { NotFound } from "./routes/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Routes>
          <Route path={`/home`} element={<Home />} />
          <Route path={`/stock`} element={<Stock />} />
          <Route path={`/favorite`} element={<Favorite />} />
          <Route path={`/*/`} element={<NotFound />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}
