import type { UseFormRegisterReturn } from 'react-hook-form';

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  register?: UseFormRegisterReturn;
  error?: string;
  id: string;
  maxLength: number;
  counter: number;
};

const Textarea = ({ register, error, id, maxLength, counter, ...rest }: Props) => {
  return (
    <>
      <label className="relative flex flex-col gap-3" htmlFor={id}>
        <div className="h-[200px] w-full rounded-[5px] bg-gray100 pt-[15px]">
          <textarea
            {...register}
            {...rest}
            id={id}
            className="h-[159px] w-full resize-none bg-gray100 pl-[16px] pr-[35px]  text-[15px] leading-[150%] tracking-[-0.5px] text-gray900 placeholder-gray500 focus:outline-none"
            maxLength={maxLength}
          />
          <span className="absolute bottom-2.5 right-3.5 mt-[30px]  text-[14px] tracking-[-0.3px] text-gray400">
            {counter}/{maxLength}자
          </span>
        </div>
      </label>
      {error && <p>{error}</p>}
    </>
  );
};

export default Textarea;
