import { PServiceService } from 'src/p_service/p_service.service';
import { Response } from 'express';
import { DetailsDto } from 'src/DTOs/populationdto';
export declare class PControllerController {
    private readonly pService;
    constructor(pService: PServiceService);
    getDetails(res: Response): Promise<void>;
    getDetailsf(q: string, res: Response): Promise<void>;
    getCount(res: Response): Promise<void>;
    saveDetails(datalist: DetailsDto[], res: Response): Promise<Response<any, Record<string, any>>>;
    deleteDetails(id: number, res: Response): Promise<void>;
}
