import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Layout() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <Header />
      <main className="w-full">
        <Outlet />
      </main>

      {/* Small floating bottom bar if needed, but the image shows a clean bottom */}
    </div>
  );
}

