import React from 'react'
import renderer from 'react-test-renderer'

import QuestionList from './QuestionList'

describe.skip('<QuestionList />', () => {
  const defaultProps = {
    store: {
      getStore: () => {}
    }
  }
  const wrapper = renderer.create(<QuestionList {...defaultProps} />)

  test('render', () => {
    expect(wrapper).toMatchSnapshot()
  })
})

