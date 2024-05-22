const Course = () => {
  return (
    <div>
      <div className="p-5">
        <h2 className="text-3xl text-center mb-6 font-bold">
          Conheça o nosso curso
        </h2>
        <div className="flex flex-col gap-10 items-center lg:flex-row lg:justify-center">
          <iframe
            className="w-full max-w-[800px] aspect-video rounded-md"
            src="https://www.youtube.com/embed/RXATWtcSDtY?si=plOE_mBhyNhOTFXJ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>

          {/* <div className="w-full max-w-[300px] min-h-[360px] shadow-2xl border border-black border-solid flex flex-col p-5 gap-5 rounded-md">
            <h3 className="text-2xl text-center">
              Adquira o nosso curso de forma{" "}
              <span className="text-primary font-bold">gratuita</span>
            </h3>
            <p className="text-lg">Algumas vantagens que você terá:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Adquirir Habilidades Técnicas.</li>
              <li>Expressão Criativa</li>
              <li>Ambiente Inspirador</li>
              <li>Flexibilidade Nas Aulas</li>
              <li>Comunidade Artistica</li>
              <li>Certificado</li>
            </ul>
            <Button size="lg" className="text-xl">
              Adquira já
            </Button>
          </div> */}

          <div className="w-full max-w-[300px] min-h-[360px] duration-500 group overflow-hidden relative rounded bg-neutral-800 text-neutral-50 p-4 flex flex-col justify-evenly">
            <div className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12"></div>
            <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12"></div>

            <div className="z-10 flex flex-col gap-5 w-full h-full">
              <h3 className="text-2xl text-center font-bold">
                Adquira o nosso curso de forma gratuita
              </h3>
              <p className="text-lg font-bold">
                Algumas vantagens que você terá:
              </p>
              <ul className="list-disc list-inside space-y-2 *:font-bold">
                <li>Adquirir Habilidades Técnicas.</li>
                <li>Expressão Criativa</li>
                <li>Ambiente Inspirador</li>
                <li>Flexibilidade Nas Aulas</li>
                <li>Comunidade Artistica</li>
                <li>Certificado</li>
              </ul>
              <button className="hover:bg-neutral-200 bg-neutral-50 rounded text-neutral-800 font-extrabold w-full p-3 text-xl">
                Adquira já
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
