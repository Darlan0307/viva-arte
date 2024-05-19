import { prisma } from "../services/prisma.js";
import bcrypt from "bcryptjs";

export class UserController {
  async createUser(req, res) {
    try {
      const { name, email, password } = req.body;

      // Verificando se user ja existe
      const userExists = await prisma.user.findUnique({ where: { email } });

      if (userExists)
        return res
          .status(401)
          .json({ message: "Email ja existe no nosso banco de dados" });

      // Criptografando a senha
      const hash_password = (await bcrypt.hash(password, 8)).toString();

      await prisma.user.create({
        data: {
          name,
          email,
          password: hash_password,
        },
      });

      res.status(200).json({ message: "Cadastrado com sucesso!" });
    } catch (error) {
      return res.json({ message: "Erro ao tentar acessar o banco de dados" });
    }
  }

  async authUser(req, res) {
    try {
      const { email, password } = req.body;

      // Verificando email
      const userExists = await prisma.user.findUnique({ where: { email } });

      if (!userExists)
        return res.status(401).json({ message: "E-mail inválido" });

      // Verificando senha
      const isValuePassword = await bcrypt.compare(
        password,
        userExists.password
      );

      if (!isValuePassword)
        return res.status(401).json({ message: "Senha inválida" });

      res
        .status(200)
        .json({ message: `Bem vindo(a) de volta ${userExists.name}` });
    } catch (error) {
      return res.json({ message: "Erro ao tentar acessar o banco de dados" });
    }
  }
}
