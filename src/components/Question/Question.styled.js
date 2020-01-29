import styled from 'styled-components';

export const QuestionContaioner = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center
width: 600px;
@media only screen and (max-width: 425px) {
    width: auto;
    margin-left: 5%;
    margin-right: 5%;
}
@media only screen and (max-width: 768px) {
    h1{
        font-size: 1.6rem;
    }
}
`;

export const ChoiceContainer = styled.div`
display: flex;
margin-bottom: 0.5rem;
width: 100%;
font-size: 1.8rem;
border: 0.1rem solid rgb(86, 165, 235, 0.25);
background-color: white;
:hover {
    cursor: pointer;
    box-shadow: 0 0.4rem 1.4rem 0 rgba(86, 185, 235, 0.5);
    transform: translateY(-0.1rem);
    transition: transform 150ms;
}
@media only screen and (max-width: 786px) {
    height: auto;
}
`;

export const ChoicePrefix = styled.div`
    padding: 1.5rem 2.5rem;
    background-color: #56a5eb;
    color: white;
    @media only screen and (max-width: 786px) {
    padding:0;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    `;

export const ChoiceText = styled.div`
    padding: 1.5rem;
    width: 100%;
    @media only screen and (max-width: 786px) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.3rem;
        }
    `;

