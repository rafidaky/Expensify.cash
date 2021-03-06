import _ from 'underscore';
import PropTypes from 'prop-types';
import {propTypes as modalPropTypes, defaultProps as defaultModalProps} from '../Modal/ModalPropTypes';

const propTypes = {
    ...(_.omit(modalPropTypes, 'type', 'popoverAnchorPosition')),

    // The anchor position of the popover
    anchorPosition: PropTypes.shape({
        top: PropTypes.number,
        right: PropTypes.number,
        bottom: PropTypes.number,
        left: PropTypes.number,
    }).isRequired,

    // Describes what type of pop over is it - based on the position
    popOverType: modalPropTypes.type,
};

const defaultProps = {
    ...(_.omit(defaultModalProps, 'type', 'popoverAnchorPosition')),
};

export {propTypes, defaultProps};
