import axios from 'axios';

export const loadTheme = () => {

    return async (dispatch) => {

        try{

            let response = await axios.get(`https://p365services.azurewebsites.net/api/Utilities?code=nwlK1wYTsoGio4nFizR5NjSNHDEsEAlhCFM/j2SjYWWT/4aK1EOqlg==&tenantId=7D6B2DFC-2750-4470-AFD2-6DC13C3F0DD0&siteCollectionId=9C8EEBA7-7D4A-45DD-8BFF-0EF06DA00AA8&siteId=4CE1C3B5-044B-4314-8A2B-90D8192FAE38&utilityType=siteTheme`);
            console.log(response);

            dispatch({type:"LOAD_THEME", data:response.data.AccentColor})

            }

        catch(e){
            console.log(e)
        }

    }
}