import './App.css';
import Empty from './components/Empty';
import Item from './components/Item';
import Head from './components/Head';
import Container from './components/Container';
import GetData from './components/GetData';

let items = ["Oil", "Lights", "Candles", "Toothpaste", "Ice-Cream", "Charger", "Notebook"]; 

function App() {

  const confirmItem = () => {
    alert(`Ready to buy`);
  }

  return (
    <>
      <Container>
      <Head text = "SHOP STATUS"/>
      <Empty item={items} />
      <input onChange={(event) => console.log(event.target.value)} type="text" placeholder='Search Items' />
      <Item item={items} />
      <GetData data={confirmItem}/>
      </Container>

      <Container>
        <Head text="Web Development" />
        <p>
          We specialize in providing top-notch web development solutions that empower businesses to establish a strong online presence. Our expert team creates custom websites, user-friendly e-commerce platforms, and powerful web applications tailored to your specific needs. With a client-centric approach and a keen eye for innovation, we deliver responsive and cutting-edge websites that leave a lasting impact on your audience. Let us help you unlock the full potential of your digital journey and drive your business towards success.</p>
      </Container>
    </>
  )
}

export default App;
