import { Link } from "react-router-dom";
import ImgRegister from "../../assets/img-register.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import { ValidateDataForm } from "@/utils/validate-data-form";
import { UserType } from "@/@types/user-type";
import { toast } from "react-toastify";
import Loader from "../loader";
import { api } from "@/services/api";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const DataUser: UserType = {
      name,
      email,
      password,
      confirm_password: confirmPassword,
    };

    const isDataValid = ValidateDataForm({ DataUser });

    if (!isDataValid) return;

    try {
      const response = await api.post("/register", { DataUser });

      console.log(response);
      setIsLoading(false);
      toast.success("Usuário cadastrado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="md:h-[70vh] grid place-content-center">
      <h1 className="text-3xl text-center my-6">Faça o seu cadastro agora!</h1>
      <div className="flex flex-col gap-5 items-center justify-center w-full max-w-[1200px] mx-auto p-5 md:flex-row  ">
        <img
          src={ImgRegister}
          alt="ilustração de uma pessoa se cadastrando"
          className="w-full md:max-w-[50%]"
        />
        <div className="space-y-5">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <Input
              placeholder="Nome"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Senha"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              placeholder="Confirme a senha"
              type="password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button type="submit" className="text-lg">
              Cadastrar
            </Button>
          </form>
          <p className="text-center ">
            Ja tem uma conta?{" "}
            <Link to="/login" className="underline text-primary">
              faça login
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
