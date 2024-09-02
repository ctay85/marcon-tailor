import { ScrollAnimProvider } from "@/components/ScrollAnimProvider";
import { ToastProvider } from "@/components/ToastProvider";
import { SubFooter } from "@/components/SubFooter";
import { Footer } from "@/components/Footer";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ScrollAnimProvider>
        <ToastProvider>
          {children}
          <SubFooter />
          <Footer />
        </ToastProvider>
      </ScrollAnimProvider>
    </div>
  );
}

