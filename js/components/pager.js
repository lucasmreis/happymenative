// @flow weak

import type { Model, Sentence, Id } from '../model'

import React, {
  View,
  ViewPagerAndroid,
  StyleSheet
} from 'react-native'

import messages from '../messages'
import Page from './page'

const renderPage = (text: Sentence, id: Id) => (
  <View key={id}>
    <Page text={text} />
  </View>
)

const renderPages = ({ sentences }: Model) =>
  sentences.length > 0
    ? sentences.map(renderPage)
    : renderPage(messages.default_page, 0)

export default React.createClass({
  shouldComponentUpdate(nextProps) {
    const prev = this.props.state.sentences.length
    const next = nextProps.state.sentences.length

    if (prev !== next) {
      this.forceUpdate()
    }

    return prev !== next
  },
  viewPager: undefined,
  componentDidUpdate() {
    if (this.viewPager) {
      this.viewPager.setPage(this.props.state.current)
    }
  },
  render() {
    const { state, dispatch } = this.props
    return (
      <ViewPagerAndroid
        style={styles.viewPager}
        initialPage={0}
        onPageSelected={e => dispatch({ type: 'SELECT', id: e.nativeEvent.position })}
        ref={viewPager => this.viewPager = viewPager}>
        {renderPages(state)}
      </ViewPagerAndroid>
    )
  }
})

const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  }
})
