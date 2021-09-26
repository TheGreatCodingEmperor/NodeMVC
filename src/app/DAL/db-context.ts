import sqlite3 from 'sqlite3'
import { open } from 'sqlite';

// this is a top-level await 

export var dbContext = (async () => {
    // open the database
    const db = await open("chain.sqlite3",{
        verbose:true,
    });
    return db;
})()
