"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const user_resolver_1 = require("./user.resolver");
const user_service_1 = require("./user.service");
describe('UserResolver', () => {
    let resolver;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [user_resolver_1.UserResolver, user_service_1.UserService],
        }).compile();
        resolver = module.get(user_resolver_1.UserResolver);
    });
    it('should be defined', () => {
        expect(resolver).toBeDefined();
    });
});
//# sourceMappingURL=user.resolver.spec.js.map