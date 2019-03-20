$(()=> {
    let promise = $.get('https://www.reddit.com/r/aww/.json');
    promise.then((somethingMadeUp)=>{

       //to loop through the API
       for (i=1; i<11; i++){

        $('main').append(`<div class="container"><a href="${somethingMadeUp.data.children[i].data.url}"><img src = "${somethingMadeUp.data.children[i].data.thumbnail}"/></a><h3>${somethingMadeUp.data.children[i].data.title}</h3>`);
       }

    });

});