import React from 'react';
import { StatusBar } from 'react-native';


export const MyStatusBar = ({ backgroundColor, barStyle, translucent }) => (
  <StatusBar
    translucent={translucent}
    backgroundColor={backgroundColor}
    barStyle={barStyle}
  />
);
