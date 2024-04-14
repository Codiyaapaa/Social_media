import { Routes, Route } from "react-router-dom";
import SigninForm from "./_auto/forms/SigninForm";
import SignupForm from "./_auto/forms/SignupForm";
import { Home } from "./_root/pages";
import "./globals.css";
import AutoLayout from "./_auto/AutoLayout";
import RootLayout from "./_root/RootLayout";
import { Toaster } from "@/components/ui/toaster"


const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public Route*/}
        <Route element={<AutoLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/*private Route*/}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
        
      </Routes>

      <Toaster />
    </main>
  );
};

export default App;
