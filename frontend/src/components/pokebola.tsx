const Pokebola = () => {
  return (
    <div className="my-6 w-[300px] h-[300px] rounded-full border-[10px] border-solid border-black mx-auto bg-[#f7f7f7] relative">
      <div className="w-full h-[50%] bg-[#e61b23] rounded-se-full rounded-ss-full"></div>
      <div className="w-full h-[50%] bg-[#f7f7f7] rounded-ee-full rounded-es-full"></div>
      <div className="absolute top-[50%] -translate-y-[50%] bg-black w-full h-[10px] z-10 "></div>
      <div className="absolute top-[50%] -translate-y-[50%] bg-white rounded-full w-[50px]  h-[50px] z-20 left-[50%] -translate-x-[50%] border-[8px] border-solid border-black"></div>
    </div>
  );
};

export default Pokebola;
