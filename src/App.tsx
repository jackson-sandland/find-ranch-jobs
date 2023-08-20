import { AppThemeProvider } from "src/theme";
import { AppStore } from "src/store";
import { ErrorBoundary } from "src/components";
import Routes from "src/routes";

/**
 * Root Application Component
 * @component MainApp
 */
const MainApp = () => {
  return (
    <ErrorBoundary name="App">
      <AppStore>
        <AppThemeProvider>
          <Routes />
        </AppThemeProvider>
      </AppStore>
    </ErrorBoundary>
  );
};

export default MainApp;
