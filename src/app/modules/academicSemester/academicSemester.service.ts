import { Request } from "express"
import { CoreService as httpService} from "../../../shared/axios"
import { IGenericResponse } from "../../../interfaces/common"


const insertIntoDB = async (req:Request) : Promise<IGenericResponse>=> {
   const response: IGenericResponse = await httpService.post("/academic-semesters", req.body,{
    headers:{
      Authorization: req.headers.authorization
    }
   })
   return response
}

const getAllFromDB = async (req:Request) : Promise<IGenericResponse>=> {
   console.log(req.query)
   const response: IGenericResponse = await httpService.get("/academic-semesters", {
    params: req.query,
   })
   return response
}

const getDataById = async (req:Request) : Promise<IGenericResponse>=> {
  const {id} = req.params;
  const response: IGenericResponse = await httpService.get(`/academic-semesters/${id}`,{
    headers:{
      Authorization: req.headers.authorization
    }
  })
  return response
}

const updateOneIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const { id } = req.params;
  const response: IGenericResponse = await httpService.patch(`/academic-semesters/${id}`, req.body, {
      headers: {
          Authorization: req.headers.authorization
      }
  })
  return response;
};

export const academicSemesterService = {
  insertIntoDB,
  getAllFromDB,
  getDataById,
  updateOneIntoDB
}