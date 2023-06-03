

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

// let pg = require('pg')
// const URI = "postgres://jxbiwedv:tWMx8_U1YtUH3Noj4vFCNMVW1yHOfEWb@jelani.db.elephantsql.com/jxbiwedv";
// let client = new pg.Client(URI)
// //let updateQuery = `UPDATE ${request.body.tableName} SET ${colID} = ${newVal} WHERE ${keyName} = ${rowID} `
// client.connect()
export async function PATCH(request: Request) {
  //const {tableName, colID, newVal, keyName, rowID} = request.body
  // console.log("THE BODY", await request.json())
  let theBody = await request.json()
  let pg = require('pg')
  const URI = theBody.uri;
  let client = new pg.Client(URI)
  // //let updateQuery = `UPDATE ${request.body.tableName} SET ${colID} = ${newVal} WHERE ${keyName} = ${rowID} `
  await client.connect()
  
  // let pg = require('pg')
  // // const URI = "postgres://jxbiwedv:tWMx8_U1YtUH3Noj4vFCNMVW1yHOfEWb@jelani.db.elephantsql.com/jxbiwedv";
  // let client = new pg.Client(URI)
  // //let updateQuery = `UPDATE ${request.body.tableName} SET ${colID} = ${newVal} WHERE ${keyName} = ${rowID} `
  // client.connect()
  let result =  await client.query(theBody.query)
  await client.end();
  return result;
    //   return NextResponse.json({ data });
}

let globalURI;
let client;

export const POST = async(req,res) => {
  const { URI } = await req.json()
  globalURI = URI
  try{
    return new Response(JSON.stringify(true))
  globalURI = URI
  }
  catch (error){
    return new Response(JSON.stringify("ERROR IN POST"))
  }
}