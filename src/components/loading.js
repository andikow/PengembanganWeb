import React from 'react';
import Loader from 'react-loader-spinner';
import './../assets/css/loading.css';


export default class Loading extends React.Component {
   render() {
    return(
      <div className="parentDisable">
     <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={2000} //2 secs
        style={{position:'fixed', top:'50%', left:'50%', transform: 'translate(-50%, -50%)'}}
     />
     </div>
    );
   }
}
