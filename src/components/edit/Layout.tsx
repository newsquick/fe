const Layout = ({ children }: ChildrenProps) => {
  return <div className="flex h-screen flex-col items-center bg-gradient bg-cover px-6 pb-9">{children}</div>;
};

export default Layout;
