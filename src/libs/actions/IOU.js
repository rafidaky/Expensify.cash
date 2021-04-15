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

/**
 * Retrieve an IOU report using a transactionID, then navigate to the page.
 */
function getIOUReportDetailFromTransactionID(transactionID) {
    API.Get({
        returnValueList: 'transactionList',
        transactionID: transactionID,
    })
        .then(data => {
            const chatReportID = data.transactionList[0].reportID;
            if (!chatReportID) {
                return;
            }
            Navigation.navigate(ROUTES.getIouDetailsRoute(chatReportID));
        })
        .catch((error) => {
            console.error('Error retrieving Transaction: ', error);
        });
}

// Re-enable the prefer-default-export lint when additional functions are added
export {
    getPreferredCurrency,
    getIOUReportDetailFromTransactionID,
    settleIOUReport,
};
