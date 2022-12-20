
import * as React from 'react';
import { useState, useMemo } from 'react';
import { render } from 'react-dom';
import Map, {
    Marker,
    Popup,
    NavigationControl,
    FullscreenControl,
    ScaleControl,
    GeolocateControl
} from 'react-map-gl';

import Pin from './Pin';

import PLACES from '../places.json'
function Footer({ partners }) {

    const [popupInfo, setPopupInfo] = useState(null);

    const pins = useMemo(
        () =>
            PLACES.map((place, index) => (
                <Marker
                    key={index}
                    longitude={place.longitude}
                    latitude={place.latitude}
                    anchor="bottom"
                    onClick={e => {
                        // If we let the click event propagates to the map, it will immediately close the popup
                        // with `closeOnClick: true`
                        e.originalEvent.stopPropagation();
                        setPopupInfo(place);
                    }}
                >
                    <Pin />
                </Marker>
            )),
        []
    );

    return (
        <div className='grid grid-cols-4 content-center bg-slate-500 h-screen'>
            <div className='col-span-3 pointer-events-auto'>
                <Map
                    mapboxAccessToken='pk.eyJ1IjoibWFyaWFtdHMiLCJhIjoiY2xidnlhZ2V2MDNvZDNucnd6MWJwaG5zZCJ9.FvQuKl1gvqhitwftJiEGXg'
                    initialViewState={{
                        longitude: 44.751456,
                        latitude: 41.727541,
                        zoom: 12
                    }}
                    // style={{ width: '100%', height: '100%' }}
                    mapStyle="mapbox://styles/mapbox/light-v9"
                >
                    <GeolocateControl position="top-left" />
                    <FullscreenControl position="top-left" />
                    <NavigationControl position="top-left" />
                    <ScaleControl />

                    {pins}

                    {popupInfo && (
                        <Popup
                            anchor="top"
                            longitude={Number(popupInfo.longitude)}
                            latitude={Number(popupInfo.latitude)}
                            onClose={() => setPopupInfo(null)}
                        >
                            <div>
                                {popupInfo.city}, {popupInfo.state} |{' '}
                                <a
                                    target="_new"
                                    href={`http://en.wikipedia.org/w/index.php?title=Special:Search&search=${popupInfo.city}, ${popupInfo.state}`}
                                >
                                    Wikipedia
                                </a>
                            </div>
                            <img width="100%" src={popupInfo.image} />
                        </Popup>
                    )}
                </Map>
            </div>

            <div className="bg-slate-500 py-6 px-8 w-full flex flex-col items-center text-white">
                <div className="flex flex-col items-center justify-between  mb-4" >
                    <img src={process.env.PUBLIC_URL + '/images/extra-logo.svg'} className="mb-4" alt="Extra logo" />
                    <div className="flex flex-col items-center gap-4">
                        <p className="font-markLight  md:text-base text-sm text-center">
                            ონლაინ შეძენის შემთხვევაში ეწვიეთ EXTRA.Ge-ს, სადაც განთავსებულია "ვინოვეს" ყველა მოდელი და ისარგებლებთ განსხვავებული პირობებით,
                            მიტანა 24 საათში თბილისში სრულიად <span className="bg-green-400">უფასოდ</span> რეგიონებში 3 დღეში. ასევე შეგიძლიათ
                            ისარგებლოთ VISA-ს და MASTERCARD-ის ფასდაკლებით.
                        </p>
                        <div className="bg-red-600 hover:opacity-70 duration-200 flex items-center gap-2 p-2 cursor-pointer">
                            <img src={process.env.PUBLIC_URL + '/images/cart.svg'} className="w-4" alt="cart" />
                            შეძენა
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-10">
                    <p className="bg-purple-600 p-2 text-bold text-center">
                        "ვინოვეს" პროდუქციის სტენდები განთავსებულია შემდეგ პარტნიორ ობიექტებში
                    </p>
                    <div className="flex flex-col md:flex-row gap-7">
                        {
                            partners.map((partner, ind) =>
                                <img src={partner['image URL']} className="w-44 hover:scale-125 duration-200" alt="partner" key={ind} />
                            )
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Footer