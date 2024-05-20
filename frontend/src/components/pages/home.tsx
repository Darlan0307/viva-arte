import { api } from "@/services/api";
import Carrossel from "../carrossel";
import { useEffect } from "react";

const Home = () => {
  const connectBD = async () => {
    const response = await api.get("/");
    console.log(response);
  };

  useEffect(() => {
    connectBD();
  }, []);

  return (
    <main>
      <Carrossel />
    </main>
  );
};

export default Home;
