"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const Store = require("connect-redis");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const redis_1 = require("./utils/redis");
dotenv.config();
async function bootstrap() {
    const RedisStore = Store(session);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookieParser());
    app.use(session({
        store: new RedisStore({ client: redis_1.redis }),
        name: 'votingapp',
        secret: '994ikk34k3k42kkk3kk3k3k',
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 1000 * 60 * 60 * 24
        }
    }));
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map