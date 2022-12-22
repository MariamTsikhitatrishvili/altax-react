import * as React from 'react';

function Pin() {
    return (
        <img src={process.env.PUBLIC_URL + `/images/location.png`} alt="location"  className='w-12'/>
    );
}

export default React.memo(Pin);