"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redis = void 0;
const Redis = require("ioredis");
exports.redis = new Redis(process.env.REDIS_URL);
//# sourceMappingURL=redis.js.map