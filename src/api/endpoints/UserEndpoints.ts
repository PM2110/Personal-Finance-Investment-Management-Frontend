const UserEndpoints = {
    signUp: () => `/user/signUp`,
    signIn: () => `/user/signIn`,
    sendEmail: () => `/user/sendEmail`,
    verifyEmail: () => `/user/verify`,
    updateUser: (userID: number) => `/user/${userID}`,
    deleteUser: (userID: number) => `/user/${userID}`,
}

export default UserEndpoints;