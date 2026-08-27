import "./global.css";
import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index, { ContactPage, PrivacyPage, SectionPage } from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
const pages = [
  ["socials", "Socials", "Verbinde dich mit xJanne und entdecke neue Seiten der Community."],
  ["projekte", "Projekte", "Ideen werden Räume. Entdecke die laufenden Projekte von xJanne."],
  ["stream", "Stream", "Live, direkt und ohne Filter. Alle Streams auf einen Blick."],
  ["kunst", "Kunst", "Farbe, Form und Fantasie — ein visuelles Archiv von xJanne."],
  ["musik", "Musik", "Sounds für Tagträumer, Nachtschwärmer und alle dazwischen."],
  ["arcanimals", "Arcanimals", "Magische Wesen aus einer Welt zwischen Natur und Mythos."],
] as const;

const App = () => <QueryClientProvider client={queryClient}><TooltipProvider><Toaster /><Sonner /><BrowserRouter><Routes><Route path="/" element={<Index />} /><Route path="/contact" element={<ContactPage />} /><Route path="/datenschutz" element={<PrivacyPage />} />{pages.map(([path, title, subtitle]) => <Route key={path} path={`/${path}`} element={<SectionPage title={title} subtitle={subtitle} />} />)}<Route path="*" element={<NotFound />} /></Routes></BrowserRouter></TooltipProvider></QueryClientProvider>;
createRoot(document.getElementById("root")!).render(<App />);
