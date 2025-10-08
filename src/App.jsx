import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TransactionsProvider } from "./contexts/TransactionsContextProvider";
import { AuthProvider } from "./contexts/AuthContextProvider";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  return (
    <AuthProvider>
      <TransactionsProvider>
        <Router>
          <AppRoutes />
        </Router>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </TransactionsProvider>
    </AuthProvider>
  );
}

export default App;
