import $ from 'jquery';



var searchIMDB = (query, callback) => {
    console.log(query.title)
    $.get("https://api.themoviedb.org/3/search/movie?api_key=a27cbd34d2d17687502fcd6b89553c9e&language=en-US&query="+query.title,
        (data) => {
            // console.log(data);
            if (callback) {
                callback(data)
            }
    })
    // .fail(({responseJSON}) => {
    //     responseJSON.error.errors.forEach((err) =>
    //       console.error(err)
    //     );
    // });
// 
}
    
    
   

export default searchIMDB;