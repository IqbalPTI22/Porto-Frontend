import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { StatusMessage } from "./components/ui/StatusMessage";

const HomePage = lazy(() => import("./pages/HomePage"));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto flex min-h-screen max-w-6xl items-center justify-center px-6">
          <StatusMessage
            title="Loading portfolio"
            message="Preparing sections..."
          />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
