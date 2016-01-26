// @flow weak

import type { Model, Sentence, Id } from '../model'

import React, {
  View,
  ViewPagerAndroid,
  StyleSheet
} from 'react-native'

import Page from './page'

const renderPage = (text: Sentence, id: Id) => (
  <View key={id}>
    <Page text={text} id={id} />
  </View>
)

const renderPages = ({ sentences }: Model) =>
  sentences.length > 0
    ? sentences.map(renderPage)
    : renderPage('Create your first sentence!', 0)

export default ({ state, dispatch }) => (
  <ViewPagerAndroid
    style={styles.viewPager}
    initialPage={state.current}
    onPageSelected={e => dispatch({ type: 'CHANGE', id: e.nativeEvent.position })}>
    {renderPages(state)}
  </ViewPagerAndroid>
)

const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  }
})
