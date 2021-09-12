import {Request, Response} from "express";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

module.exports = {

  async index(req: Request, res: Response) {
    const films = await prisma.film.findMany();

    let response = {
      status: 200,
      data: films,
    }

    res.json(response);
  },

  async show(req: Request, res: Response) {
    const film = await prisma.film.findUnique({
      where: {
        id: +req.params.id,
      },
    });

    let response = {
      status: 201,
      data: film,
    }

    res.status(201).json(response);
  },

  async store(req: Request, res: Response) {
    const film = await prisma.film.create({
      data: req.body
    });

    let response = {
      status: 201,
      data: film,
    }

    res.status(201).json(response);
  },

}