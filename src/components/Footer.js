import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
        <footer class="sticky-footer fixed-bottom" style={{ 'backgroundColor': '#212328', height: '25px', padding: '5px'}}>
            <div class="container my-auto">
                <div class="text-center my-auto copyright text-white" style={{ fontSize:'12px' }}><span>Copyright © IPManager 2024</span></div>
            </div>
        </footer>
        );
    }
}
  
export default Footer;