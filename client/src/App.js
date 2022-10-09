import './App.css';
// import {Users} from './Users'
import {useState, useEffect} from 'react'
import Table from './Table';
import axios from 'axios'

function App() {

  const [query, setQuery] = useState("");
  // const keys = ["first_name", "last_name", "email"];
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5001?q=${query}`)
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchUsers();
  }, [query]);

  // console.log(query)

  // const search = (data) => {
  //   return data.filter(
  //     (item)=> 
  //     item.first_name.toLowerCase().includes(query) ||
  //     item.last_name.toLowerCase().includes(query) ||
  //     item.email.toLowerCase().includes(query)
  //   )
  // }

  // const search = (data) => {
  //   return data.filter((item) => 
  //   keys.some((key)=> item[key].toLowerCase().includes(query)))
  // }

  return (
    <div className="app">
      
        <input className="search" placeholder='Search...' onChange={(e) => setQuery(e.target.value.toLowerCase())} />

        {/* <ul className='list'>
        {Users.filter((user)=>user.first_name.toLocaleLowerCase().includes(query.toLowerCase())).map((user)=>(
            <li key={user.id} className="listItem">
              {user.first_name}
            </li>
        ))}
        </ul> */}

        {/* <Table data={search(Users)} /> */}
        <Table data={data} />

    </div>
  );
}

export default App;
