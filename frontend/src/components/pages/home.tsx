import { api } from "@/services/api";
import Carrossel from "../carrossel";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { X } from "lucide-react";
import { allQuadros } from "@/db/quadros";
import debounce from "lodash.debounce";
import { QuadroType } from "@/@types/quadro-type";

const Home = () => {
  const [textFilter, setTextFilter] = useState("");
  const [dataQuadro, setDataQuadro] = useState<QuadroType[]>([]);
  const [filteredDataQuadro, setFilteredDataQuadro] = useState<QuadroType[]>(
    []
  );
  const connectBD = async () => {
    await api.get("/");
    setDataQuadro(allQuadros);
    setFilteredDataQuadro(allQuadros);
  };

  useEffect(() => {
    connectBD();
  }, []);

  const handleFilter = debounce((text: string) => {
    if (text) {
      const quadrosFiltred = dataQuadro.filter((quadro) =>
        quadro.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredDataQuadro(quadrosFiltred);
    } else {
      setFilteredDataQuadro(dataQuadro);
    }
  }, 500);

  useEffect(() => {
    handleFilter(textFilter);
  }, [textFilter, handleFilter]);

  return (
    <main className="mb-20">
      <Carrossel />
      <section className="p-5">
        <h2 className="my-6 text-3xl text-center">
          Conheça todas as nossas <span>artes</span>
        </h2>
        <div className="w-full max-w-[500px] flex items-center mx-auto relative">
          <Input
            placeholder="Pesquise um quadro aqui..."
            value={textFilter}
            onChange={(e) => setTextFilter(e.target.value)}
          />
          {textFilter && (
            <button
              className="absolute top-[50%] -translate-y-[50%] right-2 "
              onClick={() => setTextFilter("")}
            >
              <X />
            </button>
          )}
        </div>
      </section>
      <section className="min-h-[30vh] mt-10 px-10 flex flex-wrap items-start justify-center gap-10">
        {filteredDataQuadro.length == 0 && (
          <p className="text-lg text-center">
            Sem resultados para:{" "}
            <span className="text-primary font-bold">{textFilter}</span>
          </p>
        )}
        {filteredDataQuadro.length > 0 &&
          filteredDataQuadro.map((quadro) => (
            <div key={quadro.id}>
              <div className="relative rounded-lg -skew-x-6 -translate-y-2 -translate-y-6 hover:-translate-y-1 hover:-translate-x-0 hover:skew-x-0 duration-500 w-64 h-44 p-2 bg-neutral-50 card-compact hover:bg-base-200 transition-all duration-200 [box-shadow:6px_6px] hover:[box-shadow:4px_4px]">
                <figure className="w-full h-full">
                  <div className="bg-neutral-800 text-neutral-50 min-h-full rounded-lg border border-opacity-5">
                    <img
                      src={quadro.urlImage}
                      alt="teste"
                      className="w-full h-[160px] rounded-lg"
                    />
                  </div>
                </figure>
                <div className="absolute text-neutral-50 bottom-4 left-0 px-4">
                  <h3 className=" w-[200px] text-center text-nowrap text-ellipsis overflow-hidden font-bold bg-primary p-1 rounded-sm">
                    {quadro.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
      </section>
    </main>
  );
};

export default Home;
