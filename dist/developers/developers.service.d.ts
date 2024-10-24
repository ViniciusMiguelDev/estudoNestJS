import { CreateDeveloperDto } from './dto/create-developer.dto';
import { UpdateDeveloperDto } from './dto/update-developer.dto';
import { Repository } from 'typeorm/repository/Repository';
import { Developer } from './entities/developer.entity';
export declare class DevelopersService {
    private readonly repository;
    constructor(repository: Repository<Developer>);
    create(dto: CreateDeveloperDto): Promise<Developer>;
    findAll(): Promise<Developer[]>;
    string: any;
    findOne(id: string): Promise<Developer>;
    update(id: string, dto: UpdateDeveloperDto): Promise<Developer>;
    remove(id: string): Promise<Developer>;
}
