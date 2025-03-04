import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignUpPage from "./pages/signup/SignUpPage";
import SignInPage from "./pages/SignInPage";
import AddAccountPage from "./pages/AddAccountPage";
import SendMoneyPage from "./pages/SendMoneyPage";
import HomePage from "./pages/HomePage";
import EmailVerificationPage from "./pages/signup/EmailVerificationPage";
import EmailVerifiedPage from "./pages/signup/EmailVerifiedPage";
import { useState } from "react";
import { AppContext } from "./AppContext";
import { useSelector } from "react-redux";

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(useSelector((state) => state?.user?.data?.isLoggedIn) || false);
    const [isVerified, setIsVerified] = useState(useSelector((state) => state?.user?.data?.isVerified) || false);
    
    return (
        <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn, isVerified, setIsVerified }} >
            <BrowserRouter>
                <Routes>
                    <Route path="/signup" element={isLoggedIn ? <Navigate to="/" /> : <SignUpPage />} />
                    <Route path="/verifyEmail" element={<EmailVerificationPage />} />
                    <Route path="/emailVerified" element={<EmailVerifiedPage />} />
                    <Route path="/signin" element={isLoggedIn ? <Navigate to="/" /> : <SignInPage />} />
                    <Route path="/" element={isLoggedIn ? <HomePage /> : <Navigate to="/signin" />} />
                    <Route path="/addAccount" element={isLoggedIn ? <AddAccountPage /> : <Navigate to="/signin" />} />
                    <Route path="/sendMoney" element={<SendMoneyPage />} />
                </Routes>
            </BrowserRouter>
        </AppContext.Provider>
    );
}

export default App;