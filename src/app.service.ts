import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getEmployment(id: string) {
    if (id !== 'Employment_12345678') {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'No employment found',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const result = {
      employmentOnProbration: 'No',
      employmentStarDate: '01/01/2018',
      employmentOccupation: 'Nurse',
      employmentEndDate: '02/02/2022',
    };

    return result;
  }
}
