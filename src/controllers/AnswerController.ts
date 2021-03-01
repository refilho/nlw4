import { Request, Response } from 'express';
import { getCustomRepository } from "typeorm";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import { AppError } from "../errors/AppError";

class AnswerController {



    async execute(request: Request, response: Response) {
        const { value } = request.params;
        const { u } = request.query;

        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        const SurveyUser = await surveysUsersRepository.findOne({
            id: String(u)
        });

        if (!SurveyUser) {
            throw new AppError("Survey User does not exists!");
        }

        SurveyUser.value = Number(value);

        await surveysUsersRepository.save(SurveyUser);

        return response.json(SurveyUser);
    }
}

export { AnswerController }
