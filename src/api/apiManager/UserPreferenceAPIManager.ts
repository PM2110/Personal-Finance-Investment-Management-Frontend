import APIMethods from "../APIMethods";
import UserPreferenceEndpoints from "../endpoints/UserPreferenceEndpoints";

interface UserPreferenceData {
    userID: number,
    language: string,
    theme: string,
    generalNotifications: string,
    notificationMethods: string,
    currency: string,
    timeZone: string,
    dateFormate: string,
}

const UserPreferenceAPIManager = {
    addUserPreference: (data: UserPreferenceData) => {
        const url = UserPreferenceEndpoints.addUserPreference();
        return APIMethods.post(url, data);
    },
    getUserPreference: (userID: number) => {
        const url = UserPreferenceEndpoints.getUserPreference(userID);
        return APIMethods.get(url);
    },
    updateUserPreference: (userID: number, data: UserPreferenceData) => {
        const url = UserPreferenceEndpoints.updateUserPreference(userID);
        return APIMethods.put(url, data);
    },
    deleteUserPreference: (userID: number) => {
        const url = UserPreferenceEndpoints.deleteUserPreference(userID);
        return APIMethods.delete(url);
    },
}

export default UserPreferenceAPIManager;