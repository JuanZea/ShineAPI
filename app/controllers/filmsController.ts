import {Request, Response} from "express";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

module.exports = {

  async index(req: Request, res: Response) {

    let films;
    let title = req.query.contains || '';

      console.log(req.query.contains)

    if (req.query.contains) {

      films = await prisma.film.findMany({
        where: {
          OR: [
            {
              title: {
                contains: title.toString()
              }
            },
            {
              description: {
                contains: title.toString()
              }
            },
            {
              director: {
                contains: title.toString()
              }
            },
            {
              year: {
                contains: title.toString()
              }
            }
          ],
        }
      });

    } else films = await prisma.film.findMany();

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