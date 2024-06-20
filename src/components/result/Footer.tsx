import Logo from 'assets/svg/logo.svg?react';

const Footer = () => {
  return (
    <div className="bg-gray200 px-6 pb-[44px] pt-[35px]">
      <div className="mb-[15px] flex flex-col">
        <Logo opacity={0.7} width={76} />
        <div>
          <span className="text-[13px] font-medium text-[#7A828B]">EMAIL</span>
          <span className="mx-[3px] text-[13px] font-medium text-[#7A828B]">:</span>
          <a
            className="text-[13px] text-[#7A828B] underline underline-offset-2"
            href="mailto:bloom.wedding.cs@gmail.com"
            data-ga="result_cs"
          >
            bloom.wedding.cs@gmail.com
          </a>
        </div>
      </div>
      <div className="border-t pt-[15px]">
        <p className="text-[11px] text-[#B2B7BE]">©Bloom. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
