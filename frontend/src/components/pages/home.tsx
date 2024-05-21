import { api } from "@/services/api";
import Carrossel from "../carrossel";
import { useEffect } from "react";

const Home = () => {
  const connectBD = async () => {
    await api.get("/");
  };

  useEffect(() => {
    connectBD();
  }, []);

  return (
    <main className="mb-20">
      <Carrossel />
    </main>
  );
};

export default Home;
