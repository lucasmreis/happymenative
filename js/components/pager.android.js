import React, {
  ViewPagerAndroid,
  StyleSheet
} from 'react-native'

import Sentence from './sentence'

export default ({ state, dispatch }) => (
  <ViewPagerAndroid
    style={styles.viewPager}
    initialPage={state.current}
    onPageSelected={e => dispatch({ type: 'CHANGE', id: e.nativeEvent.position })}>
    {state.sentences.map((s, i) => <Sentence text={s} id={i} key={i} />)}
  </ViewPagerAndroid>
)

const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  }
})
