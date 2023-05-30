import mysql from "mysql"

export const db = mysql.createConnection({
    host: "db4free.net",
    user: "adsunicesumar",
    password: "unicesumar",
    database: "ads5semestre"
})