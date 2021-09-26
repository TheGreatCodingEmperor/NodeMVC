export default interface DBConnection{
    connection(config:ConnectionConfig):void;
    close():void;
}

export interface ConnectionConfig{
    filePath?:string;
    host?:string;
    port?:string;
    userName?:string;
    password?:string;
    dbName:string;
}