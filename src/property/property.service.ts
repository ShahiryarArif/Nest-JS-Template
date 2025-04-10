import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from 'src/entities/property.entity';
import { Repository } from 'typeorm';
import { UpdatePropertyDto } from './dto/updateProperty.dto';
import { CreatePropertyDto } from './dto/createProperty.dto';

@Injectable()
export class PropertyService {

  constructor (@InjectRepository(Property) private propertyRepository: Repository<Property>) {}

  async findAll() {
    return await this.propertyRepository.find();
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
