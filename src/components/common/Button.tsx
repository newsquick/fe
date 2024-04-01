type Props = {
  children: string;
  disabled?: any;
  ga?: string;
  onClick?: any;
};

const Button = ({ children, disabled, ga, onClick }: Props) => {
  return (
    <button
      className="flex h-[55px] w-full items-center justify-center rounded-[10px] bg-gray900 text-[17px] font-bold text-white disabled:bg-gray-400"
      disabled={disabled}
      data-ga={ga}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
