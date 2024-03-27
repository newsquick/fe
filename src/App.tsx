import { RecoilRoot } from 'recoil';

import Router from './routes/Router';

const App = () => {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
};

export default App;
