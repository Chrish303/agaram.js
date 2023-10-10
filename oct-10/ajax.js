function data() {
    $('#topic').hide();
    $.ajax({
        type: "get",
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: '{}',
        success: function (response) {
            console.log(response)
        },
        error: function (fail) {
            console.log(fail)
        }
    });
}
function show() {
    $.ajax({
        type: "get",
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: '{}',
        success: function (response) {
            console.log('response', response)
            let tabledata = "";
            for (let i = 0; i < response.length; i++) {
                tabledata = tabledata + `<tr>                 
                <td>${response[i].id}</td>                 
                <td>${response[i].userId}</td>   
                <td><button onclick="see(${response[i].id})">${response[i].userId}),${response[i].title}</button></td>              
                </tr>`
            }
            $('#table').html(tabledata)
        },
        error: function (fail) {
            console.log('fail', fail)
        }
    });
}
function see(id) {
    $.ajax({
        type: "get",
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,
        data: '{}',
        success: function (response) {
            console.log(response)
        },
        error: function (fail) {
            console.log(fail)
        }
    });

}
function see() {
    $.ajax({
        type: "get",
        url: "https://jsonplaceholder.typicode.com/posts/comment",
        data: '{}',
        success: function (response) {
            console.log(response)
        },
        error: function (fail) {
            console.log(fail)
        }
    });

}
function viewpost() {
    $('#topic').hide();
    $.ajax({
        type: "post",
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {name:"chrish",
    place: "krishnan koil", age: 20
    },
        success: function (response) {
        console.log(response)
    },
        error: function (fail) {
            console.log(fail)
        }
    });
}


