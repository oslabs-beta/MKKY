import Chart from "chart.js";
import {Pool} from 'pg';
import {Client} from '@elephantsql/client';

const Display:any = async () =>{
  let pg = require('pg')
  // let client = new pg.Client(`${stringURI}`)
  let client = new pg.Client('pkhpeqch:Qrc5hxjOCrnFdEZsPd8YxzPEfDMDjUTG@drona.db.elephantsql.com/pkhpeqch')
  client.connect()
  // console.log('PROPS:', stringURI)
  const allTables = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public';")
  allTables.rows.pop()
  const allTableNames = Object.values(allTables.rows)

  console.log('PROPS:', stringURI)
  console.log('TABLE NAMES', allTableNames)
  
  let allTablesData:any = []
  let tableData;

  //Removing SQL default table
  allTableNames.pop()
  allTableNames.forEach( async (table) => {
    tableData = await client.query(`SELECT * FROM ${table.table_name}`)
    allTablesData.push(tableData)
  })
  tableData = await client.query(`SELECT * FROM ${allTableNames[0].table_name}`);

  allTables.rows.pop()
  return (
    <div>
      {console.log("All DATA", allTablesData)}
      {console.log("FIELDS", allTablesData[0].fields)}
      {console.log(allTables.rows)}

      <style>{`td { border : 4px solid blue}`}</style>
        {allTables.rows.map((table:any, index: number) => (
          <div>
            <h1>{table.table_name}</h1>
              
              <table> 
                
              {allTablesData[index].rows.map((row: any) => (
                <tr key={row.id}>
                  {Object.keys(row).map((cell:any) => (
                    <td>{row[cell]}</td>
                  ))}
                </tr>
                )) 
                }
              </table>
              
                    
          </div>
      ))}
    </div>
  );
  };
  
  export default Display;

  
    // const [data, setData] = useState<{ columns: any[], rows: any[] }[]>([]);
  
    // useEffect(() => {
    //     fetch(URI)
    //       .then((response) => response.json())
    //       .then((data) => {
    //         console.log(data)
    //         setData(data);
    //       });
    //   }, []);




        // <div>
      //   <table>
      //     <thead>
      //       <tr>
      //         {data.columns.map((column) => (
      //           <th key={column}>{column}</th>
      //         ))}
      //       </tr>
      //     </thead>
      //     <tbody>
      //       {data.rows.map((row) => (
      //         <tr key={row.id}>
      //           {row.cells.map((cell) => (
      //             <td key={cell.id}>{cell.value}</td>
      //           ))}
      //         </tr>
      //       ))}
      //     </tbody>
      //   </table>
      // </div>




      //LOOP 1: TABLE NAME 
      //LOOP 2: FIELDS
      //LOOP 2: TABLE DATA
