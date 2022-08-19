import { PrismaClient } from "@prisma/client";

const formLogin = (req, res) => {
  res.render("auth/login", {
    active: true,
  });
};

const formRegister = (req, res) => {
  res.render("auth/register", {
    active: false,
  });
};

const createUser = async (req, resp) => {
  const prisma = new PrismaClient();

  const usuario = await prisma.usuario.create({
    data: {
      usuarioNombre: req.body.fname,
      usuarioApellido: req.body.lname,
      usuarioCorreo: req.body.euser,
      usuarioContrasena: req.body.pemail,
    },
  });
  resp.redirect("/");
};

const validUser = async (req, resp) => {
    const prisma = new PrismaClient();
    
    const usuario = await prisma.usuario.findFirst({
        select: {
            usuarioNombre: true,
            usuarioContrasena: true
        },
        where: {
            usuarioCorreo: {
                equals: req.body.euser,
            },
            usuarioContrasena: {
                equals: req.body.pemail,
            }
        }
    })
    console.log(usuario)
    if(usuario) {
        resp.redirect("/");
    }
    resp.redirect("/auth/login");
};

export { formLogin, formRegister, createUser, validUser };
