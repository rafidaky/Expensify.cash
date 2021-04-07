/**
 * This is a file containing constants for all of the routes we want to be able to go to
 */
export default {
    HOME: '',
    SETTINGS: 'settings',
    SETTINGS_PROFILE: 'settings/profile',
    SETTINGS_PREFERENCES: 'settings/preferences',
    SETTINGS_PASSWORD: 'settings/password',
    SETTINGS_PAYMENTS: 'settings/payments',
    NEW_GROUP: 'new/group',
    NEW_CHAT: 'new/chat',
    REPORT: 'r',
    REPORT_WITH_ID: 'r/:reportID',
    getReportRoute: reportID => `r/${reportID}`,
    IOU_REQUEST: 'iou/request',
    IOU_BILL: 'iou/split',
    IOU_DETAILS: 'iou/details',
    IOU_DETAILS_WITH_IOU_REPORT_ID: 'iou/details/:iouReportID',
    getIouDetailsRoute: iouReportID => `iou/details/${iouReportID}`,
    SEARCH: 'search',
    SIGNIN: 'signin',
    SET_PASSWORD_WITH_VALIDATE_CODE: 'setpassword/:validateCode',
    DETAILS: 'details',
    DETAILS_WITH_LOGIN: 'details/:login',
    getDetailsRoute: login => `details/${login}`,
};
