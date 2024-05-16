import styled from 'styled-components';

export const Suggestion = styled.div`
    display: flex;
    font-size: 3em;
    flex-direction: column; // Add this line to stack the items vertically
    align-items: center; // Add this line to center the items

        h1 {
            position: relative;
            font-size: 0.5em;
            font-family: "Jersey 10", sans-serif;
            font-weight: 200;
            font-style: normal;
            color: white;
            border-radius: 30px;
            transition: all 0.5s;
            animation: 1s ease-in-out 0s infinite alternate none running blink;
        
        &:hover {
            cursor: pointer;
            transition: all 0.5s;
            background: white;
            color: crimson;
        }
    }
`;