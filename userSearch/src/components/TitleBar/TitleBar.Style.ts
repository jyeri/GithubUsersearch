import styled from "styled-components";

export const Title__Container = styled.div`
    margin: 0;
    position: absolute;
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const Title__Text = styled.h1`
    background: crimson;
    position: relative;
    font-size: 4em;
    font-family: "Jersey 10", sans-serif;
    font-weight: 200;
    font-style: normal;
    color: white;
    padding: 20px 50px;
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
}`;