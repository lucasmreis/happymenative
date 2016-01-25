import React, {
  View,
  ViewPagerAndroid,
  StyleSheet
} from 'react-native'

import Sentence from './sentence'

const renderPage = (text, id) => (
  <View key={id}>
    <Sentence text={text} id={id} />
  </View>
)

export default ({ state, dispatch }) => (
  <ViewPagerAndroid
    style={styles.viewPager}
    initialPage={state.current}
    onPageSelected={e => dispatch({ type: 'CHANGE', id: e.nativeEvent.position })}>
    {state.sentences.map(renderPage)}
  </ViewPagerAndroid>
)

const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  }
})
