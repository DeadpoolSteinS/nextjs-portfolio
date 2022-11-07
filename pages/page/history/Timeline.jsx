const Timeline = (props) => {
  return (
    <div className="relative py-5 before:conten-[''] before:bg-[#474559] before:w-[2px] before:h-full before:absolute before:left-9 last:before:h-0">
      <div className="absolute w-[75px] h-[75px] bg-[#474559] rounded-full leading-[75px] text-center">
        <p className="text-white font-bold">{props.year}</p>
      </div>
      <div className="ml-24">
        <p className="font-bold">{props.title}</p>
        <p>{props.desc}</p>
      </div>
    </div>
  );
};

export default Timeline;
