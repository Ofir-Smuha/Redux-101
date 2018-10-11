import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { incCounter, subCounter} from 'actions/valueActions'
import styled from 'styled-components'


const Value = styled.h2`
` 
const Button = styled.button`
`

class Counter extends Component {
  render() {
    return (
      <div>
        <Value>{this.props.value}</Value>
        <Button onClick={this.props.incCounter}>+</Button>
        <Button onClick={this.props.subCounter}>-</Button>
      </div>
    )
  }
}

Counter.propTypes = {
  incValue: PropTypes.func,
  subValue: PropTypes.func,
  value: PropTypes.number
}

const mapStateToProps = (state) => ({
  value: state.counter.value
})

export default connect(mapStateToProps, {incCounter, subCounter})(Counter);
