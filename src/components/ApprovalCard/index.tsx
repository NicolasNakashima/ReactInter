import * as S from "./styles"

export interface IApprovalCardProps {
    name: string
    email: string
    handleClickApproval: () => void
}

const ApprovalCard = ({name, email, handleClickApproval}: IApprovalCardProps) => {

    return (
        <S.Wrapper>
            <S.ColoredRec/>
            <S.ContainerInfo>
                <S.UserInfo>
                    <S.UserName>{name}</S.UserName>
                    <S.UserEmail>{email}</S.UserEmail>
                </S.UserInfo>
                <S.StyledButton variant="contained" onClick={handleClickApproval}>Aprovar</S.StyledButton>
            </S.ContainerInfo>
        </S.Wrapper>
    )
 }

 export { ApprovalCard }