import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import axios from "axios"
import HeaderSlider from './components/HeaderSlider';
import Product from './components/Product';
import Footer from './components/Footer';

function App() {
  const [data, setData] = useState({})
  const [pending, setPendig] = useState(true)
  const getData = () => {
    axios.get("//altax-admin.maestroerror.ge/data/data.json")
      .then((res) => {
        setData(res.data["მენიუ"])
        setPendig(false)
      })
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    !pending && <div className="App">
      <Nav />
      <HeaderSlider slides={data.Slider} />
      {
        data.Products.map((product, id) =>
          <Product key={id} product={product} />
        )
      }
      <Footer partners={data.Partners} />
    </div>
  );
}

export default App;
