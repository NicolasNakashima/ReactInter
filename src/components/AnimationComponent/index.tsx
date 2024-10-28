/* eslint-disable @typescript-eslint/no-explicit-any */
import Lottie from "lottie-react";
import * as S from "./styles"

interface IAnimationComponentProps {
    animation: any;
    message: string;
}
export const AnimationComponent = ({animation, message}: IAnimationComponentProps) => {

    return (

        <S.Wrapper>
            <Lottie animationData={animation} loop autoplay style={{ width: 383, height: 383 }} />
            <S.Message>{message}</S.Message>
        </S.Wrapper>

        
    )
    
}