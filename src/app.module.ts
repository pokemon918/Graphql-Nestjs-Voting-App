import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { GraphQLError } from 'graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfig } from './config/typeOrmConfig';
import { AuthGuard } from './shared/auth.guard';
import { UserModule } from './user/user.module';
import { PollModule } from './poll/poll.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      // plugins: [ApolloServerPluginLandingPageLocalDefault()],
      sortSchema: true,
      formatError: (error: GraphQLError) => {
        const graphQLFormattedError = {
          message: error.message || error.extensions?.exception?.response?.message,
          code: error.extensions?.code || "SERVER_ERROR",
          name: error.extensions?.exception?.name || error.name,
        };
        // const graphQLFormattedError: GraphQLFormattedError = {
        //   // code: error.extensions.code,
        //   // extensions
        //   message: error.message,
        // };
        return graphQLFormattedError;
      },

      context: ({req, res}) => ({req, res})
    }),
    UserModule,
    PollModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthGuard],
})
export class AppModule {}
