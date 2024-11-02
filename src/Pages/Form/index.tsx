import { FormCard } from '../../components/FormCard'
import * as S from './styles'
import * as Q from './mock'
import { Button } from '@mui/material'


export const Form = () => {


    return (
        <S.Wrapper>
            <S.Container>
                <S.Title>Pesquisa de Campo - Khiata</S.Title>
                <FormCard question='Digite a sua faixa etária' values={Q.firstQuestion}/>
                <FormCard question='Você já consumiu algum produto artesanal?' values={Q.secondQuestion}/>
                <FormCard question='Qual seu nível de interesse em relação a produtos feitos à mão? ' values={Q.thirdQuestions}/>
                <FormCard question='Com que frequência você compra produtos artesanais?' values={Q.forthQuestion}/>
                <FormCard question='Você já utilizou um aplicativo/plataforma para comprar produtos artesanais?' values={Q.fifthQuestion}/>
                <FormCard question='Qual tipo de produto artesanal você mais se interessa?' values={Q.sixthQuestion}/>
                <FormCard question='Qual a faixa de preço que você estaria disposto(a) a pagar por um produto artesanal?' values={Q.seventhQuestion}/>
                <FormCard question='Utilizaria um app que une o cliente a costureira?' values={Q.eighthQuestion}/>
                <Button variant='contained'>Enviar</Button>
            </S.Container>
        </S.Wrapper>
    )
}