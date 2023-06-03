


export const POST = async(req, res) => {
  const { stringURI } = await req.json();
  let pg = require('pg')
  let pool = new pg.Pool({connectionString: stringURI})
  let client = await pool.connect()
  const allTables = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';")

  for(let i = 0; i<  allTables.rows.length; i++){
    if (allTables.rows[i]["table_name"] === "pg_stat_statements"){
      allTables.rows.splice(1,i)
    }
  }
  const allTableNames = Object.values(allTables.rows)
  let tableData;
  let allTablesData = [];
  allTableNames.forEach( async (table) => {
    tableData = await client.query(`SELECT * FROM ${table.table_name}`)
    allTablesData.push(tableData)
  })
  tableData = await client.query(`SELECT * FROM ${allTableNames[0].table_name}`);  
  let allTablesFields = [];
  allTablesData.forEach(table => {
    let newFieldsArr = []
    table.fields.forEach(field => {
      newFieldsArr.push(field.name)
    })
    allTablesFields.push(newFieldsArr)
  })
  const allData = {
    allTableNames,
    allTablesFields,
    allTablesData
  }
  await client.release();
  await client.end();
  return new Response(JSON.stringify(allData))
}