export const POST = async(req, res) => {
  const { clientData } = await req.json();
  let pg = require('pg');
  let client = new pg.Client(`${clientData}`);
  await client.connect();
  // console.log('THE DATAAAAAAAA:', clientData)
  let data = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';")
  console.log('IN SERVER DATA:', data);
  client.end();
  // console.log('THE DATA:', data);
  // console.log('CLIENT IS', client.POST)
  return new Response(JSON.stringify(data))
  // return await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';")
}