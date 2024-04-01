type Props = {
  currentStep: number;
};

const ProgressBar = ({ currentStep }: Props) => {
  const percentage = (currentStep / 9) * 100;

  return (
    <div className="flex items-center justify-between gap-[9px]">
      <div className="h-[2.6px] w-full bg-neutral-200">
        <div className="h-[2.4px] bg-indigo" style={{ width: `${percentage}%` }}></div>
      </div>
      <span className="text-sm font-medium text-gray300">
        {currentStep}/{9}
      </span>
    </div>
  );
};

export default ProgressBar;
