import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import AppLayout from "./layout/AppLayout";
import Loader from "./loader/Loader";

const Home = lazy(() => import("./pages/Dashboard"));
const Setting = lazy(() => import("./pages/Setting"));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="setting" element={<Setting />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}
