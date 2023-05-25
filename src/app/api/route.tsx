//let client = pool.getConnection()
//let connection = client.getConnection()

// export default async handler(req, res) => {
//     let pg = require('pg')
//     const URI = "postgres://mmethhdd:OuENml3Y4wNyMcCHb69l16Cn3l2osxzh@drona.db.elephantsql.com/mmethhdd";
//     let client = new pg.Client(URI)

//     await client.connect()
// }
import { NextResponse } from 'next/server';
//const URI = "postgres://mmethhdd:OuENml3Y4wNyMcCHb69l16Cn3l2osxzh@drona.db.elephantsql.com/mmethhdd";
let pg = require('pg')
const URI = "postgres://jztpyupa:iQAwglVEeRo17CrNnmg3IEKQstbLb-bu@jelani.db.elephantsql.com/jztpyupa";
let client = new pg.Client(URI)
//let updateQuery = `UPDATE ${request.body.tableName} SET ${colID} = ${newVal} WHERE ${keyName} = ${rowID} `
client.connect()

export async function PATCH(request: Request) {
      //const {tableName, colID, newVal, keyName, rowID} = request.body
      // console.log("THE BODY", await request.json())
      // let query = await request.json()
      // let pg = require('pg')
      // const URI = "postgres://mmethhdd:OuENml3Y4wNyMcCHb69l16Cn3l2osxzh@drona.db.elephantsql.com/mmethhdd";
      // let client = new pg.Client(URI)
      // //let updateQuery = `UPDATE ${request.body.tableName} SET ${colID} = ${newVal} WHERE ${keyName} = ${rowID} `
      // await client.connect()
      try{
        return await client.query(await request.json())
      }catch (error){
        console.log(request.json())
      }
    
    //   return NextResponse.json({ data });
}