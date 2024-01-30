import { useState, useEffect } from "react";
import { MENU_API } from "./constant";


const useRestaurantMenu = (resID) => {
    const [resInfo, setResInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(MENU_API + resID);
        const data = await response.json();
        console.log(data.data);
        setResInfo(data?.data);
    }
    return resInfo;
}

export default useRestaurantMenu;