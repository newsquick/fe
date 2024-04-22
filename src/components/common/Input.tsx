import type { UseFormRegisterReturn } from 'react-hook-form';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  register?: UseFormRegisterReturn;
  error?: string;
};

const Input = ({ register, error, ...rest }: Props) => {
  return (
    <>
      <input
        {...register}
        {...rest}
        className={`options-gray500 h-[55px] w-full rounded-[5px] bg-gray100 p-4 text-[17px] tracking-[-0.3px] text-gray900 focus:outline-none border-[1.8px]
        ${error === undefined ? 'border-transparent focus:border-indigo' : 'border-red-400'}
        border-[2px]`}
      />
      {error && <p className="mt-1 ml-1 text-sm text-red-500">{error}</p>}
    </>
  );
};

export default Input;
