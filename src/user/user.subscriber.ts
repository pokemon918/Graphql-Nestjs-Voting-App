import { EntitySubscriberInterface, EventSubscriber, InsertEvent } from "typeorm";
import { MainUser } from "./user.entity";
import * as bcrypt from 'bcryptjs';

@EventSubscriber()
export class PostSubscriber implements EntitySubscriberInterface<MainUser> {


    /**
     * Indicates that this subscriber only listen to Post events.
     */
    listenTo() {
        return MainUser;
    }

    /**
     * Called before post insertion.
     */
    async beforeInsert(event: InsertEvent<MainUser>) {

        event.entity.password = await bcrypt.hash(event.entity.password, 12);
        // console.log(`BEFORE POST INSERTED: `, event.entity);
    }

}