import { useState } from "react";
import { RiFilter3Line, RiSearchLine } from "react-icons/ri";
import OtherIntegrationCardComponent from "./OtherIntegrationCardComponent";
import { FaUser } from "react-icons/fa";

interface IntegrationDataType {
    name: string,
    logo: React.ReactNode,
    connected: boolean,
    about: string
}

const OtherIntegrationsComponent = () => {
    
    const [selected, setSelected] = useState(1);

    const integrationData: IntegrationDataType[] = [
        { name: "Dropbox", logo: <FaUser />, connected: true, about: "Platform for storing, sharing, and synchronizing files."},
        { name: "Google Drive", logo: <FaUser />, connected: true, about: "Platform for storing, sharing, and synchronizing files."},
        { name: "Mailchimp", logo: <FaUser />, connected: true, about: "For Targeted Email Marketing" },
        { name: "Zendesk", logo: <FaUser />, connected: false, about: "For customer support and ticket management." },
        { name: "Zoom", logo: <FaUser />, connected: false, about: "For conducting virtual meetings and interviews."},
    ]
    
    return (
        <div className="w-full flex flex-col gap-4 overflow-y-hidden">
            <div className="flex flex-col lg:flex-row sm:gap-4 justify-between">
                <div className="w-fit flex gap-2 bg-[#ECEFF3] p-1 rounded-lg text-[#666D80] text-[14px] font-bold">
                    <button onClick={() => setSelected(1)} className={`${selected === 1 ? "bg-white rounded-lg px-5 py-2 text-black" : "px-5 py-2"}`}>All Apps</button>
                    <button onClick={() => setSelected(2)} className={`${selected === 2 ? "bg-white rounded-lg px-5 py-2 text-black" : "px-5 py-2"}`}>Connected</button>
                    <button onClick={() => setSelected(3)} className={`${selected === 3 ? "bg-white rounded-lg px-5 py-2 text-black" : "px-5 py-2"}`}>Disconnected</button>
                </div>
                <div className="flex gap-3 text-[14px]">
                    <div className="flex gap-2 items-center text-[#666D80] border-[#DFE1E7] border-2 px-3 py-2 rounded-lg">
                        <RiSearchLine className="text-[16px]"/>
                        <input className="focus:outline-none" placeholder="Search"/>
                    </div>
                    <div className="flex gap-2 items-center border-[#DFE1E7] border-2 px-4 py-2 rounded-lg">
                        <RiFilter3Line className="text-[16px]"/>
                        Filter
                    </div>
                </div>
            </div>
            <div className="max-h-full w-full overflow-y-auto p-2">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    {selected === 1 ? integrationData.map((item, index) => (
                            <OtherIntegrationCardComponent key={index} logo={item.logo} name={item.name} connected={item.connected} about={item.about} />
                    )) : null}
                    {selected === 2 ? integrationData.map((item, index) => (
                            item.connected ? <OtherIntegrationCardComponent key={index} logo={item.logo} name={item.name} connected={item.connected} about={item.about} /> : null
                    )) : null}
                    {selected === 3 ? integrationData.map((item, index) => (
                            !item.connected ? <OtherIntegrationCardComponent key={index} logo={item.logo} name={item.name} connected={item.connected} about={item.about} /> : null
                    )) : null}
                </div>
            </div>
        </div>
    );
}

export default OtherIntegrationsComponent;