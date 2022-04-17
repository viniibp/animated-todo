import React, { useCallback } from 'react';
import * as Linking from 'expo-linking'
import { Button, IButtonProps } from 'native-base'

type Props = {
  href: string
} & IButtonProps

export const LinkButton = ({ href, ...props }: Props) => {
  const handlerPress = useCallback(() => {
    Linking.openURL(href)
  }, [href])
  return (
    <Button {...props} onPress={handlerPress} />
  );
};

export default LinkButton;