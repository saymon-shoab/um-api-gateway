import { z } from 'zod';
import { academicSemesterCodes, academicSemesterMonths, academicSemesterTitles } from './academicSemester.constant';

const create = z.object({
  body: z.object({
    year: z.number({
      required_error: 'year is required',
    }),
    title: z.enum([...academicSemesterTitles] as [string],{
      required_error: ' Title is Required',
    }),
    code: z.enum([...academicSemesterCodes] as [string],{
      required_error: 'Code is Required',
    }),
    startMonth: z.enum([...academicSemesterMonths] as[string],{
      required_error: 'Start month is required',
    }),
    endMonth: z.enum([...academicSemesterMonths] as[string],{
      required_error: 'End month is required',
    }),
  }),
});


const update = z.object({
  body: z.object({
      title: z.enum([...academicSemesterTitles] as [string]).optional(),
      code: z.enum([...academicSemesterCodes] as [string]).optional(),
      year: z.number().optional(),
      startMonth: z.enum([...academicSemesterMonths] as [string]).optional(),
      endMonth: z.enum([...academicSemesterMonths] as [string]).optional()
  })
});



export const academicSemesterValidation = {
  create,
  update
};
