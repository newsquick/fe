import { createPortal } from 'react-dom';

const Portal = ({ children }: ChildrenProps) => {
  const portalEl = document.getElementById('portal') as HTMLElement;

  return createPortal(children, portalEl);
};

export default Portal;
