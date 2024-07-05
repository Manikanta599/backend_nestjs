import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProEntity } from 'src/entities/entity';
import { DetailsDto } from 'src/DTOs/populationdto';
@Injectable()
export class PServiceService {
  constructor(
    @InjectRepository(ProEntity)
    private readonly proRepository: Repository<ProEntity>,
  ) {}

  async getdetails(): Promise<ProEntity[]> {
    console.log("in getdetails service..");
    return this.proRepository.find();
  }

  async count(): Promise<{ totalPop: number }> {
    const result = await this.proRepository.createQueryBuilder('population')
      .select('COUNT(DISTINCT population.email)', 'cnt')
      .getRawOne();
    return { totalPop: result.cnt };
  }

  async savedetails(datalist: DetailsDto[]): Promise<string[]> {
    try {
      const existingEmails = (await this.proRepository.find()).map(entity => entity.email);
  
      const newDataList = datalist
        .filter(data => !existingEmails.includes(data.email))
        .map(data => {
          const { name, village, pincode, email, phno, gender, dob } = data;
          return { name, village, pincode, email, phno, gender, dob } as Partial<ProEntity>;
        });
  
      const savedEntities = await this.proRepository.save(newDataList as ProEntity[]);
  
      const savedNames = savedEntities.map(entity => entity.name);
  
      console.log('Details saved successfully:', savedNames);
      if(savedNames.length>0)
      {
        console.log("records saved")
      }
      else
      {
        console.log("not saved..")
      }
      return savedNames;
    } catch (error) {
      console.error('Error saving details:', error.message);
      throw new Error('Error saving details');
    }
  }
  

  async deleteDetails(id: number): Promise<void> {
    
    try {
      console.log("in delete service.. ",id)
      const result = await this.proRepository.delete(id);
      console.log('Details Deleted successfully:', result);
    } catch (error) {
      console.error('Error deleting details:', error.message);
      throw new Error('Error deleting details');
    }
  }
}
