
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const App = () => {
  const _routes = useRoutes(routes);
  return (
    <>
      <div className="w-full h-screen">
        {_routes}
      </div>
    </>
  );
};
export default App;
