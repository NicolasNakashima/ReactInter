import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import * as S from './styles'

interface IFormCardProps {
    question: string;
    values: string[];
}

const FormCard = ({question, values}:IFormCardProps) => {

    return (
        <S.Wrapper>
            <S.Title>{question}</S.Title>
            <RadioGroup>
            {values.map((value) => (
                <FormControlLabel value={value} control={<Radio/>} label={value} />
            ))}

            </RadioGroup>
        </S.Wrapper>
    )
}

export { FormCard }