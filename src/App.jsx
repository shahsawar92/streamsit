import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/router/routes";

function App() {
  return (
    <>
      <div className='absolute w-full top-0'>
        <Router>
          <AppRoutes />
        </Router>
      </div>
    </>
  );
}

export default App;
