import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import './Navbar.css';

class navbar extends Component {

    state = {
        displayList: "none",
        searchValue: "",
    };

    render () {


        return (
            <Aux>
                <div>
                    <nav className='topnav'>
                        <button className={"menu"}>FinWatch</button>
                    </nav>
                </div>
            </Aux>

        );
    }
};

export default navbar;