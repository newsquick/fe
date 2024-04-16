import EditHeader from 'components/edit/EditHeader';
import EditSection from 'components/edit/EditSection';
import Layout from 'components/edit/Layout';
import ResultTitle from 'components/result/resultSection/ResultTitle';
import useInput from 'hooks/useInput';
import usePutMessage from 'hooks/apis/usePutMessage';
import { useLocation } from 'react-router-dom';

const Edit = () => {
  const { result, id, name } = useLocation().state;
  const [value, handleChange] = useInput(result);
  const { handleUpdate } = usePutMessage(id, value);

  return (
    <Layout>
      <EditHeader onUpdate={handleUpdate} />
      <ResultTitle name={name} />
      <EditSection value={value} onChange={handleChange} />
    </Layout>
  );
};

export default Edit;
