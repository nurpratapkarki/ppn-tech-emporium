
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import { AuthProvider } from "@/contexts/AuthContext";
import { CartProvider } from "@/contexts/CartContext";
import { Layout } from "@/components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="ppn-ui-theme">
      <AuthProvider>
        <CartProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="products" element={<Products />} />
                  <Route path="products/:id" element={<ProductDetail />} />
                  <Route path="services" element={<Services />} />
                  <Route path="services/:id" element={<ServiceDetail />} />
                  <Route path="about" element={<About />} />
                  <Route path="contact" element={<Contact />} />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
