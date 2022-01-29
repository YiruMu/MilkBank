import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation(){
    return <header className ={classes.header}>
        <div className={classes.logo}> Mother's Milk Bank Combination Optimizer</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>Entry </Link>
                </li>
                <li>
                    <Link to='/result'> Results </Link>
                </li>
            </ul>
        </nav>
    </header>
}
export default MainNavigation;