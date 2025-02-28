const FamilyMemberEndpoints = {
    addFamilyMember: () => `/familyMember`,
    getAllFamilyMembers: (familyID: number) => `/familyMember/${familyID}`,
    updateFamilyMember: (memberID: number) => `/familyMember/${memberID}`,
    deleteFamilyMember: (memberID: number) => `/familyMember/${memberID}`,
}

export default FamilyMemberEndpoints;