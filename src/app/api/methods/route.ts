const client = require("../../api");



export const GET = async(req, res) => {
  console.log("hitting the GET")
  return new Response(JSON.stringify(client))
  // return await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';")
}