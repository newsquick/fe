const Layout = ({ children }: ChildrenProps) => {
  return (
    <div className="relative h-screen w-full bg-[url('/assets/bg_home.png')] bg-cover px-6 pb-9">
      {children}
    </div>
  );
};

export default Layout;
