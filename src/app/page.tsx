import Dashboard from "@/components/dashboard";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Dashboard />
      <Toaster position="top-right" richColors />
    </main>
  );
}
