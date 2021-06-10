import classes from './MeetupItem.module.css'
import Card from './Card'
import { useContext } from 'react'
import FavouritesContext from '../../store/favourite-context'


function MeetupItem(props) {

    const favouriteCtx = useContext(FavouritesContext)
    const itemIsFavourite = favouriteCtx.itemIsFavourite(props.id)
    console.log(itemIsFavourite)
    function toggleFavouriteStatusButton() {
        if(itemIsFavourite) {
            favouriteCtx.removeFavourite(props.id)
        } else{
            favouriteCtx.addFavourite({
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.description
            })
        }
    }
    return <li className={classes.item}>
        <Card>
        <div className={classes.img}>
        <img src={props.image} alt={props.title}/>
        </div>
        <div className={classes.content}>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.description}</p>
        </div>

        <div className={classes.actions}>
            <button onClick={toggleFavouriteStatusButton}>
                {itemIsFavourite ? "Remove from Favourite" : "To Favourite"}
            </button>
        </div>
        </Card>
    </li>
}

export default MeetupItem