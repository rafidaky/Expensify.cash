import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withOnyx} from 'react-native-onyx';
import ONYXKEYS from '../ONYXKEYS';
import ImageWithSizeCalculation from './ImageWithSizeCalculation';
import addAuthTokenToURL from '../libs/addAuthTokenToURL';

const propTypes = {
    // Source URL for the preview image
    previewSourceURL: PropTypes.string.isRequired,

    // Any additional styles to apply
    // eslint-disable-next-line react/forbid-prop-types
    style: PropTypes.any,

    // Current user session
    session: PropTypes.shape({
        authToken: PropTypes.string.isRequired,
    }).isRequired,

    // Do the urls require an authToken?
    isAuthTokenRequired: PropTypes.bool.isRequired,
};

const defaultProps = {
    style: {},
};

class ThumbnailImage extends Component {
    constructor(props) {
        super(props);

        this.updateImageSize = this.updateImageSize.bind(this);

        this.state = {
            thumbnailWidth: 200,
            thumbnailHeight: 200,
        };
    }

    updateImageSize({width, height}) {
        // Width of the thumbnail works better as a constant than it does
        // a percentage of the screen width since it is relative to each screen
        const thumbnailScreenWidth = 250;
        const scaleFactor = width / thumbnailScreenWidth;
        const imageHeight = height / scaleFactor;
        this.setState({thumbnailWidth: thumbnailScreenWidth, thumbnailHeight: imageHeight});
    }

    render() {
        const url = addAuthTokenToURL({
            url: this.props.previewSourceURL,
            authToken: this.props.session.authToken,
            required: this.props.isAuthTokenRequired,
        });

        return (
            <ImageWithSizeCalculation
                style={this.props.style}
                width={this.state.thumbnailWidth}
                height={this.state.thumbnailHeight}
                url={url}
                onMeasure={this.updateImageSize}
            />
        );
    }
}

ThumbnailImage.propTypes = propTypes;
ThumbnailImage.defaultProps = defaultProps;
export default withOnyx({
    session: {
        key: ONYXKEYS.SESSION,
    },
})(ThumbnailImage);