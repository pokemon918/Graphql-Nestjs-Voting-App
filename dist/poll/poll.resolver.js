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
exports.PollResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const poll_service_1 = require("./poll.service");
const poll_entity_1 = require("./entities/poll.entity");
const create_poll_input_1 = require("./dto/create-poll.input");
const update_poll_input_1 = require("./dto/update-poll.input");
const common_1 = require("@nestjs/common");
const auth_guard_1 = require("../shared/auth.guard");
const getuserid_decorator_1 = require("../shared/getuserid.decorator");
let PollResolver = class PollResolver {
    constructor(pollService) {
        this.pollService = pollService;
    }
    createPoll(createPollInput, userId) {
        return this.pollService.create(createPollInput, userId);
    }
    findAll(userId) {
        return this.pollService.findAll(userId);
    }
    findOne(id, userId) {
        return this.pollService.findOne(id, userId);
    }
    updatePoll(updatePollInput) {
        return this.pollService.update(updatePollInput.id, updatePollInput);
    }
    removePoll(id) {
        return this.pollService.remove(id);
    }
};
__decorate([
    (0, graphql_1.Mutation)(() => poll_entity_1.Poll, { nullable: true }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('createPollInput')),
    __param(1, (0, getuserid_decorator_1.GetUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_poll_input_1.CreatePollInput, String]),
    __metadata("design:returntype", Promise)
], PollResolver.prototype, "createPoll", null);
__decorate([
    (0, graphql_1.Query)(() => [poll_entity_1.Poll], { name: 'poll' }),
    __param(0, (0, getuserid_decorator_1.GetUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PollResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => poll_entity_1.Poll, { name: 'poll' }),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => String })),
    __param(1, (0, getuserid_decorator_1.GetUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], PollResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => poll_entity_1.Poll),
    __param(0, (0, graphql_1.Args)('updatePollInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_poll_input_1.UpdatePollInput]),
    __metadata("design:returntype", void 0)
], PollResolver.prototype, "updatePoll", null);
__decorate([
    (0, graphql_1.Mutation)(() => poll_entity_1.Poll),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], PollResolver.prototype, "removePoll", null);
PollResolver = __decorate([
    (0, graphql_1.Resolver)(() => poll_entity_1.Poll),
    __metadata("design:paramtypes", [poll_service_1.PollService])
], PollResolver);
exports.PollResolver = PollResolver;
//# sourceMappingURL=poll.resolver.js.map