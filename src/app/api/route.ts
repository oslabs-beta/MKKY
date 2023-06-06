
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




export const POST = async(req) => {
  const { URI } = await req.json()
  let pg = require('pg')
  try{
    let client = new pg.Client(URI)
    await client.connect()
    await client.end();
    return new Response(JSON.stringify(true))
  }
  catch (error){
    return new Response(JSON.stringify("ERROR IN URL"))
  }
}