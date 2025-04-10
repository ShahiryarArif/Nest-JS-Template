import { Body, Controller, Delete, Get, Headers, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { IdParamDto } from './dto/idParam.dto';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import { createPropertySchema, CreatePropertyZodDto } from './dto/createPropertyZod.dto';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header';
import { PropertyService } from './property.service';
import { UpdatePropertyDto } from './dto/updateProperty.dto';

@Controller('property')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get()
  findAll() {
    return this.propertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id) {
    return this.propertyService.findOne(id);
  }

  @Post()
  // @UsePipes(new ZodValidationPipe(createPropertySchema))
  create(@Body() body: CreatePropertyDto) {
    return this.propertyService.create(body);
  }

  @Patch(':id')
  update(
    @Param("id", ParseIntPipe) id,
    @Body() body: UpdatePropertyDto,
    @RequestHeader( new ValidationPipe({
      whitelist: true,
      validateCustomDecorators: true,
    })) headers: HeadersDto,
  ) {
    return this.propertyService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id) {
    return this.propertyService.delete(id);
  }
}
