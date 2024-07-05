"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PServiceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entity_1 = require("../entities/entity");
let PServiceService = class PServiceService {
    constructor(proRepository) {
        this.proRepository = proRepository;
    }
    async getdetails() {
        console.log("in getdetails service..");
        return this.proRepository.find();
    }
    async count() {
        const result = await this.proRepository.createQueryBuilder('population')
            .select('COUNT(DISTINCT population.email)', 'cnt')
            .getRawOne();
        return { totalPop: result.cnt };
    }
    async savedetails(datalist) {
        try {
            const existingEmails = (await this.proRepository.find()).map(entity => entity.email);
            const newDataList = datalist
                .filter(data => !existingEmails.includes(data.email))
                .map(data => {
                const { name, village, pincode, email, phno, gender, dob } = data;
                return { name, village, pincode, email, phno, gender, dob };
            });
            const savedEntities = await this.proRepository.save(newDataList);
            const savedNames = savedEntities.map(entity => entity.name);
            console.log('Details saved successfully:', savedNames);
            if (savedNames.length > 0) {
                console.log("records saved");
            }
            else {
                console.log("not saved..");
            }
            return savedNames;
        }
        catch (error) {
            console.error('Error saving details:', error.message);
            throw new Error('Error saving details');
        }
    }
    async deleteDetails(id) {
        try {
            console.log("in delete service.. ", id);
            const result = await this.proRepository.delete(id);
            console.log('Details Deleted successfully:', result);
        }
        catch (error) {
            console.error('Error deleting details:', error.message);
            throw new Error('Error deleting details');
        }
    }
};
exports.PServiceService = PServiceService;
exports.PServiceService = PServiceService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entity_1.ProEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PServiceService);
//# sourceMappingURL=p_service.service.js.map