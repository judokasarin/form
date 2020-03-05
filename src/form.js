import React from 'react';

class Form extends React.Component {
    state = {
        firstName : '', 
        lastName: '',
        userName: '',
        password: '',
    }


    render(){
        return(
            <form className='grid'>
                <input 
                    placeholder='first name'
                    value={this.state.firstName} 
                    onChange={e => this.setState({firstName: e.target.value})} 
                 />

                <input 
                    placeholder='last name'
                    value={this.state.lastName} 
                    onChange={e => this.setState({lastName: e.target.value})} 
                 />


                <input 
                    placeholder='first name'
                    value={this.state.firstName} 
                    onChange={e => this.setState({firstName: e.target.value})}
                  />


                <input 
                    placeholder='first name'
                    value={this.state.firstName} 
                    onChange={e => this.setState({firstName: e.target.value})} 
                 />



            </form>
        );
    }
}



export default Form;