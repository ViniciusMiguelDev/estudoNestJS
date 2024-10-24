import { DevelopersService } from './developers.service';
import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';
export declare class DevelopersController {
    private readonly developersService;
    constructor(developersService: DevelopersService);
    create(createDeveloperDto: CreateDeveloperDto): Promise<import("./entities/developer.entity").Developer>;
    findAll(): Promise<import("./entities/developer.entity").Developer[]>;
    findOne(id: string): Promise<import("./entities/developer.entity").Developer>;
    update(id: string, updateDeveloperDto: UpdateDeveloperDto): Promise<import("./entities/developer.entity").Developer>;
    remove(id: string): Promise<void>;
}
