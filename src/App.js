import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Screens/Dashboard";
import Home from "./Screens/Home";
import { ThemeProvider } from "./Context/ThemeContext";
import { DashBoardProvider } from "./Context/DashboardOptionContext";
import { OrdersProvider } from "./Context/OrderContext";
import OrderDetailsScreen from "./Screens/OrderDetailsScreen";
import DisputeScreen from "./Screens/DisputeScreen";
import NewOrderScreen from "./Screens/NewOrderScreen";
import UploadARScreen from "./Screens/UploadARScreen";
import MindARViewer from "./mindar-viewer";
// import dotenv from "dotenv";
// dotenv.config();

const clerkFrontendApi = "pk_test_cGlja2VkLXdhbGxhYnktOTQuY2xlcmsuYWNjb3VudHMuZGV2JA";

if (!clerkFrontendApi) {
  console.error("Clerk Publishable Key is not defined. Check your .env file.");
  console.log(process.env)
}

function App() {
  return (
    <ClerkProvider
      publishableKey={clerkFrontendApi}
      signUpFallbackRedirectUrl="/"
      signInFallbackRedirectUrl="/"
    >
      <ThemeProvider>
        <DashBoardProvider>
          <OrdersProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route
                  path="/dashboard/orderDetails"
                  element={<OrderDetailsScreen />}
                />
                <Route
                  path="/dashboard/dispute"
                  element={<DisputeScreen />}
                />
                <Route
                  path="/dashboard/newOrder"
                  element={<NewOrderScreen />}
                />
                <Route
                  path="/dashboard/addARModel"
                  element={<UploadARScreen />}
                />
                <Route
                  path="/qr"
                  element={
                    <MindARViewer modelUrl="https://modelviewer.dev/shared-assets/models/Astronaut.glb" />
                  }
                />
              </Routes>
            </BrowserRouter>
          </OrdersProvider>
        </DashBoardProvider>
      </ThemeProvider>
    </ClerkProvider>
  );
}

export default App;
