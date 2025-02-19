import APIMethods from "../APIMethods";
import UserEndpoints from "../endpoints/UserEndpoints";

interface UserData {
    email: string,
    password: string,
    userName: string,
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