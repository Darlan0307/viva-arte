import { UserType } from "@/@types/user-type";
import { toast } from "react-toastify";

interface ValidateProps {
  DataUser: UserType;
}

function validarEmail(email: string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function ValidateDataForm({ DataUser }: ValidateProps): boolean {
  if (DataUser.name) {
    if (DataUser.name.length < 3) {
      toast.warning("Nome muito curto");
      return false;
    }
  }

  if (!validarEmail(DataUser.email)) {
    toast.warning("Email inválido");
    return false;
  }

  if (DataUser.password.length < 6) {
    toast.warning("Senha muito curta");
    return false;
  }

  if (DataUser.confirm_password) {
    if (DataUser.password != DataUser.confirm_password) {
      toast.warning("As senhas não são iguais");
      return false;
    }
  }

  return true;
}
