import { EmployeeDTO, orderDTO, OrderLineDTO } from '@applicationLayer|dtos';
import { createMap, Mapper, MappingProfile } from '@automapper/core';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { Employee, Order, OrderLine } from '../entities/database.models';

@Injectable()
export class generalMapper extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  get profile(): MappingProfile {
    return (mapper) => {
      createMap(mapper, orderDTO, Order);
      createMap(mapper, Order, orderDTO);
      createMap(mapper, OrderLineDTO, OrderLine);

      createMap(mapper, EmployeeDTO, Employee);
      createMap(mapper, Employee, EmployeeDTO);
    };
  }

  // protected get mappingConfigurations(): MappingConfiguration[] {

  //     // the 3 createMap() above will get this `extend()`
  //     return [extend(BaseEntity, BaseDto)];
  // }
}
