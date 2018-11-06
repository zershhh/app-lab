import React, { Component } from 'react';

class Calculate extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <br/>
                <button onClick ={this.props.handleClicked} >Calculate Correlation</button>
                
            </div>
        );
    }
}
 
export default Calculate ;