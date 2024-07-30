import './App.css';
import Empty from './components/Empty';
import Item from './components/Item';
import Head from './components/Head';
import Container from './components/Container';
import GetData from './components/GetData';
import SearchBox from './components/SearchBox';
import { useState } from 'react';

let items = [];
// let items = ["Oil", "Lights", "Candles", "Toothpaste", "Ice-Cream", "Charger", "Notebook"]; 

function App() {

  const [textChangeVal, setTextChangeVal] = useState("Nothing");

  let [Items, setItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === 'Enter') {
      let newItem = event.target.value;
      let newShopItem = [...Items, newItem];
      console.log(newItem);
      setItems(newShopItem);
      setTextChangeVal(newItem);
    }
  }


  const confirmItem = () => {
    alert(`Successfully Purchased`);
  }

  return (
    <>
      <Container>
      <Head text = "SHOP STATUS"/>
      <Empty item={Items} />
      <SearchBox handleKeyDown={onKeyDown} />
      <p>{`User last entered is ${textChangeVal}`}</p>
      <Item item={Items} />
      <GetData data={confirmItem}/>
      </Container>

      {/* <Container>
        <Head text="Web Development" />
        <p>
          We specialize in providing top-notch web development solutions that empower businesses to establish a strong online presence. Our expert team creates custom websites, user-friendly e-commerce platforms, and powerful web applications tailored to your specific needs. With a client-centric approach and a keen eye for innovation, we deliver responsive and cutting-edge websites that leave a lasting impact on your audience. Let us help you unlock the full potential of your digital journey and drive your business towards success.</p>
      </Container> */}
    </>
  )
}

export default App;
