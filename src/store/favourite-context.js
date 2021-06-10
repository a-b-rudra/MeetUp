import { createContext, useState } from 'react'

const FavouritesContext = createContext({
    favourite: [],
    totalFavourites: 0,
    addFavourite: (favouriteMeetup) => {},
    removeFavourite: (meetupId) => {},
    itemIsFavourite: (meetupId) => {}
})

export function FavouritesContextProvider(props)
{
    const [userFavourites, setUserFavourites] = useState([])

    function addFavouriteHandler(favouriteMeetup){
        setUserFavourites((prevUserFavourites)=>{
           // console.log(prevUserFavourites)
            return prevUserFavourites.concat(favouriteMeetup)
        })
    }

    function removeFavouriteHandler(meetupId){
        setUserFavourites(prevUserFavourites => {
            return (prevUserFavourites.filter(meetup => meetup.id !== meetupId))
        })

    }

    function itemIsFavouriteHandler(meetupId){
        return userFavourites.some(meetup => meetup.id === meetupId)
    }

    const context = {
        favourite: userFavourites,
        totalFavourites: userFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        itemIsFavourite: itemIsFavouriteHandler
    }

    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}

export default FavouritesContext