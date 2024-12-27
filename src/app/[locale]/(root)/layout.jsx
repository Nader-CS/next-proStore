import Footer from "@/components/common/footer";
import Header from "@/components/common/header";

const RootLayout = ({ children }) => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <main className="flex-1 wrapper">{children}</main>
      <Footer />
    </div>
  );
};

export default RootLayout;
