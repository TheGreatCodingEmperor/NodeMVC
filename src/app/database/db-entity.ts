import DBConnection, { ConnectionConfig } from "./db-connection";

export default abstract class DBEntity implements IDBEntity,DBConnection {
    tableName: string = '';
    properties: DBEntityProperty = {};
    connectionConfig: ConnectionConfig = {dbName:''};

    constructor(config: ConnectionConfig,tableName:string){
        this.tableName = tableName;
        this.connectionConfig = config;
    }


    connection(config: ConnectionConfig): void {
        throw new Error("Method not implemented.");
    }
    close(): void {
        throw new Error("Method not implemented.");
    }

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

}

export interface IDBEntity{
    tableName:string;
    properties:DBEntityProperty;

    where(property:DBEntityProperty,compare:string):any;
    first(property:DBEntityProperty,compare:string):DBEntityProperty;
    firstOrDefault(property:DBEntityProperty,compare:string):DBEntityProperty|null;
    single(property:DBEntityProperty,compare:string):DBEntityProperty;
    singleOrDefault(property:DBEntityProperty,compare:string):DBEntityProperty|null;
    add(proeprty:DBEntityProperty):DBEntityProperty;
    update(pk:string,proeprty:DBEntityProperty):DBEntityProperty;
    remove(pk:string):void;
}

export interface DBEntityProperty{
    [key:string]:DataType
}

export enum DataType{
    string = "string",
    date = "Date",
    number = "number",
    boolean = "boolean"
}

