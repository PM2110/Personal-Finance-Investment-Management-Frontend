const BudgetEndpoints = {
    addBudget: () => `/budget`,
    getAllBudget: (userID: number) => `/budget/${userID}`,
    updateBudget: (budgetID: number) => `/budget/${budgetID}`,
    deleteBudget: (budgetID: number) => `/budget/${budgetID}`,
}

export default BudgetEndpoints;