import { FamilyData, FamilyMember } from "../../redux/familySlice";
import APIMethods from "../APIMethods";
import FamilyEndpoints from "../endpoints/FamilyEndpoints";


const FamilyAPIManager = {
    addFamily: (data: FamilyData) => {
        const url = FamilyEndpoints.addFamily();
        return APIMethods.post(url, data);
    },
    addFamilyMember: (data: { memberEmail: string, familyMember: FamilyMember }) => {
        const url = FamilyEndpoints.addFamilyMember();
        return APIMethods.post(url, data);
    },
    getAllFamily: (userID: number) => {
        const url = FamilyEndpoints.getAllFamily(userID);
        return APIMethods.get(url);
    },
    updateFamily: (familyID: number, data: FamilyData) => {
        const url = FamilyEndpoints.updateFamily(familyID);
        return APIMethods.put(url, data);
    },
    deleteFamily: (familyID: number) => {
        const url = FamilyEndpoints.deleteFamily(familyID);
        return APIMethods.delete(url);
    },
}

export default FamilyAPIManager;