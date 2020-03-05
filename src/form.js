import React from 'react';

class Form extends React.Component {
    state = {
        firstName : '', 
        lastName: '',
        userName: '',
        password: '',
    }

    onSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state)
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
                    placeholder='user name'
                    value={this.state.userName} 
                    onChange={e => this.setState({userName: e.target.value})}
                  />


                <input 
                type = 'password'
                    placeholder='password'
                    value={this.state.password} 
                    onChange={e => this.setState({password: e.target.value})} 
                 />

                <button onClick ={(e) => this.onSubmit(e)}>Submit</button>

            </form>
        );
    }
}



export default Form;