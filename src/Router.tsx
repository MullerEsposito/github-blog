import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { PostDetail } from "./pages/PostDetail";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post">
          <Route path=":id" element={<PostDetail />} />
        </Route>
      </Route>
    </Routes>
  );
}
