import styled from '@emotion/styled';

import { Field, ErrorMessage as FormikErrorMessage } from 'formik';

export const Wrap = styled.div`
    position: relative;
    text-align: left;
    padding: 28px 20px;
    border-radius: 16px;
    width: 335px;
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

    @media (min-width: 768px) {
        width: 468px;
        padding: 32px;
    }
`;

export const Label = styled.label`
    font-family: Inter;
    color: ${({ theme }) => theme.colors.textTitleModalTask};
    /* background: ${({ theme }) => theme.colors.backgroundPrimary}; */
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 12px;
    line-height: calc((14 / 12) * 100%);
`;

export const WrapForReview = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 8px;
`;

export const WrapForEdit = styled.div`
    display: flex;
    gap: 8px;
`;

export const EditBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dcebf7;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    stroke: rgba(62, 133, 243, 1);
    fill: #dcebf7;

    cursor: pointer;
    transition: stroke 300ms cubic-bezier(0.4, 0, 0.2, 1);
        
    &:hover,
    &:focus {
        stroke: #ffffff;
        background-color: #3e85f3;
        fill: #3e85f3;
    }
`;

export const DeleteBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 30px;
    height: 30px;
    background-color: rgba(234, 61, 101, 0.2);
    fill: rgba(234, 61, 101, 0.20);
    stroke: #ea3d65;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    transition: {
        stroke: #ea3d65;
    }

    &:hover,
    &:focus {
        stroke: #ffffff;
        background-color: #ea3d65;
    }
`;

export const WrapForInput = styled.div`
    margin-bottom: 14px;
`;

export const Input = styled(Field)`
    resize: none;
    padding: 14px 18px 14px 18px;
    width: 295px;
    box-sizing: border-box;
    height: 127px;
    font-weight: 600;
    font-size: 14px;
    line-height: calc((18 / 14) * 100%);
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    /* background-color: rgba(246, 246, 246, 1); */
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    border-radius: 8px;
    /* border: 1px solid rgba(246, 246, 246, 1); */

    @media (min-width: 768px) {
        width: 404px;
    }

    @media (min-width: 1440px) {
        margin-bottom: 18px;
    }

    &:disabled {
        cursor: not-allowed;
    }

    ::placeholder {
        opacity: 1;
        color: rgba(52, 52, 52, 1);
        font-weight: 600;
        font-size: 14px;
    }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
    margin-left: 18px;
    max-width: 100%;
    color: #da1414;
    max-width: 240px;
    font-size: 12px;
    font-weight: 500;
    @media (min-width: 768px) {
        max-width: 330px;
    }
`;

export const FormBtnWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

export const FormBtn = styled.button`
    color: #ffffff;
    background-color: #3e85f3;
    text-transform: none;
    width: 262px;
    height: 48px;
    font-weight: 600;
    font-size: 14px;
    border: none;
    border-radius: 16px;
    cursor: pointer;
    transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        background-color: #2b78ef;
    }

    &:disabled {
        cursor: not-allowed;
    }
`;

export const FormBtnCancel = styled.button`
    color: rgba(52, 52, 52, 1);
    background-color: #e5edfa;
    text-transform: none;
    width: 262px;
    height: 48px;
    font-weight: 600;
    font-size: 14px;
    border: none;
    border-radius: 16px;
    cursor: pointer;
    transition: color 300ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover,
    &:focus {
        color: #2b78ef;
    }
`;

export const BtnCloseWrap = styled.button`
    position: absolute;
    top: 18px;
    right: 18px;
    border-radius: 50%;
    border: none;
    background-color: transparent;
    cursor: pointer;
    stroke: ${({ theme }) => theme.colors.textTitleHeader};
    transform-origin: 0px 0px;
    transition: cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        stroke: #2b78ef;
    }
`;







