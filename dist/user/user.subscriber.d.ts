import { EntitySubscriberInterface, InsertEvent } from "typeorm";
import { MainUser } from "./user.entity";
export declare class PostSubscriber implements EntitySubscriberInterface<MainUser> {
    listenTo(): typeof MainUser;
    beforeInsert(event: InsertEvent<MainUser>): Promise<void>;
}
