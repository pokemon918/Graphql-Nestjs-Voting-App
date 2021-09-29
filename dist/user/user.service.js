"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const graphql_1 = require("graphql");
const redis_1 = require("../utils/redis");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
const bcrypt = require("bcryptjs");
const my_context_1 = require("../types/my-context");
const sendEmail_1 = require("../utils/sendEmail");
const confirmEmailLinks_1 = require("../utils/confirmEmailLinks");
let UserService = class UserService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(createUserInput) {
        const userExists = await this.usersRepository.findOne({ where: { email: createUserInput.email } });
        if (userExists) {
            throw new graphql_1.GraphQLError("User Already Exist");
        }
        const user = await this.usersRepository.save(Object.assign({}, createUserInput));
        await (0, sendEmail_1.sendEmail)(user.email, await (0, confirmEmailLinks_1.confirmEmailLink)(user.id));
        return user;
    }
    async findAll() {
        return await this.usersRepository.find();
    }
    async findOne(id) {
        return await this.usersRepository.findOne(id);
    }
    async update(id, updateUserInput) {
        const userExists = await this.usersRepository.findOne({ where: { email: updateUserInput.email } });
        if (!userExists) {
            throw new graphql_1.GraphQLError("User Not Found");
        }
        this.usersRepository.merge(userExists, updateUserInput);
        return await this.usersRepository.save(userExists);
    }
    async confirmEmail(id) {
        const userId = await redis_1.redis.get(id);
        if (!userId) {
            throw new common_1.NotFoundException();
        }
        await this.usersRepository.update({ id: userId }, { isActive: true });
        return "Email Successfully Confirmed";
    }
    remove(id) {
        return `This action removes a #${id} user`;
    }
    async login(loginInput, ctx) {
        const user = await this.usersRepository.findOne({ where: { email: loginInput.email } });
        if (!user) {
            throw new graphql_1.GraphQLError("User Not Found By This Email");
        }
        const checkPassword = await bcrypt.compare(loginInput.password, user.password);
        if (!checkPassword) {
            throw new graphql_1.GraphQLError("Password Incorrect");
        }
        ctx.req.session['userId'] = user.id;
        ctx.req.session['userRoles'] = ['ADMIN', 'USER'];
        return `Authentication=${user.id}; HttpOnly; Path=/; Max-Age=${new Date(Date.now() + 1000 * 60 * 60 * 24)}`;
    }
    async logout(ctx) {
        await ctx.req.session.destroy(err => {
            throw new graphql_1.GraphQLError(err);
        });
        ctx.res.clearCookie("votingapp");
        return "Successfully Logout";
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.MainUser)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map