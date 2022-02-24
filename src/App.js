
import './App.css';
import Card from './Card';
import Heading from './Heading';
import Data from './data';
function App() {
  return (
    <>
      <div className="row">
        <Heading />
      </div>




      <div className="row" >

        {
          Data.map((ele) => <Card data={ele.imgsrc} title={ele.title} description={ele.description} link={ele.link} key={ele.key} />)
        }
      </div>



    </>
  );
}

export default App;
