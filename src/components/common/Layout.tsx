const Layout = ({ children }: ChildrenProps) => {
  return (
    <div className="bg-slate-100] mx-auto w-full">
      <div className="mx-auto h-screen w-full max-w-[500px] bg-white shadow-xl">{children}</div>
    </div>
  );
};

export default Layout;
