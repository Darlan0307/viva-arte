const Course = () => {
  return (
    <div>
      <div className="p-5">
        <h2 className="text-3xl text-center mb-6">Conheça o nosso curso</h2>
        <iframe
          className="w-full max-w-[1000px] aspect-video mx-auto rounded-md"
          src="https://www.youtube.com/embed/7_bn-LucN0M?si=VaO2CUHtDHTpZLjn"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Course;
