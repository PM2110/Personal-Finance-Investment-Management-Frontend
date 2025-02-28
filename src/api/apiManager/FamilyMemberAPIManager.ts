import { FamilyAddData, FamilyMemberData } from "../../redux/familyMemberSlice";
import APIMethods from "../APIMethods";
import FamilyMemberEndpoints from "../endpoints/FamilyMemberEndpoints";

const FamilyMemberAPIManager = {
    addFamilyMember: (data: FamilyAddData) => {
        const url = FamilyMemberEndpoints.addFamilyMember();
        return APIMethods.post(url, data);
    },
    getAllFamilyMember: (familyID: number) => {
        const url = FamilyMemberEndpoints.getAllFamilyMembers(familyID);
        return APIMethods.get(url);
    },
    updateFamilyMember: (memberID: number, data: FamilyMemberData) => {
        const url = FamilyMemberEndpoints.updateFamilyMember(memberID);
        return APIMethods.put(url, data);
    },
    deleteFamilyMember: (memberID: number) => {
        const url = FamilyMemberEndpoints.deleteFamilyMember(memberID);
        return APIMethods.delete(url);
    },
}

export default FamilyMemberAPIManager;