import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";

export class MyContext {
  em: EntityManager<IDatabaseDriver<Connection>>;
}
