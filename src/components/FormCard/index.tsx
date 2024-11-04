import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import * as S from './styles'

interface IFormCardProps {
    question: string;
    values: string[];
    onAnswerChange: (value: string) => void;
}

const FormCard = ({question, values, onAnswerChange}:IFormCardProps) => {


    return (
        <S.Wrapper>
            <S.Title>{question}</S.Title>
            <RadioGroup onChange={(e) => onAnswerChange(e.target.value)}>
            {values.map((value) => (
                <FormControlLabel value={value} control={<Radio/>} label={value} />
            ))}

            </RadioGroup>
        </S.Wrapper>
    )
}

export { FormCard }