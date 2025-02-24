const FamilyEndpoints = {
    addFamily: () => `/family`,
    addFamilyMember: () => `/family/addMember/`,
    getAllFamily: (userID: number) => `/family/${userID}`,
    updateFamily: (familyID: number) => `/family/${familyID}`,
    deleteFamily: (familyID: number) => `/family/${familyID}`,
}

export default FamilyEndpoints;