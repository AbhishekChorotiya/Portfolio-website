import {BrowserRouter, Route} from 'react-router-dom';
import {Navbar} from 'react-responsive-navbar-overlay';
import MainSection from '../MainSection/mainSection';
import Skills from '../skillsSection/skills';
import Contact from '../contact/contact';
export default function Nav(){
    return(
        <BrowserRouter>
            <Navbar/>
            /* These are the default routes, if you change the properties change the routes too. */
            <Route exact path="/" component={MainSection} />
        </BrowserRouter>
    )
}  