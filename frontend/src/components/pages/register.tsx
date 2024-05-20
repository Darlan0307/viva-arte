import { Link } from "react-router-dom";
import ImgRegister from "../../assets/img-register.png";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const Register = () => {
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
          <form className="flex flex-col gap-4">
            <Input placeholder="Nome" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Senha" type="password" />
            <Input placeholder="Confirme a senha" type="password" />
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
