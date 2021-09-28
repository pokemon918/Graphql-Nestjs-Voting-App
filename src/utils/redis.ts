import * as Redis from 'ioredis';

// export const redis = new Redis(parseInt(process.env.REDIS_PORT),`${process.env.REDIS_HOST}`); 

export const redis = new Redis(process.env.REDIS_URL); 