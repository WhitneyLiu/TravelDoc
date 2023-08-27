import LandingPage from "./components/pages/landing-page/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route index element={<LandingPage />} />
            {/* <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="password-recover" element={<PasswordRecoverPage />} />
            <Route path="home" element={<Home />}>
              <Route />
              <Route />
            </Route>
            <Route path="test" element={<Test />} /> */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
