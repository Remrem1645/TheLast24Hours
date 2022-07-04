

let Interests = (list) => {

    let userInterestString = ''

    let data = list.list;
    data.map((mapdata) => {
        userInterestString = mapdata.interest + ' OR ' + userInterestString
    })
    console.log(list.list)
    console.log(userInterestString)


    return userInterestString
}

export default Interests 