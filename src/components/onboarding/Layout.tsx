const Layout = ({ children }: ChildrenProps) => {
  return <div className="flex flex-col justify-between w-full h-full px-6 mx-auto pb-9">{children}</div>;
};

export default Layout;
