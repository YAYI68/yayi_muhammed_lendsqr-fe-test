import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import "./sass/index.scss";
import { useEffect } from "react";
import { storeUserData } from "./db";
function App() {
  useEffect(() => {
    (async () => {
      await storeUserData();
    })();
  }, []);
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
