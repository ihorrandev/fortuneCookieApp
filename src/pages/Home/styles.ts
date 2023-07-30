import styled from 'styled-components/native';
import theme from '../../style/theme/theme';

const MainContainer = styled.SafeAreaView`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BG_COLOR};
`;

const TextBase = styled.Text`
    color: ${({theme}) => theme.COLORS.TEXT_COLOR};
`;

export {MainContainer, TextBase};