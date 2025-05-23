import { NextFunction, Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import UserService from '../services/user.service';

export const getAllUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await UserService.find();

    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    });
  }
);
