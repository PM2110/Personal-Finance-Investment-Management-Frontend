import APIMethods from "../APIMethods";
import FamilyEndpoints from "../endpoints/FamilyEndpoints";

interface FamilyData {
    familyID: number,
    familyMembers: string,
    familyName: string,
    createdByID: number,
    createdAt: Date,
}

const FamilyAPIManager = {
    addFamily: (data: FamilyData) => {
        const url = FamilyEndpoints.addFamily();
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