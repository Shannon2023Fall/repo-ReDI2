import React from 'react';
class Footer extends React.Component{
    render(){
        return <h1> Hello, {this.props.name}!</h1>;
    }
}

function App(){
    return(
    <div>
    <small>
    Copyright © 2023 ShanshansWork. All Rights Reserved.
    </small>
    </div>
    );
}
export default App;
