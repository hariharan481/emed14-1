import { BrowserRouter, Route, Routes } from "react-router-dom";
import Acc from "./components/Acc";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

import { ZeroWidthStack } from "./components/ZeroWidthStack";
import Codenotes from "./components/Codenotes";
import CustomizedTables from "./components/Indextable";
import { AtozTabs } from "./components/AtozTabs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>

        <AtozTabs />
      </BrowserRouter>
    </>
  );
}

export default App;
