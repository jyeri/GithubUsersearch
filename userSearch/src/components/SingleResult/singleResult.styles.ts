import styled from 'styled-components';

export const ResultContainer = styled.div`
    display: flex;
    width: 50%;
    position: relative;
    margin-top: 200px;
    padding: 15px;
    margin: auto;
    gap: 20px;
    @media (max-width: 768px) {
        scale: 0.9;
      }
  
      @media (max-width: 480px) {
        scale: 0.75;
      }
`;

export const StyledLink = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none; // Optional: remove underline from link
    `;

export const ImgDiv = styled.div`
    display: flex;
    background: crimson;
    margin-right: 10px;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0 0 25px 0 crimson,
                0 20px 25px 0 rgba(0, 0, 0, 0.2);
    transition: all 0.5s;
    &:hover {
        cursor: pointer;
        transform: scale(1.1);
        transition: all 0.5s;
    }
    img {
        width: 50px;
        height: 50px;

    }
`;

export const UserLogin = styled.div`
    display: flex;
    font-size: 3em;
    flex-direction: column; // Add this line to stack the items vertically
    align-items: center; // Add this line to center the items
    h1 {
        background: crimson;
        position: relative;
        font-size: 0.7em;
        font-family: "Jersey 10", sans-serif;
        font-weight: 200;
        font-style: normal;
        color: white;
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

export const Highlight = styled.span`
    color: darkred;
    font-size: 1em;
    font-family: "Jersey 10", sans-serif;
    font-weight: 200;
    font-style: normal;
`;