const Layout = ({ children }: ChildrenProps) => {
  return <div className="mx-auto flex h-full w-full flex-col justify-between px-6 py-9">{children}</div>;
};

export default Layout;
