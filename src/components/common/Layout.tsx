const Layout = ({ children }: ChildrenProps) => {
  return (
    <div className="mx-auto h-screen w-full bg-slate-100">
      <div className="mx-auto h-full w-full max-w-[500px] bg-white shadow-xl">{children}</div>
    </div>
  );
};

export default Layout;
