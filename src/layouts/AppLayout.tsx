import NavBar from "@/components/Shared/NavBar";

const AppLayout = ({ children }: any) => {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</main>
    </>
  );
};

export default AppLayout;
