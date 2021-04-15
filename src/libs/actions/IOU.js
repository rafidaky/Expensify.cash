import Onyx from 'react-native-onyx';
import ONYXKEYS from '../../ONYXKEYS';
import Navigation from '../../libs/Navigation/Navigation';
import ROUTES from '../../ROUTES';
import * as API from '../API';

/**
 * Retrieve the users preferred currency
 */
function getPreferredCurrency() {
    Onyx.merge(ONYXKEYS.IOU, {loading: true});

    // fake loading timer, to be replaced with actual network request
    setTimeout(() => {
        Onyx.merge(ONYXKEYS.IOU, {loading: false});
    }, 1600);
}

/**
 * Settles an IOU Report
 */
function settleIOUReport({
    reportID, paymentMethodType,
}) {
    //Onyx.merge(ONYXKEYS.IOU, {loading: true, creatingIOUTransaction: true, error: false});
    console.debug('juless: settleIOUReport', {'reportID': reportID, 'paymentType': paymentMethodType});
    return;

    API.PayIOU({
        reportID,
        paymentMethodType,
    })
        .then(data => {
            console.debug('juless: IOU Settled: ', data);
        });
}

// Re-enable the prefer-default-export lint when additional functions are added
export {
    getPreferredCurrency,
    settleIOUReport,
};
