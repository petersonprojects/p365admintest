import axios from 'axios';

export const loadTheme = () => {

    return async (dispatch) => {

        try{

            let response = await axios.get(`https://p365services.azurewebsites.net/api/Utilities?code=nwlK1wYTsoGio4nFizR5NjSNHDEsEAlhCFM/j2SjYWWT/4aK1EOqlg==&tenantId=7D6B2DFC-2750-4470-AFD2-6DC13C3F0DD0&siteCollectionId=ACFD1DBB-B31F-459D-B278-61DFB8979CE6&siteId=5FF5AE6F-2886-4277-B0BF-B4872F3D4440&utilityType=siteTheme`);
            console.log(response);

            dispatch({type:"LOAD_THEME", data:response.data.AccentColor})

            }

        catch(e){
            console.log(e)
        }

    }
}