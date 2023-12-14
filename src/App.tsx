import AuthPage from "@pages/AuthPage";
import { AuthProvider } from "@providers/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <AuthPage></AuthPage>
    </AuthProvider>
  );
}

export default App;
