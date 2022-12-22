import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import axios from "axios"
import HeaderSlider from './components/HeaderSlider';
import Product from './components/Product';
import Footer from './components/Footer';
import ReactFullpage from '@fullpage/react-fullpage'; // will return static version on server and "live" version on client
import 'mapbox-gl/dist/mapbox-gl.css';

function App() {
  const [data, setData] = useState({})
  const [pending, setPendig] = useState(true)
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const isMobile = width <= 768;

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
    !pending && !isMobile ? <ReactFullpage
      //fullpage options
      normalScrollElements='#footer'
      licenseKey={'YOUR_KEY_HERE'}
      scrollingSpeed={1000} /* Options here */
      navigation={true}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <div className='flex flex-col gap-24 lg:max-h-screen overflow-hidden'>
                <Nav />
                <HeaderSlider slides={data.Slider} />
              </div>
            </div>
            {
              data.Products?.map((product, id) =>
                <div className="section" key={id}>
                  <Product key={id} product={product} />
                </div>
              )
            }
            <div className="section">
              <Footer partners={data?.Partners} />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    /> :  !pending &&
      <>
        <div className='flex flex-col'>
          <div className='flex flex-col gap-24'>
            <Nav />
            <HeaderSlider slides={data.Slider} />
          </div>
          {
            data.Products?.map((product, id) =>
              <div key={id}>
                <Product key={id} product={product} />
              </div>
            )
          }
          <Footer partners={data?.Partners} />
        </div>
      </>
  );
}

export default App;
