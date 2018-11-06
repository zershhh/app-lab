import React, { Component } from 'react';

class Drinks extends Component {
    state = {  }
    render() { 
        return (  
            
            <div>
            <br/>
               <a href="www.google.com" id="x"><img src="https://globalassets.starbucks.com/assets/7fdaf1ebaaef41cb9bd7c30755236681.jpg" class="center" alt="drink"width="500"/></a> 
            <br/> 
                <select>
            <option value="Number of Seasonal Drinks">Number of Seasonal Drinks</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
    </select></div>
    
            /*<button onClick ={this.props.handleClicked} >Pick Student</button>*/
        ); 
    }
}
 
export default Drinks ;