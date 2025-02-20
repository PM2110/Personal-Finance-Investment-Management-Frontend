import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/signup/SignUpPage";
import SignInPage from "./pages/SignInPage";
import AddAccountPage from "./pages/AddAccountPage";
import SendMoneyPage from "./pages/SendMoneyPage";
import HomePage from "./pages/HomePage";
import EmailVerificationPage from "./pages/signup/EmailVerificationPage";
import EmailVerifiedPage from "./pages/signup/EmailVerifiedPage";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/verifyEmail" element={<EmailVerificationPage />} />
                <Route path="/emailVerified" element={<EmailVerifiedPage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/addAccount" element={<AddAccountPage />} />
                <Route path="/sendMoney" element={<SendMoneyPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;