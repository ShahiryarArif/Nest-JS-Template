import { Body, Controller, Get, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'All properties';
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
    return 'One property';
  }

  @Post()
  create(@Body(
    new ValidationPipe({ 
      whitelist: true, 
      forbidNonWhitelisted: true, 
      groups: ['create'],
    })
  ) body: CreatePropertyDto) {
    return 'Create property';
  }

  @Patch()
  update(@Body(
    new ValidationPipe({ 
      groups: ['update'],
      always: true,
    })
  ) body: CreatePropertyDto) {
    return 'Create property';
  }
}
