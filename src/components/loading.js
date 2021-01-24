import React from 'react';
import Loader from 'react-loader-spinner';
import './../assets/css/loading.css';
import $ from 'jquery';

export default class Loading extends React.Component {
  componentDidMount(){
    setTimeout(function() {
      $('.parentDisable').fadeOut('fast');
    }, 1000);
  }
   render() {
    return(
      <div className="parentDisable">
     <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={1000} //1 detik
        style={{position:'fixed', top:'50%', left:'50%', transform: 'translate(-50%, -50%)'}}
     />
     </div>
    );
   }
}
