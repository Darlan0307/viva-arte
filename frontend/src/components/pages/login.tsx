import { Link } from "react-router-dom";
import ImgLogin from "../../assets/img-login.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import { ValidateDataForm } from "@/utils/validate-data-form";
import { toast } from "react-toastify";
import { UserType } from "@/@types/user-type";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const DataUser: UserType = {
      email,
      password,
    };

    const isDataValid = ValidateDataForm({ DataUser });

    if (!isDataValid) return;

    toast.success("Usuário cadastrado com sucesso!");
  };

  return (
    <div className="md:h-[70vh] grid place-content-center">
      <h1 className="text-3xl text-center my-6">Entre com a sua conta</h1>
      <div className="flex flex-col gap-5 items-center justify-center w-full max-w-[1200px] mx-auto p-5 md:flex-row  ">
        <img
          src={ImgLogin}
          alt="ilustração de uma pessoa entrando em casa"
          className="w-full md:max-w-[50%]"
        />
        <div className="space-y-5">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
            <Button type="submit" className="text-lg">
              Cadastrar
            </Button>
          </form>
          <p className="text-center ">
            Não tem uma conta?{" "}
            <Link to="/register" className="underline text-primary">
              crie agora!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
