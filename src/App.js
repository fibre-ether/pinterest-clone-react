import imgs from './assets/graphics_big.json';
import './App.css';
import Navbar from './comps/navbar';
import Card from './comps/card';
function App() {
  return (
    <body>
      <Navbar />
      <div>
      <div class="grid grid-cols-1 gap-2 mx-14 mt-16 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 align-center">
        {imgs.results.map((item,index)=>{
            return <Card img={item.urls.small} desc={item.description} alt={item.alt_description} name={item.user.name}/>
        })}
      </div>
      </div>
    </body>
  );
}

export default App;
