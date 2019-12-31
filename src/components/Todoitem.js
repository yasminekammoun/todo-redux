import React, { Component } from 'react'
 
export class Todoitem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
padding:'10px',
borderBottom: '1px #ccc dotted', 
 textDecoration :this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    


    render() {
        const {id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                     <input type="checkbox" onChange={this.props.markComplete.bind(this,id)}/> {' '} 
                     { title } 
                    <button style={btnStyle} onClick={this.props.markDelete.bind(this,id)}>x</button>
                    </p>
            </div>
        )
    }
}



export default Todoitem

