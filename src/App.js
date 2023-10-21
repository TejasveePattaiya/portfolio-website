import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import routes from "./routes";

function App() {

  const getRoutes = (allRoutes) =>
  allRoutes.map((route) => {
    if (route.collapse) {
      return getRoutes(route.collapse);
    }

    if (route.route) {
      return (
        <Route
          exact
          path={route.route}
          element={route.component}
          key={route.key}
        />
      );
    }

    return null;
  });
  return (
    <>
      <Layout>
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
