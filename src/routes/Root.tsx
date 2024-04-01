import Layout from 'components/common/Layout';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
};

export default Root;
