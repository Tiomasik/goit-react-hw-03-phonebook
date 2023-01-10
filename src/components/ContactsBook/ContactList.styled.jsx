import styled from 'styled-components';

export const List = styled.ul `
    margin: 0 auto;
    margin-top: 15px;
    padding: 10px;
    width: 450px;
    display:flex;
    flex-direction:column;
    gap:10px;
`
export const Item = styled.li `
    padding:0 5px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    button{
        padding: 5px;
        border: 1px solid tomato;
        background-color: transparent;
        border-radius: 5px;
        cursor: pointer;

        :hover, :focus {
            background-color: tomato;
            color: white;
        }
    }

    p {
        font-weight: 500;
    }
`