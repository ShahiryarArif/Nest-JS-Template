import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';
import { UpdatePropertyDto } from './dto/updateProperty.dto';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { PaginationDTO } from './dto/pagination.dto';
import { DEFAULT_PAGE_SIZE } from 'src/utils/contants';

@Injectable()
export class PropertyService {

  constructor (@InjectRepository(Property) private propertyRepository: Repository<Property>) {}

  async findAll(paginationDTO: PaginationDTO) {
    const { page, limit } = paginationDTO;
    return await this.propertyRepository.find({
        skip: (page - 1) * (limit ?? DEFAULT_PAGE_SIZE),
        take: limit ?? DEFAULT_PAGE_SIZE,
      });
  }
  async findOne(id: number) {
    const property =  await this.propertyRepository.findOne({where: {id}});

    if (!property) {
      throw new NotFoundException(`Property with id ${id} not found`);
    }
    return property;
  }
  async create(property: CreatePropertyDto) {
    return await this.propertyRepository.save(property);
  }
  async update(id: number, property: UpdatePropertyDto) {
    return await this.propertyRepository.update(id, property);
  }

  async delete(id: number) {
    return await this.propertyRepository.delete(id);
  }
}
