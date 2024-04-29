import { ROUTES_PATH } from 'constants/routes';
import { Link } from 'react-router-dom';

import Button from './Button';

type Props = {
  path: keyof typeof ROUTES_PATH;
  text: string;
  ga: string;
};

const NavigateButton = ({ path, text, ga }: Props) => {
  return (
    <Link to={ROUTES_PATH[path]}>
      <Button ga={ga}>{text}</Button>
    </Link>
  );
};

export default NavigateButton;
