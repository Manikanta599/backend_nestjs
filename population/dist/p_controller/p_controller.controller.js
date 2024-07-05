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
exports.PControllerController = void 0;
const common_1 = require("@nestjs/common");
const p_service_service_1 = require("../p_service/p_service.service");
let PControllerController = class PControllerController {
    constructor(pService) {
        this.pService = pService;
    }
    async getDetails(res) {
        try {
            const data = await this.pService.getdetails();
            res.send(data);
        }
        catch (error) {
            res.status(500).send("Error in getting details.");
        }
    }
    async getDetailsf(q, res) {
        try {
            const data = await this.pService.getdetails();
            const keys = ['name'];
            const search = (data) => {
                return data.filter(item => keys.some(key => item[key].toLowerCase().includes(q.toLowerCase())));
            };
            res.send(search(data));
        }
        catch (error) {
            res.status(500).send("Error in getting details.");
        }
    }
    async getCount(res) {
        setTimeout(async () => {
            try {
                const data = await this.pService.count();
                res.send(data);
            }
            catch (error) {
                res.status(500).send("Error fetching count.");
            }
        }, 2000);
    }
    async saveDetails(datalist, res) {
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
            }
            catch (error) {
                console.error("Error saving details:", error);
                res.status(500).send("Data not added to database.");
            }
        }, 2000);
    }
    async deleteDetails(id, res) {
        try {
            console.log("in deletecontroller.. ", id);
            const result = await this.pService.deleteDetails(id);
            res.send(result);
        }
        catch (error) {
            console.log("Delete error", error);
            res.status(500).send("Data not deleted");
        }
    }
};
exports.PControllerController = PControllerController;
__decorate([
    (0, common_1.Get)('get'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PControllerController.prototype, "getDetails", null);
__decorate([
    (0, common_1.Get)('getf'),
    __param(0, (0, common_1.Query)('q')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PControllerController.prototype, "getDetailsf", null);
__decorate([
    (0, common_1.Get)('count'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PControllerController.prototype, "getCount", null);
__decorate([
    (0, common_1.Post)('save'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], PControllerController.prototype, "saveDetails", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], PControllerController.prototype, "deleteDetails", null);
exports.PControllerController = PControllerController = __decorate([
    (0, common_1.Controller)('population'),
    __metadata("design:paramtypes", [p_service_service_1.PServiceService])
], PControllerController);
//# sourceMappingURL=p_controller.controller.js.map