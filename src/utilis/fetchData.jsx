export const exerciseOptions = {
    method: 'GET',
    params: {limit: '1000'},
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': "54d22709a5msh4ca8729f08123fcp1be560jsn3ed2a02b1d1f",
    },
  };
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
  };
export const fetchData=async(url,options)=>{

    const response=await fetch(url,options);
    const data =await response.json();
    return data;
}
