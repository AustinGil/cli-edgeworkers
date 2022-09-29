export enum ErrorMessage {
    permissionError = 'ERROR: Operation could not be performed. The identity is not authorized to manage any context.',
    CLONE_EW_404 = 'The requested resource tier is not found.',
    GENERIC_403 = 'Permission is invalid.',
    GET_AVAILABLE_REPORTS_ERROR = 'ERROR: Unable to get available EdgeWorkers reports.',
    GET_REPORT_ERROR = 'ERROR: Unable to get EdgeWorkers report.',
    REGISTER_EW_ERROR = 'ERROR: Unable to create EdgeWorker ID.',
    UPDATE_EW_ERROR = 'ERROR: Unable to update EdgeWorker ID.',
    DELETE_EW_ERROR = 'ERROR: Unable to delete EdgeWorker ID.',
    DELETE_VERSION_ERROR = 'ERROR: Unable to delete EdgeWorker version.',
    CLONE_EW_ERROR = 'ERROR: Unable to clone the specified EdgeWorker ID.',
    LISTALL_EW_ERROR = 'ERROR: Unable to retrieve EdgeWorkers list.',
    GET_CONTRACT_ERROR = 'ERROR: Unable to retrieve contracts for your account.',
    GET_PROPERTIES_ERROR = 'ERROR: Unable to retrieve properties for the specified EdgeWorker ID.',
    GET_RESTIER_ERROR = 'ERROR: Unable to retrieve resource tiers for the contract.',
    GET_RESTR_FOR_EW_ERROR = 'ERROR: Unable to retrieve resource tiers for the specified EdgeWorker ID.',
    GET_RESTR_FOR_EW_404 = 'Unable to find the requested EdgeWorker ID.',
    LISTALL_EW_404 = 'The requested resource tier was not found.',
    UPDATE_EW_400 = 'Cloning an EdgeWorker ID is required in order to edit the resource tier ID.',
    AUTH_TOKEN_ERROR = 'ERROR: Unable to create authentication token.',
    EKV_TIMEOUT_ERROR = 'The EdgeKV service was unable to respond in time. Please retry the request later.',
    EW_TIMEOUT_ERROR = 'The EdgeWorkers service was unable to respond in time. Please retry the request later.',
    DOWNLOAD_TARBALL_ERROR = 'Failed to download tarball.'

}
