import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { FibonacciJob } from './fibonacci.job';
import { DiscoveryModule } from '@golevelup/nestjs-discovery';
import { JobsService } from './jobs.service';
import { JobsResolver } from './jobs.resolver';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    DiscoveryModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  providers: [FibonacciJob, JobsService, JobsResolver],
})
export class JobsModule {}
