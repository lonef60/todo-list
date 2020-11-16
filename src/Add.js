import React, {Component} from 'react';

class Add extends Component {
    state = {
        content: ''
    }

    mudar = (e) => {
        this.setState ({
            content: e.target.value
        })
    }

    enviar = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:''
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.enviar}>
                    <label>Adicione uma tarefa:</label>
                    <input type="text" onChange={this.mudar} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default Add;