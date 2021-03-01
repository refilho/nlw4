import { EntityRepository, Repository } from "typeorm";
import { Survey } from "../models/Survey";
import { SurveyUser } from "../models/SurveyUser";

@EntityRepository(SurveyUser)
class SurveysUsersRepository extends Repository<SurveyUser> { }

export { SurveysUsersRepository }
