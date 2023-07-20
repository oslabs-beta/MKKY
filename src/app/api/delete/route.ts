export const POST = async(req) => {

  try{  
    const body = await req.json();


    console.log('THE QUERY ======', body.query)
    console.log('THE URI ======', body.uri)
    console.log('THE VALUE ======', body.value)
    const URI = body.uri;
    const query = body.query;
    let pg = require('pg')
    let client = new pg.Client(URI)
    await client.connect()
    await client.query(query)
    await client.end();
    return new Response(JSON.stringify("query successful"));
  }catch(error){
    const body = await req.json();
    console.log(body)
    console.log(error)
    return new Response(JSON.stringify("query unsuccessful"));
  }
}