import Home from "./components/Home";
import NotFound from "./components/NotFound"
import {Route, BrowserRouter, Routes} from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
