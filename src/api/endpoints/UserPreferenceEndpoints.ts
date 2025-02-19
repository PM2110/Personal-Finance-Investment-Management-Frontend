const UserPreferenceEndpoints = {
    addUserPreference: () => `/userPreference`,
    getUserPreference: (userID: number) => `/userPreference/${userID}`,
    updateUserPreference: (userID: number) => `/userPreference/${userID}`,
    deleteUserPreference: (userID: number) => `/userPreference/${userID}`,
}

export default UserPreferenceEndpoints;