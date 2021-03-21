import React from 'react';
import { View } from 'react-native';

const CustomSpacer = ({vertical, horizontal, children} ) => {
    
    return (
        <View style={{ marginVertical: vertical, marginHorizontal: horizontal}}>{children}</View>
    );
}

export default CustomSpacer;