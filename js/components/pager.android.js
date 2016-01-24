import React, {
  ViewPagerAndroid,
  StyleSheet
} from 'react-native'

import Sentence from './sentence'

export default ({ state }) => (
  <ViewPagerAndroid
    style={styles.viewPager}
    initialPage={0}>
    {state.sentences.map((s, i) => <Sentence text={s} id={i} key={i} />)}
  </ViewPagerAndroid>
)

const styles = StyleSheet.create({
  viewPager: {
    flex: 1
  }
})
