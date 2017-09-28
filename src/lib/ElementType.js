import PropTypes from 'prop-types'
import React, { Component } from 'react'

import * as customPropTypes from './customPropTypes'
import computeElementType from './computeElementType'

export default class ElementType extends Component {
  static propTypes = {
    defaultAs: customPropTypes.as,
    typeComputer: PropTypes.string,
    /**
     * Called when componentDidMount.
     *
     * @param {HTMLElement} node - Referred node.
     */
    innerRef: PropTypes.func,
  }

  render() {
    const { defaultAs, innerRef, typeComputer, ...rest } = this.props
    const Child = computeElementType({ as: defaultAs }, rest, typeComputer)

    // if (typeof Child === 'string') return <Child {...rest} ref={innerRef}/>
    // if (Child._meta) return <Child {...rest} innerRef={innerRef}/>
    return <Child {...rest} ref={innerRef} />
    // return (
    //   <Ref innerRef={innerRef}>
    //     <Child {...rest} />
    //   </Ref>
    // )
  }
}