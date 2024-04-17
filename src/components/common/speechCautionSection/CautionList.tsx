import { CAUTION_CATEGORIES } from 'constants/index';

const CautionList = () => {
  return (
    <div className="mb-[28px]">
      {CAUTION_CATEGORIES.map((el, index) => (
        <div className="mb-4 w-full rounded-[10px] bg-gray200 px-4 py-[29px] opacity-70" key={index}>
          <div className="mb-[6px] text-base font-bold text-black">{el.title}</div>
          <ul className="list-disc pl-4">
            {el.description.map((desc, descIndex) => (
              <li className="mt-[12px] text-[14px] leading-[163%] tracking-[-0.5px]" key={descIndex}>
                {desc}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CautionList;
