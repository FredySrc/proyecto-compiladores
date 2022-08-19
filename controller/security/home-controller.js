import { PrismaClient } from '@prisma/client';

const index = async(req, res) => {
    const prisma = new PrismaClient()
    const especialidades = await prisma.especialidad.findMany();

    res.render("index", {especialidades: especialidades})
}

const about = async(req, res) => {
    res.render("about");
}

export { index, about }