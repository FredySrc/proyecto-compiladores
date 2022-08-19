import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const directory = async (req, res) => {
  const especialidades = await prisma.especialidad.findMany();

  res.render("directory/directory", { especialidades: especialidades });
};

const details = async (req, res) => {
  const especialistas = await prisma.doctor.findMany({
    include: {
      usuario: {
        select: {
          usuarioNombre: true,
        },
      },
    },
    where: {
      especialidad: {
        especialidadNombre: {
          equals: req.params.id,
        },
      },
    },
  });

  res.render("directory/details", { especialistas: especialistas });
  console.log(especialistas);
};

export { directory, details };
