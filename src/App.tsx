import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import AddAccountPage from "./pages/AddAccountPage";
import SendMoneyPage from "./pages/SendMoneyPage";
import HomePage from "./pages/HomePage";
import EmailVerificationComponent from "./components/signup/EmailVerificationComponent";
import EmailVerifiedComponent from "./components/signup/EmailVerifiedComponent";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/verifyEmail" element={<EmailVerificationComponent />} />
                <Route path="/emailVerified" element={<EmailVerifiedComponent />} />
                <Route path="/login" element={<SignInPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/addAccount" element={<AddAccountPage />} />
                <Route path="/sendMoney" element={<SendMoneyPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;