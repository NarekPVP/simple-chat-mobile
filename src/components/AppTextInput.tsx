import React from 'react'
import { StyleProp, StyleSheet, TextInput, View, ViewStyle } from 'react-native'

interface IAppTextInputProps {
  value?: string
  onChange?: () => void
  onBlur?: () => void
  style?: StyleProp<ViewStyle>
}

const AppTextInput = (props: IAppTextInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default AppTextInput
