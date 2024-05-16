import styled from "styled-components";

export const TitleContainer = styled.div`
    margin: auto;
    position: relative;
    margin-top: 2em;
    width: 85%;
    display: flex;
    justify-content: center;
`;

export const TitleText = styled.h1`
    background: crimson;
    position: relative;
    font-size: 3em;
    font-family: "Jersey 10", sans-serif;
    font-weight: 200;
    font-style: normal;
    color: white;
    padding: 0.2em 0.5em;
    border-radius: 30px;
    box-shadow: 0 0 25px 0 crimson,
                0 20px 25px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.5s;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: all 0.5s;
        background: white;
        color: crimson;
    }
`;