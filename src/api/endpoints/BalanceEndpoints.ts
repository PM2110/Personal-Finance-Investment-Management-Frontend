const BalanceEndpoints = {
    addBalance: () => `/balance`,
    getAllBalance: (userID: number) => `/balance/${userID}`,
    updateBalance: (balanceID: number) => `/balance/${balanceID}`,
    deleteBalance: (balanceID: number) => `/balance/${balanceID}`,
}

export default BalanceEndpoints;