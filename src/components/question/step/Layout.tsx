type Props = {
  type?: 'input' | 'button';
  children: React.ReactNode;
};

const Layout = ({ type = 'input', children }: Props) => {
  return (
    <div className={`flex h-full w-full flex-col ${type === 'input' ? 'justify-between' : ''}`}>
      {children}
    </div>
  );
};

export default Layout;
