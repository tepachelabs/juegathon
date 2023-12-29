import styled from "@emotion/styled";

export const FormLabel = styled.label`
  ${({ theme }) => theme.fonts.heading}
  font-size: 3rem;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const Input = styled.input`
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: ${props => props.theme.fonts.body.fontFamily};
`;

export const TextArea = styled.textarea`
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-family: ${props => props.theme.fonts.body.fontFamily};
`;

export const ErrorMessage = styled.span`
    ${({ theme }) => theme.fonts.body}
    color: red;
    font-size: 1.3rem;
`;
