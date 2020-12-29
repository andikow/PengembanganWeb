import React from 'react';
import './../assets/css/help.css';


export default class Creating extends React.Component{

  render(){

    return(
    <>
    <div class="content">
    <h2>Printing Techniques </h2><br/>
    <p>Digital direct printing is the standard print method for both the create-your-own area and the Binco. As a customer, you can change the print method to plot printing, as long as it is an available print option for the selected design. Simply click on the design to find out. If available, the color selection for flex, flock and special foil printing opens automatically. Requirements for printing graphics with plot and digital direct can be read here.</p>
    <h3>Digital Direct</h3>
    <p>In computer-controlled production, the colors are sprayed onto the item. Digital Direct is Binco’s new standard print method, as it’s the most favored choice. More about Digital Direct</p>
    <ul>
      <li>Available for all file formats</li>
      <li>Brilliant print results</li>
      <li>Smooth surface thanks to dyed-in-fabric prints</li>
    </ul>
    <h3>Thermo sublimation</h3>
    <p>The design is initially printed on a transfer foil and then put onto the product by means of thermal evaporation.</p>
    <ul>
      <li>Used to print on accessories like mugs and phone cases</li>
      <li>Available for all file formats</li>
      <li>Available for all file formats</li>
      <li>The product’s surface will be colorized</li>
    </ul>
    <h3>Digital Transfer/Laser Transfer</h3>
    <p>The design is initially printed on a transfer foil and then printed on the product by applying heat. White products receive a transparent foil, color products a white transfer foil.</p>
    <ul>
      <li>Used to print on accessories like bags and caps</li>
      <li>Available for all file formats</li>
      <li>A matte foil creates a design that can be easily sprayed on the product</li>
    </ul>
    </div>
    </>
    )
  }
}
