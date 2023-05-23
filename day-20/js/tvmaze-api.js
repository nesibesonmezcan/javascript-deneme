const baseUrl="https://api.tvmaze.com"

const searchShows=(quary,cb)=>{
    const url=`${baseUrl}/search/shows?q=${quary}`
    fetch(url)
    .then((resp)=>resp.json())
    .then((data)=>cb(data))
}
const getShowsDetails= () =>{

}
export {searchShows,getShowsDetails}



