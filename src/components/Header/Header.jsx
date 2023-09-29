// import { AuthNav } from '../AuthNav/AuthNav';
import ThemeToggler from './ThemeToggler/ThemeToggler';
import {
    HeaderContainer,
    BurgerMenuBtn,
    TitleH2,
    AddFeedbackBtn,
} from './Header.styled';
// import { useLocation } from 'react-router-dom';

export const Header = () => {
    // const location = useLocation().pathname;
    // const { isLoggedIn } = useAuth();

    return (
        <header>
            <HeaderContainer>
                <BurgerMenuBtn>click</BurgerMenuBtn>
                <TitleH2>Calendar</TitleH2>
                <p>
                    <span>Let go</span> of the past and focus on the present!
                </p>
                <AddFeedbackBtn type="button">Feedback</AddFeedbackBtn>
                <ThemeToggler />
                {/* <UserInfo /> */}
            </HeaderContainer>
        </header>
    );
};
