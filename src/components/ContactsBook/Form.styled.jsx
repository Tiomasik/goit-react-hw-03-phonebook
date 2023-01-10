import styled from 'styled-components';

export const StyleForm = styled.form `
    margin-left: auto;
    margin-right: auto;
    width:400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid tomato;
    padding: 20px 0;
    margin-bottom: 20px;

    label{
        font-weight: 500;
    }

    input{
        width: 300px;
        padding: 3px;
        margin-bottom:20px;
        font-size: 20px;
    }

    button{
        width: 100px;
        padding: 5px 0;
        cursor: pointer;
        border: 1px solid blue;
        background-color: transparent;
        border-radius: 5px;

        :hover, :focus {
            background-color: blue;
            color: white;
        }
    }
`