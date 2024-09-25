interface Props {
  cardImage: string;
  title: string;
  tag: string;
  modify?: string;
}

const Media = ({ cardImage, title, tag, modify }: Props) => {
  return (
    <div
      className={`w-[280px] h-[267px] bg-white rounded-lg flex flex-col items-center px-[32px] py-[41px] relative ${modify}`}
    >
      <div className="bg-[#3A3054] w-[88px] h-[88px] rounded-full flex flex-col items-center justify-center absolute bottom-56">
        <img
          src={cardImage}
          alt="brand recognition logo"
          className="w-[40px] h-[40px]"
        />
      </div>

      <h3 className="text-[22px] font-bold text-[#34313D] mt-10 mb-3 capitalize">
        {title}
      </h3>

      <p className="text-[#9E9AA8] text-center">{tag}</p>
    </div>
  );
};
export default Media;
