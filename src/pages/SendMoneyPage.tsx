import { useState } from "react";
import SideBarSendMoneyComponent from "../components/moneytransfer/SideBarSendMoneyComponent";
import HeaderSendMoneyComponent from "../components/moneytransfer/HeaderSendMoneyComponent";
import SendMoneyAmountForm from "../components/moneytransfer/SendMoneyAmountForm";
import SendMoneyPersonalDetailsTypeForm from "../components/moneytransfer/SendMoneyPersonalDetailsTypeForm";

const SendMoneyPage = () => {

    const [selected, setSelected] = useState(1);

    const getForm = () => {
        switch (selected){
            case 1:
                return <SendMoneyAmountForm />
            case 2:
                return <SendMoneyPersonalDetailsTypeForm />
            case 3:
                return "Recipient Form"
            case 4:
                return "Review and Pay Form"
            case 5:
                return "Success Form"
            default:
                return ;
        }
    }

    return (
        <div className="flex items-center justify-between h-screen w-screen">
            <SideBarSendMoneyComponent selected={selected} setSelected={setSelected} />
            <div className="flex flex-col items-center justify-between w-full h-full">
                <HeaderSendMoneyComponent selected={selected} />
                <div className="h-full flex items-center -mt-12">
                    {getForm()}
                </div>
            </div>
        </div>
    );
}

export default SendMoneyPage;