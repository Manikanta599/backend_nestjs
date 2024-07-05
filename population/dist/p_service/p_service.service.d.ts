import { Repository } from 'typeorm';
import { ProEntity } from 'src/entities/entity';
import { DetailsDto } from 'src/DTOs/populationdto';
export declare class PServiceService {
    private readonly proRepository;
    constructor(proRepository: Repository<ProEntity>);
    getdetails(): Promise<ProEntity[]>;
    count(): Promise<{
        totalPop: number;
    }>;
    savedetails(datalist: DetailsDto[]): Promise<string[]>;
    deleteDetails(id: number): Promise<void>;
}
