function retrieve(){
    var moviename=document.getElementById("movie").value
    if (moviename===""){
    alert("Enter movie name")
    }
    
        var url="https://api.themoviedb.org/3/search/movie?api_key=27425388635bf4f6e638b077712c7bca&language=en-US&query="+moviename+"&page=1&include_adult=true"
        fetch(url)
        .then(response => response.json())
        .then(data=>{
            var resp_code = data['results']
            if (resp_code.length === 0){
                document.getElementById('result').innerHTML='<center>Movie Not Found</center>'
                
            }
            else{ 
                

                var movie_name=data['results'][0]['original_title']
                var poster=data['results'][0]['poster_path']
                var posterUrl = `https://image.tmdb.org/t/p/w500${poster}`
                var release=data['results'][0]['release_date']

                var movieRating = data['results'][0]['vote_average']
                var votecount=data['results'][0]['vote_count']
                var synopsis = data['results'][0]['overview']

                console.log(movieRating)
                
                document.getElementById("result1").innerHTML='<h3>Title:'+movie_name+'</h3><br><br><img src='+posterUrl+' height=500px width=500px>'
                document.getElementById("result2").innerHTML='<b>Release Date:</b><br>'+release+'<br><b>Rating:</b><br>'+movieRating.toFixed(2)+'/10'+'<br><b>Vote Count:</b><br>'+votecount+'<br><b>Synopsis:</b><br>'+synopsis
            }

        })
    }

    
    

