var slist=["a","b","c","d"]
var stringlist=JSON.stringify(slist);
localStorage.setItem("nlist",stringlist)
var list=localStorage.getItem("nlist")
var clist=JSON.parse(list)
console.log(clist[1])
