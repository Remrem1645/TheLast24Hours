let Interests = (list) => {

    let userInterestString = ''
    let data = list.list;


    if(data.length < 2){
        data.map((mapdata) => {
            userInterestString = mapdata.interest;
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

    console.log(userInterestString);
    return (
        <>
            {
                localStorage.setItem('userDataString', JSON.stringify(userInterestString))
            }
        </>

    )
}

export default Interests 
