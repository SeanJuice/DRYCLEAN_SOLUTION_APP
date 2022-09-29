/*
https://docs.nestjs.com/modules
*/
import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { generalMapper } from '@domainLayer|mappers';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
  ],
  controllers: [],
  providers: [generalMapper],
})
export class automapperModule {}
