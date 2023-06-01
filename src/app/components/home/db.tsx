
import {Pool} from 'pg';


let pg = require('pg')
const URI = "postgres://mmethhdd:OuENml3Y4wNyMcCHb69l16Cn3l2osxzh@drona.db.elephantsql.com/mmethhdd";
let client = new pg.Client(URI)
// let pool = new Pool({
// connectionString: URI
// })
// client.connect()
// //let client = pool.getConnection()
// //let connection = client.getConnection()
// export const executeQuery = (query) => {
//     try{
         
//         console.log('Query Successful')
//         let res = client.query(query)
        
//         return res
        
//     } catch (error){
//         console.log('Query NOT Successful')
//     }
// }

