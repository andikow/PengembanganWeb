import React from 'react';
import './../assets/css/modalsuccess.css';
import {Link} from 'react-router-dom';


export default class Contact extends React.Component{

  render(){

    return(
    <>
    <a href="#myModal" class="trigger-btn" data-toggle="modal">Click to Open Success Modal</a>
    <div id="myModal" class="modal fade">
    	<div class="modal-dialog modal-confirm">
    		<div class="modal-content">
    			<div class="modal-header justify-content-center">
    				<div class="icon-box">
    					<i class="far fa-check"></i>
    				</div>
    				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
    			</div>
    			<div class="modal-body text-center">
    				<h4>Success!</h4>
    				<p>Product successfully added to your shopping cart!</p>
    				<button class="btn btn-success" data-dismiss="modal"><span>Continue</span> <i class="far fa-long-arrow-right"></i></button>
    			</div>
    		</div>
    	</div>
    </div>
    </>
    )
  }
}
