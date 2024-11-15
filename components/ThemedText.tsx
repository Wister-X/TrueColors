import { Text, TextProps } from 'react-native';
import React, { forwardRef } from 'react';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export const ThemedText = forwardRef<Text, ThemedTextProps>((props, ref) => {
  const { style, lightColor, darkColor, type, ...otherProps } = props;

  const color = lightColor || '#000';

  const styles = {
    default: {
      fontSize: 16,
    },
    title: {
      fontSize: 24,
      fontWeight: '600',
    },
    defaultSemiBold: {
      fontSize: 16,
      fontWeight: '600',
    },
    subtitle: {
      fontSize: 16,
      color: '#666',
    },
    link: {
      fontSize: 16,
      color: '#007AFF',
    },
  };

  return (
    <Text
      ref={ref}
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...otherProps}
    />
  );
});

ThemedText.displayName = 'ThemedText';
