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
exports.DevelopersService = void 0;
const common_1 = require("@nestjs/common");
const Repository_1 = require("typeorm/repository/Repository");
const developer_entity_1 = require("./entities/developer.entity");
const typeorm_1 = require("@nestjs/typeorm");
let DevelopersService = class DevelopersService {
    constructor(repository) {
        this.repository = repository;
    }
    create(dto) {
        const developer = this.repository.create(dto);
        return this.repository.save(developer);
    }
    findAll() {
        return this.repository.find();
    }
    findOne(id) {
        return this.repository.findOneBy({ id });
    }
    async update(id, dto) {
        const developer = await this.repository.findOneBy({ id });
        if (!developer)
            return null;
        this.repository.merge(developer, dto);
        return this.repository.save(developer);
    }
    async remove(id) {
        const developer = await this.repository.findOneBy({ id });
        if (!developer)
            return null;
        return this.repository.remove(developer);
    }
};
exports.DevelopersService = DevelopersService;
exports.DevelopersService = DevelopersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(developer_entity_1.Developer)),
    __metadata("design:paramtypes", [Repository_1.Repository])
], DevelopersService);
//# sourceMappingURL=developers.service.js.map