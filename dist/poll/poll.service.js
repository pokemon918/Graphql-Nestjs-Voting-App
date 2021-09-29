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
exports.PollService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const poll_option_entity_1 = require("./entities/poll-option.entity");
const poll_entity_1 = require("./entities/poll.entity");
let PollService = class PollService {
    constructor(pollRepository, pollOptionRepository) {
        this.pollRepository = pollRepository;
        this.pollOptionRepository = pollOptionRepository;
    }
    async create(createPollInput, userId) {
        const poll = await this.pollRepository.save({ name: createPollInput.name, userId });
        createPollInput.options.map(async (text) => {
            await this.pollOptionRepository.save({
                text,
                vote: 0,
                pollId: poll.id
            });
        });
        return await this.pollRepository.findOne({ where: { id: poll.id }, relations: ['pollOptions'] });
    }
    async findAll(userId) {
        return await this.pollRepository.findOne({ where: { userId: userId }, relations: ['pollOptions'] });
    }
    async findOne(id, userId) {
        return await this.pollRepository.findOne({ where: { id: id, userId: userId }, relations: ['pollOptions'] });
    }
    update(id, updatePollInput) {
        return `This action updates a #${id} poll`;
    }
    remove(id) {
        return `This action removes a #${id} poll`;
    }
};
PollService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(poll_entity_1.Poll)),
    __param(1, (0, typeorm_1.InjectRepository)(poll_option_entity_1.PollOption)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], PollService);
exports.PollService = PollService;
//# sourceMappingURL=poll.service.js.map