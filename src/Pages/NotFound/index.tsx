import * as S from "./styles";
import NotFoundAnimation from "../../assets/animations/Page404.json";
import { AnimationComponent } from "../../components/AnimationComponent";
export const NotFound = () => {

    if (location.pathname === '/user/formulario' || location.pathname === '/login') {
        return null; 
      }

    return (
        <S.Wrapper>
            <S.Container>
                <AnimationComponent animation={NotFoundAnimation} message="Página não encontrada"/>
            </S.Container>    
        </S.Wrapper>
    )
}