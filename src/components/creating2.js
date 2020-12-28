import React from 'react';
import './../assets/css/help.css';
import color1 from './../assets/img/color1.png';
import color2 from './../assets/img/color2.jpg';
import color3 from './../assets/img/color3.jpg';
import color4 from './../assets/img/color4.jpg';


export default class Creating extends React.Component{

  render(){

    return(
    <>
    <div class="content">
    <h2>Differences in Colors: Monitor vs. T-Shirt</h2><br/>
    <p>Colors may look different on the printed item than they appear on your monitor. This may be due to different reasons:</p>
    <ul>
      <li>To print pixel designs, we need to render the color scheme from RGB to CMYK and make color corrections if necessary. This may lead to slight color variations.</li>
      <li>Every screen displays colors differently. A combination of brightness, contrast and saturation can change color effects significantly. </li>
      <li>The color of the fabrics has an effect on the print result. The example below illustrates how different colors come out on white, black and different-colored fabrics. </li>
    </ul>
    <h3>color chart (Kornit)</h3>
    <img src={color1} alt="color1" /><br/><br/>
    <h3>Print result on white, black and red fabrics (Kornit)</h3>
    <img src={color2} alt="color2" /><br/><br/>
    <h3>Color chart (Brother)</h3>
    <img src={color3} alt="color3" /><br/><br/>
    <h3>Print result on white, black and red fabrics (Brother)</h3>
    <img src={color4} alt="color4" /><br/><br/>
    </div>
    </>
    )
  }
}
