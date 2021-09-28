import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_User,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    subscribers: [__dirname + '/../**/*.subscriber{.ts,.js}'],
    synchronize: false,
    // dropSchema: true
}

export const typeOrmProdConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    subscribers: [__dirname + '/../**/*.subscriber{.ts,.js}'],
    // migrations: [__dirname + '/migrations/**/*.ts'],
    logger: 'simple-console',
    // cli: {
    //     "migrationsDir": "migration"
    // },
    synchronize: false,
    
    // dropSchema: true
}