

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
  // let query = await request.json()
  // let pg = require('pg')
  // const URI = "postgres://mmethhdd:OuENml3Y4wNyMcCHb69l16Cn3l2osxzh@drona.db.elephantsql.com/mmethhdd";
  // let client = new pg.Client(URI)
  // //let updateQuery = `UPDATE ${request.body.tableName} SET ${colID} = ${newVal} WHERE ${keyName} = ${rowID} `
  // await client.connect()
  
  // let pg = require('pg')
  // // const URI = "postgres://jxbiwedv:tWMx8_U1YtUH3Noj4vFCNMVW1yHOfEWb@jelani.db.elephantsql.com/jxbiwedv";
  // let client = new pg.Client(URI)
  // //let updateQuery = `UPDATE ${request.body.tableName} SET ${colID} = ${newVal} WHERE ${keyName} = ${rowID} `
  // client.connect()
  return await client.query(await request.json())
    
    //   return NextResponse.json({ data });
}

// let globalURI;

export const POST = async (req, res) => {
  const { URI } = await req.json();
  // let pg = require('pg');
  try{
    // let client = new pg.Client(URI);
    // client.connect();

    return new Response(JSON.stringify(URI));
    
  } catch (error){
    console.log(error);
    return new Response(JSON.stringify("ERROR IN POST"));
  }
}

export const GET = async(req, res) => {
  
  return await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';");
}