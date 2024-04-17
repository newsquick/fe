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
        className="options-gray500 h-[55px] w-full rounded-[5px] bg-gray100 p-4  text-[17px] tracking-[-0.3px] text-gray900 caret-indigo outline-indigo"
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
