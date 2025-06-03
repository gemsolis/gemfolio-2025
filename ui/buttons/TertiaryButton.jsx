const TertiaryButton = ({ title, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      className="bg-black text-sm border-white border text-white py-2 px-2  rounded-md hover:scale-110 duration-300 cursor-pointer flex gap-2 items-center"
    >
      <span className="text-white">{title}</span>
    </a>
  );
};

export default TertiaryButton;
