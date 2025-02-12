import { useState } from "react";
import SideBarSendMoneyComponent from "../components/moneytransfer/SideBarSendMoneyComponent";
import HeaderSendMoneyComponent from "../components/moneytransfer/HeaderSendMoneyComponent";
import SendMoneyAmountForm from "../components/moneytransfer/SendMoneyAmountForm";
import SendMoneyPersonalDetailsTypeForm from "../components/moneytransfer/SendMoneyPersonalDetailsTypeForm";
import SendMoneyPersonalDetailsForm from "../components/moneytransfer/SendMoneyPersonalDetailsForm";
import SendMoneyRecipientTypeForm from "../components/moneytransfer/SendMoneyRecipientTypeForm";
import SendMoneyRecipientSomeoneForm from "../components/moneytransfer/SendMoneyRecipientSomeoneForm";
import SendMoneyReviewForm from "../components/moneytransfer/SendMoneyReviewForm";

const SendMoneyPage = () => {

    const [selected, setSelected] = useState(1);

    const getForm = () => {
        switch (selected){
            case 1:
                return <SendMoneyAmountForm />
            case 2:
                return <SendMoneyPersonalDetailsTypeForm />
                return <SendMoneyPersonalDetailsForm />
            case 3:
                return <SendMoneyRecipientTypeForm />
                return <SendMoneyRecipientSomeoneForm />
            case 4:
                return <SendMoneyReviewForm />
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