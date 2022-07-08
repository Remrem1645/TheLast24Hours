let Interests = (list) => {

    let userInterestString = ''
    let data = list.list;

    if(data.length < 2){
        data.map((mapdata) => {
            userInterestString = mapdata;
            return userInterestString;
        })
    }

    if(data.length > 1){
        data.map((mapdata) => {
            userInterestString = mapdata.interest + ' OR ' + userInterestString
            return userInterestString
        })
        userInterestString = userInterestString.substring(0, userInterestString.length - 4);
    }

    return (
        <userInterestsImport USI = {userInterestString}/>
    )
}

export default Interests 
