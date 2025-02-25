import { GB, IN, US } from "country-flag-icons/react/1x1";
import { BiDollar, BiPound, BiRupee } from "react-icons/bi";

export const currencyList = [
    { value: "GBP", name: "Pound Sterling", flag: <GB className="rounded-full" /> },
    { value: "INR", name: "Indian Rupee", flag: <IN className="rounded-full" /> },
    { value: "USD", name: "US Dollar", flag: <US className="rounded-full" /> },
];

export const getFlag: (currency: string) => React.ReactNode = (currency: string) => {
    switch (currency) {
        case "GBP":
            return <GB className="rounded-full" />
        case "INR":
            return <IN className="rounded-full" />
        case "USD":
            return <US className="rounded-full" />
    }
} 

export const getCurrency: (currency: string) => React.ReactNode = (currency: string) => {
    switch (currency) {
        case "GBP":
            return <BiPound />
        case "INR":
            return <BiRupee />
        case "USD":
            return <BiDollar />
    }
}