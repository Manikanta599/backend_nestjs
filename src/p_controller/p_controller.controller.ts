import { Controller, Delete, Get, Post, Body, Query, Req, Res, ParseIntPipe, Param } from '@nestjs/common';
import { PServiceService } from 'src/p_service/p_service.service';
import { Request, Response } from 'express';
import { DetailsDto } from 'src/DTOs/populationdto';

@Controller('population')
export class PControllerController {
  constructor(private readonly pService: PServiceService) {}

  @Get('get')
async getDetails(@Res() res: Response) {
  try {
    const data = await this.pService.getdetails();
    res.send(data);
  } catch (error) {
    res.status(500).send("Error in getting details.");
  }
}


  @Get('getf')
  async getDetailsf(@Query('q') q: string, @Res() res: Response) {
    try {
      const data = await this.pService.getdetails();
      const keys = ['name'];

      const search = (data) => {
        return data.filter(item =>
          keys.some(key => item[key].toLowerCase().includes(q.toLowerCase()))
        );
      };

      res.send(search(data));
    } catch (error) {
      res.status(500).send("Error in getting details.");
    }
  }

  @Get('count')
  async getCount(@Res() res: Response) {
    setTimeout(async () => {
      try {
        const data = await this.pService.count();
        res.send(data);
      } catch (error) {
        res.status(500).send("Error fetching count.");
      }
    }, 2000);
  }

  @Post('save')
  async saveDetails(@Body() datalist: DetailsDto[], @Res() res: Response) {
    console.log("Received data:", datalist);

    if (!Array.isArray(datalist)) {
      datalist = [datalist];
    }

    if (datalist.length == 0) {
      return res.status(400).send("No data provided.");
    }

    setTimeout(async () => {
      try {
        const result = await this.pService.savedetails(datalist);
        res.send(result);
      } catch (error) {
        console.error("Error saving details:", error);
        res.status(500).send("Data not added to database.");
      }
    }, 2000);
  }

  @Delete(':id')
  async deleteDetails(@Param('id') id: number, @Res() res: Response) {
    try {
      console.log("in deletecontroller.. ",id)
      const result = await this.pService.deleteDetails(id);
      res.send(result);
    } catch (error) {
      console.log("Delete error", error);
      res.status(500).send("Data not deleted");
    }
  }
}
