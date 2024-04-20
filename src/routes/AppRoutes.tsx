import React, { Suspense } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

const Home = React.lazy(() => import("pages/Home"));

const AppRoutes: React.FC = () => (
  // <Suspense fallback={<Loader loading />}> // TODO: add fallback loader here
  <Suspense>
    <Router>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  </Suspense>
);

export default React.memo(AppRoutes);
