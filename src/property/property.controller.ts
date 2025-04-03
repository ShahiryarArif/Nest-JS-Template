import { Body, Controller, Get, Headers, Param, ParseBoolPipe, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';
import { IdParamDto } from './dto/idParam.dto';
import { ZodValidationPipe } from './pipes/zodValidationPipe';
import { createPropertySchema, CreatePropertyZodDto } from './dto/createPropertyZod.dto';
import { HeadersDto } from './dto/headers.dto';
import { RequestHeader } from './pipes/request-header';

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
  @UsePipes(new ZodValidationPipe(createPropertySchema))
  create(@Body() body: CreatePropertyZodDto) {
    return 'Create property';
  }

  @Patch(':id')
  update(
    @Param("id", ParseIntPipe) id,
    @Body() body: CreatePropertyDto,
    @RequestHeader( new ValidationPipe({
      whitelist: true,
      validateCustomDecorators: true,
    })) headers: HeadersDto,
  ) {
    return 'Create property';
  }
}
