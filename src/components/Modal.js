import React, { Component } from 'react'
import { connect } from 'react-redux';

 class Modal extends Component {
    render() {
        console.log(this.props.modal, "modal");
        return (
            <div  className={`modal ${this.props.modal ? "openmodal": ""}`}>
                Modal
            </div>
        )
    }
}
export default connect(
    state => ({
        modal: state.state2
    })
)(Modal);
