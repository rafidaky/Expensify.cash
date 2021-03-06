import React from 'react';
import {Text} from 'react-native';
import {propTypes, defaultProps} from './displayNamesPropTypes';

// As we don't have to show tooltips of the Native platform so we simply render the full display names list.
const DisplayNames = ({
    fullTitle,
    numberOfLines,
    textStyles,
}) => (
    <Text style={textStyles} numberOfLines={numberOfLines}>
        {fullTitle}
    </Text>
);

DisplayNames.propTypes = propTypes;
DisplayNames.defaultProps = defaultProps;
DisplayNames.displayName = 'DisplayNames';

export default DisplayNames;
