import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import ACTIONS from './ACTiONS.js';
import STORE from './STORE.js';
import AppController from './lugg-view-controller.js';



const showReviews = React.createClass({

   render:function(){
      let reviews = this.props.newReviewData.map(function(model, i){

         return (
               <div className ="col-xs-6 col-md-4 " key={i}>
                     <p className ="thumbnail">{model.get('user').useruser}<br/>
                     {typeof model === 'object' && model.get('review')}</p>
               </div>

         )

      })

      return(
         <div>
            <a href = "#"><i className = "fa fa-home fa-2x" aria-hidden = "true"></i></a>
               <div className="container-fluid review-container">
                        <img className ="review-logo" src= "../images/logo1.png" alt="" />
                        <h1 className ="review-lead">User Reviews</h1>
               </div>
                  <div className = "container-fluid reviews-info">
                     <div className ="row">
                        <div >
                           {reviews}
                        </div>
                  </div>
            </div>
         </div>
      )
   }
});


module.exports = showReviews
