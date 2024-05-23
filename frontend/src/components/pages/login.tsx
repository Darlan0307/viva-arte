/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from "react-router-dom";
import ImgLogin from "../../assets/img-login.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FormEvent, useState } from "react";
import { ValidateDataForm } from "@/utils/validate-data-form";
import { toast } from "react-toastify";
import { UserType } from "@/@types/user-type";
import { api } from "@/services/api";
import Loader from "../loader";
import { useAuth } from "@/context/auth-provider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { handleEmailUser } = useAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const DataUser: UserType = {
      email,
      password,
    };

    const isDataValid = ValidateDataForm({ DataUser });

    if (!isDataValid) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await api.post("/login", DataUser);

      if (response.status == 200) {
        toast.success(response.data.message);

        handleEmailUser(DataUser.email);
        setEmail("");
        setPassword("");
        navigate("/course");
      } else if (response.status == 401) {
        toast.warning(response.data.message);
      }
    } catch (error: any) {
      toast.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="md:h-[70vh] grid place-content-center">
      <h1 className="text-3xl text-center my-6 font-bold">Entre com a sua conta</h1>
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
