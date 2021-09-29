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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Poll = void 0;
const graphql_1 = require("@nestjs/graphql");
const user_entity_1 = require("../../user/user.entity");
const typeorm_1 = require("typeorm");
const poll_option_entity_1 = require("./poll-option.entity");
let Poll = class Poll {
};
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Poll.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Poll.prototype, "name", void 0);
__decorate([
    (0, graphql_1.Field)(() => String),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Poll.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.MainUser),
    __metadata("design:type", user_entity_1.MainUser)
], Poll.prototype, "user", void 0);
__decorate([
    (0, graphql_1.Field)(() => [poll_option_entity_1.PollOption]),
    (0, typeorm_1.OneToMany)(() => poll_option_entity_1.PollOption, polloption => polloption.poll),
    __metadata("design:type", Promise)
], Poll.prototype, "pollOptions", void 0);
Poll = __decorate([
    (0, graphql_1.ObjectType)(),
    (0, typeorm_1.Entity)()
], Poll);
exports.Poll = Poll;
//# sourceMappingURL=poll.entity.js.map