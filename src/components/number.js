import React,{Component} from "react"
import { connect} from "react-redux"
import {increaseNumber, decreaseNumber} from "../action"

class Number extends Component{
    renderList= ()=>{
            return (<div>
                <button onClick={()=>this.props.increaseNumber(this.props.numberToShoe)}>-</button>
                <div>{this.props.numberToShoe}</div>
                <button onClick={()=>this.props.decreaseNumber(this.props.numberToShoe)}>+</button>
            </div>)
    }
    render(){
        console.log(this.props)
    return <div> {this.renderList()}</div>
    }
}

const mapStateToProps=(state)=>{
    return{
        numberToShoe: state.number
    }
}

export default connect(mapStateToProps, {increaseNumber,decreaseNumber})(Number)