import { api } from "@/services/api";
import Carrossel from "../carrossel";
import { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { X } from "lucide-react";

const Home = () => {
  const [textFilter, setTextFilter] = useState("");

  const connectBD = async () => {
    await api.get("/");
  };

  useEffect(() => {
    connectBD();
  }, []);

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
          <button className="absolute top-[50%] -translate-y-[50%] right-2 ">
            <X />
          </button>
        </div>
      </section>
    </main>
  );
};

export default Home;
