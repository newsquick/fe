type Props = {
  onSave: () => void;
};

const SaveImageButton = ({ onSave }: Props) => {
  return (
    <button
      className="flex h-[55px] w-full items-center justify-center rounded-[10px] bg-white font-bold  text-gray-900"
      onClick={onSave}
    >
      이미지로 저장하기
    </button>
  );
};

export default SaveImageButton;
