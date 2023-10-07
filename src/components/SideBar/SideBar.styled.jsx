import styled from '@emotion/styled';

export const Wrapper = styled.div`
    height: 100vh;
    width: 225px;
    padding: 32px 24px 24px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.backgroundSideBar};
    position: absolute;
    z-index: 10;
    // border-right: 1px solid rgba(220, 227, 229, 0.5);

    transform: ${props =>
        props.isOpen ? 'translateX(0)' : 'translateX(-100%)'};
    display: ${props => (props.isOpen ? 'flex' : 'none')};

    @media (min-width: 768px) {
        width: 289px;
        // height: 1024px;
    }

    @media (min-width: 1440px) {
        // height: 900px;
        position: relative;
        z-index: 1;
        border-right: none;
        transform: translateX(0);
    }
`;

export const LogoWrapper = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 32px;
`;

export const LogoImg = styled.img`
    height: 35px;
    width: 36px;
    margin-right: 6px;

    @media (min-width: 768px) {
        height: 58px;
        width: 60px;
    }

    @media (min-width: 1440px) {
        height: 68px;
        width: 71px;
        margin-right: 10px;
    }
`;

export const LogoTitle = styled.p`
    color: ${({ theme }) => theme.colors.textTitleLogo};
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0em;

    @media (min-width: 1440px) {
        font-size: 24px;
    }
`;

export const SpanTitle = styled.span`
    font-style: italic;
    padding-right: 2px;
    margin-left: -2px;
`;

export const CloseBtn = styled.button`
    display: flex;
    width: 24px;
    height: 24px;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: none;
    background: none;
    padding: 0px;

    @media (min-width: 768px) {
        width: 34px;
        height: 34px;
    }
    @media (min-width: 1440px) {
        display: none;
    }
`;

export const IconX = styled.svg`
    width: 24px;
    height: 24px;
    stroke: ${({ theme }) => theme.colors.textTitleHeader};

    @media (min-width: 768px) {
        width: 34px;
        height: 34px;
    }
`;

export const BtnContainer = styled.div`
    display: flex;
    margin-top: auto;
`;
