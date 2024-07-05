import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PServiceService } from './p_service/p_service.service'; 
import { PControllerController } from './p_controller/p_controller.controller';
import { ProEntity } from './entities/entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'api',
      entities: [ProEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([ProEntity])
    
  ],
  controllers: [PControllerController],
  providers: [PServiceService],
})
export class AppModule {}
