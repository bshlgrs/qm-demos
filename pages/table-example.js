import Layout from '../components/Layout'
import SmartTable from '../components/SmartTable'


const exampleData = [
  {name: "buck", "algorithms-skill": 3, 'lls-skill': 6},
  {name: "jill", "algorithms-skill": 3, 'lls-skill': 6},
  {name: "todd", "algorithms-skill": 3, 'lls-skill': 6},
  {name: "jamie", "algorithms-skill": 3, 'lls-skill': 6}
];

const columns = [
  {symbol: 'name', title: 'Name'},
  {symbol: 'algorithms-skill', title: 'Algorithms score'},
  {symbol: 'lls-skill', title: 'Low level systems skill'}
];

const TableExample = () => <Layout>
  <p>hello</p>
  <SmartTable data={exampleData} columns={columns}/>
</Layout>


export default TableExample;
