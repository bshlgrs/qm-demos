import Layout from '../components/Layout'
import SmartTable from '../components/SmartTable'


const exampleData = [
  {name: "buck", "algorithms-skill": 3, 'lls-skill': 2.5},
  {name: "jill", "algorithms-skill": 2, 'lls-skill': 2},
  {name: "todd", "algorithms-skill": 1, 'lls-skill': 3},
  {name: "jamie", "algorithms-skill": 4, 'lls-skill': 3}
];

const columns = [
  {symbol: 'name', title: 'Name'},
  {symbol: 'algorithms-skill', title: 'Algorithms score'},
  {symbol: 'lls-skill', title: 'Low level systems skill'}
];

const TableExample = () => <Layout>
  <p>hello</p>
  <SmartTable data={exampleData} columns={columns} defaultSort={['name', 'asc']}/>
</Layout>


export default TableExample;
