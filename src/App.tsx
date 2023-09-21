import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import "./sass/index.scss";
function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
