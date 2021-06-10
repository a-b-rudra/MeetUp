import {Link} from 'react-router-dom'
import classes from './Navigation.module.css'
import { useContext } from 'react'
import FavouritesContext from '../../store/favourite-context'


function Navigation() {
    const favouriteCtx = useContext(FavouritesContext)

    return <header className={classes.header}>
        <h1>React Meet Ups</h1>
        <div className={classes.logo}>
            <nav>
            <ul>
                <li>
                    <Link to='/'> All Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetups'> Add New Meetup</Link>
                </li>
                <li>
                    <Link to='/favourites'> Favourites</Link>
                    <span className={classes.badge}>{favouriteCtx.totalFavourites}</span>
                </li>
            </ul>
            </nav>
        </div>
    </header>
}

export default Navigation