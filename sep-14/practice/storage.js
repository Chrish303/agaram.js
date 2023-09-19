// localStorage.setItem("user","chrish")
// localStorage.setItem("password",12345)

// sessionStorage.setItem("name","chrish")
// sessionStorage.setItem("pasword",12345)

var list=["a","b","c","d"]
var stringlist=JSON.stringify(list);
localStorage.setItem("nlist",stringlist)
var i=localStorage.getItem("nlist")
console.log(i)
console.log(typeof(i))

