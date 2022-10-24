function main(){

  let list = [1, 2, 3, 4]
  let temp = list[0]
  console.log("temp", )

  list.splice(0, 1, list[2])
  list.splice(2,1,temp)

  console.log(list)

}

main()