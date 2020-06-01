import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Davi Hoffmann',  email: 'davi@davihoffmann.com.br'},
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: { 
        name: 'Davi Hoffmann', 
        email: 'davi@teste.com.br' 
      },
      message: { 
        subject: 'Brincando com TypeScript', 
        body: 'Brincando com o ts' 
      }
    });

    return res.send();
  }
};