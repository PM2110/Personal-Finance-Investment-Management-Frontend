import { useState } from "react";
import SideBarHomeComponent from "../components/home/SideBarHomeComponent";
import HeaderHomeComponent from "../components/home/HeaderHomeComponent";
import OtherIntegrationsComponent from "../components/other/integration/OtherIntegrationsComponent";
import MainRecipientsComponent from "../components/main/recipient/MainRecipientsComponent";
import MainBalanceComponent from "../components/main/balance/MainBalanceComponent";
import OtherSettingsComponent from "../components/other/settings/OtherSettingsComponent";
import MainDashboardComponent from "../components/main/dashboard/MainDashboardComponent";
import MainFamilyComponent from "../components/main/family/MainFamilyComponent";
import MainTransactionsComponent from "../components/main/transaction/MainTransactionsComponent";

const HomePage = () => {
    const [selected, setSelected] = useState(5);

    const getForm = () => {
        switch (selected){
            case 1:
                return <MainDashboardComponent />
            case 2:
                return <MainBalanceComponent />
            case 3:
                return <MainFamilyComponent />
            case 4:
                return <MainTransactionsComponent />
            case 5:
                return <MainRecipientsComponent />
            case 6:
                return <OtherIntegrationsComponent />
            case 7:
                return <OtherSettingsComponent />
        }
    }

    return (
        <div className="flex items-center justify-between h-screen w-screen">
            <SideBarHomeComponent selected={selected} setSelected={setSelected} />
            <div className="flex flex-col items-center justify-start overflow-y-auto gap-4 md:gap-5 lg:gap-6 xl:gap-8 w-full h-full px-8 py-10">
                <HeaderHomeComponent selected={selected} />
                {getForm()}
            </div>
        </div>
    );
}

export default HomePage;