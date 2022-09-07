import axios from "axios";

const apiUrl='http://192.168.29.146:3000'

export const homeCat=async () =>{
    // await axios.get(apiUrl+'/api/categoryAPI').then(res=>{
    //     console.log(res.data);
    //     return( res.data.result)
    // }).catch(err=>console.log(err))
    try {
        const {data} = await axios.get(apiUrl + '/api/categoryAPI');
        console.log(data.result);
        return data.result;
} catch (error) {
    throw error;
}
}

export const backgroundImg = async () => {
    try{
        const {data} = await axios.get(apiUrl+'/api/photoAboutContent_api')
        console.log(data.result[0].homeimg[0].path)
        return data.result[0].homeimg[0].path
    }catch(error){
        throw error
    }
}