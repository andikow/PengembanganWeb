import React from 'react';
import './../assets/css/help.css';
import {Link} from 'react-router-dom';


export default class Shipping extends React.Component{

  render(){

    return(
    <>
    <div class="content">
    <h2>Shipping Times and Costs</h2><br/>
    <h3>Shipments to AK, HI, P.O. Box, APO, PR </h3>
    <p>Standard shipping to AK, HI and Puerto Rico are generally delivered within 5 mailing days after the order is shipped. However, these locations may have delivery times up to 9 mailing days.</p>

    <p>APO destinations with Standard shipping can take up to 30 business days to be received, while Premium shipping to APO destinations may take up to 10 business days to be received after the order is shipped. Express shipping is not available to P.O. Boxes or APO address. If you enter a P.O. Box or an APO address for Express shipping, we will ship your order via our Premium shipping option. For more details about our Express shipping, please refer to this FAQ. </p>

    <h3>Customs and fees</h3>
    <p>Orders being shipped outside of the United States are subject to customs or duty fees. The fees are governmental in nature and not charged by Binco. We state 1) in checkout, next to the international shipping options, and 2) in the confirmation email that these fees may apply. Selecting the gift wrap option at checkout will not prevent these fees from being charged. For any issues regarding customs or duty fees, please contact your local customs office. These fees cannot be refunded, as they are not charged by us.</p>
    <p><span style={{fontWeight:'bold'}}>Please note:</span> International shipping times are not guaranteed. Customs clearance can significantly delay the delivery of international orders. Such delays are not reflected in our estimated shipping times and are beyond our control. To ensure the most efficient handling of your international order, please make sure to include a local telephone number and email where you can be reached. Please check with your local customs authorities in advance to determine your country's specific import requirements.</p>
    </div>
    </>
    )
  }
}
