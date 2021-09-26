import * as sqlite from "sqlite3";
import DBConnection, { ConnectionConfig } from "./db-connection";
import IDBEntity, { DBEntityProperty } from "./db-entity";
const sqlite3 = sqlite.verbose();

export default class SqliteDemo implements DBConnection,IDBEntity {
  public db: sqlite.Database = new sqlite3.Database("chain.sqlite3", () => {});
  constructor(connectionConfig:ConnectionConfig,tableName:string) {
    this.tableName = tableName;

  }
  tableName: string="";
  properties: DBEntityProperty = {
    
  };
  where(property: DBEntityProperty, compare: string) {
    throw new Error("Method not implemented.");
  }
  first(property: DBEntityProperty, compare: string): DBEntityProperty {
    throw new Error("Method not implemented.");
  }
  firstOrDefault(property: DBEntityProperty, compare: string): DBEntityProperty | null {
    throw new Error("Method not implemented.");
  }
  single(property: DBEntityProperty, compare: string): DBEntityProperty {
    throw new Error("Method not implemented.");
  }
  singleOrDefault(property: DBEntityProperty, compare: string): DBEntityProperty | null {
    throw new Error("Method not implemented.");
  }
  add(proeprty: DBEntityProperty): DBEntityProperty {
    throw new Error("Method not implemented.");
  }
  update(pk: string, proeprty: DBEntityProperty): DBEntityProperty {
    throw new Error("Method not implemented.");
  }
  remove(pk: string): void {
    throw new Error("Method not implemented.");
  }
  
  connection(connectionConfig:ConnectionConfig): void {
    this.db = new sqlite3.Database("chain.sqlite3");
  }
  close(): void {
    this.db.close();
  }
  

  test() {
    let db = new sqlite3.Database("chain.sqlite3");
    db.serialize(function () {
      db.run("CREATE TABLE lorem (info TEXT)");

      var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
      for (var i = 0; i < 10; i++) {
        stmt.run("Ipsum " + i);
      }
      stmt.finalize();

      db.each("SELECT rowid AS id, info FROM lorem", function (err, row) {
        console.log(row.id + ": " + row.info);
      });
    });

    db.close();
  }
}
