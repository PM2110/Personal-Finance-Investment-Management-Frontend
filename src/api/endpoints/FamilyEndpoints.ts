const FamilyEndpoints = {
    addFamily: () => `/family`,
    getAllFamily: (userID: number) => `/family/${userID}`,
    updateFamily: (familyID: number) => `/family/${familyID}`,
    deleteFamily: (familyID: number) => `/family/${familyID}`,
}

export default FamilyEndpoints;