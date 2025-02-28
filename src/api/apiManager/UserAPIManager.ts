import APIMethods from "../APIMethods";
import UserEndpoints from "../endpoints/UserEndpoints";

interface UserData {
    email: string,
    password: string,
    userName: string,
}

interface EmailData {
    to: string,
    subject: string,
    text: string,
}

const UserAPIManager = {
    signUp: (data: UserData) => {
        const url = UserEndpoints.signUp();
        return APIMethods.post(url, data)
    },
    signIn: (data: UserData) => {
        const url = UserEndpoints.signIn();
        return APIMethods.post(url, data);
    },
    getUserNames: (data: string) => {
        const url = UserEndpoints.getUserNames(data);
        return APIMethods.get(url);
    },
    sendEmail: (data: EmailData) => {
        const url = UserEndpoints.sendEmail();
        return APIMethods.post(url, data);
    },
    verifyEmail: (data: { email: string }) => {
        const url = UserEndpoints.verifyEmail();
        return APIMethods.post(url, data);
    },
    updateUser: (userID: number, data: UserData) => {
        const url = UserEndpoints.updateUser(userID);
        return APIMethods.put(url, data);
    },
    deleteUser: (userID: number) => {
        const url = UserEndpoints.deleteUser(userID);
        return APIMethods.delete(url);
    },
}

export default UserAPIManager;