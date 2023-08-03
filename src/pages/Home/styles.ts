import styled from 'styled-components/native';
import theme from '../../style/theme/theme';

const MainContainer = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BG_COLOR};
    align-items: center;
    justify-content: center;
`;

const TextBase = styled.Text`
    color: ${({theme}) => theme.COLORS.TEXT_COLOR};
`;

const Tittle = styled.Text`
    color: ${({theme}) => theme.COLORS.PRIMARY_COLOR};
    font-size: 30px;
    font-weight: bold;
`;

const ButtonStyled = styled.TouchableOpacity`
    border-radius: 8px;
    border-color: ${({theme}) => theme.COLORS.PRIMARY_COLOR};
    border-width: 3px; 
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 300px;
    padding: 8px;
`;

const TextMessage = styled.Text`
    color: ${({theme}) => theme.COLORS.PRIMARY_COLOR};
    width: 300px;
    text-align: center;
`;

export {MainContainer, TextBase, Tittle, ButtonStyled, TextMessage};