import ThemeToggler from './ThemeToggler/ThemeToggler';
import UserInfo from './UserInfo/UserInfo';
import sprite from 'images/icons.svg';

import goose_desktop_tablet_1x_welcome from '../../images/main_page/goose-desktop-tablet-1x-welcome.png';
import goose_desktop_tablet_2x_welcome from '../../images/main_page/goose-desktop-tablet-2x-welcome.png';
import goose_mobile_1x_welcome from '../../images/main_page/goose-mobile-1x-welcome.png';
import goose_mobile_2x_welcome from '../../images/main_page/goose-mobile-2x-welcome.png';

import {
    HeaderContainer,
    BurgerMenuBtn,
    Svg,
    MotivationContent,
    Img,
    TextDiv,
    TitleH2,
    TextP,
    Span,
    UIComponentsWrapperDiv,
    MenuWrapperDiv,
    AddFeedbackBtn,
} from './Header.styled';
import { useLocation } from 'react-router-dom';

export const Header = ({ onUserPanelShow }) => {
    const location = useLocation().pathname;
    // для перевірки userTasks тимчасово
    // const userTasks = [{ category: 'inProgress' }, { category: 'toDo' }];
    const userTasks = [{}];

    function formatPathname(location) {
        const formatted = location.replace(/\//g, '');
        return formatted.charAt(0).toUpperCase() + formatted.slice(1);
    }
    const pageTitle = formatPathname(location);

    const hasUncompletedTask = userTasks.some(
        i => i.category === 'inProgress' || i.category === 'toDo'
    );

    return (
        <header>
            <HeaderContainer>
                <BurgerMenuBtn
                    onClick={() => {
                        onUserPanelShow();
                    }}
                >
                    <Svg>
                        <use href={`${sprite}#menu-01`} />
                    </Svg>
                </BurgerMenuBtn>
                <MotivationContent>
                    {hasUncompletedTask && (
                        <picture>
                            <source
                                srcSet={
                                    (goose_desktop_tablet_1x_welcome,
                                    goose_desktop_tablet_2x_welcome)
                                }
                                media="(min-width: 1200px)"
                            />
                            <source
                                srcSet={
                                    (goose_desktop_tablet_1x_welcome,
                                    goose_desktop_tablet_2x_welcome)
                                }
                                media="(min-width: 768px)"
                            />
                            <Img
                                srcSet={
                                    (goose_mobile_1x_welcome,
                                    goose_mobile_2x_welcome)
                                }
                                alt="Goose's motivation"
                            />
                        </picture>
                    )}

                    <TextDiv>
                        <TitleH2>{pageTitle}</TitleH2>
                        {hasUncompletedTask && (
                            <TextP>
                                <Span>Let go</Span> of the past and focus on the
                                present!
                            </TextP>
                        )}
                    </TextDiv>
                </MotivationContent>
                <UIComponentsWrapperDiv>
                    <MenuWrapperDiv>
                        <AddFeedbackBtn type="button">Feedback</AddFeedbackBtn>

                        <ThemeToggler />
                    </MenuWrapperDiv>

                    <UserInfo />
                </UIComponentsWrapperDiv>
            </HeaderContainer>
        </header>
    );
};
