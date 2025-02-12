import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import AddAccountPage from "./pages/AddAccountPage";
import SendMoneyPage from "./pages/SendMoneyPage";

const App = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignUpPage />} />
            <Route path="/login" element={<SignInPage />} />
            <Route path="/addAccount" element={<AddAccountPage />} />
            <Route path="/sendMoney" element={<SendMoneyPage />} />
          </Routes>
      </BrowserRouter>
    );
}

export default App;