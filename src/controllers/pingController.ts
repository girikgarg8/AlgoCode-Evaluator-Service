import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const pingCheck = (_req : Request, res: Response) => {
    res.status(StatusCodes.OK).json({message: "Ping check OK"});
};