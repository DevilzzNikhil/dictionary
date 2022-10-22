import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ color }) => (
    <div className=" w-1/2 flex items-center mx-auto  h-[60vh] ">
        <ReactLoading type='spinningBubbles' color={color} height="120px" width='120px' className='m-auto'/>
    </div>
);

export default Loading;