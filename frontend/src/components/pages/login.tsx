import { Link } from "react-router-dom";
import ImgLogin from "../../assets/img-login.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Login = () => {
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
          <form className="flex flex-col gap-4">
            <Input placeholder="Email" type="email" />
            <Input placeholder="Senha" type="password" />
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
