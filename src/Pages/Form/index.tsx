import { useState } from 'react';
import { FormCard } from '../../components/FormCard';
import * as S from './styles';
import { questions } from './mock';
import { Button } from '@mui/material';
import { useSnackbar } from 'notistack';
import { Loading } from '../../components/Loading';
import { AnimationComponent } from '../../components/AnimationComponent';
import SuccessAnimation from '../../assets/animations/Stars.json';
import NotSuitableAnimation from '../../assets/animations/Sewing.json';

export const Form = () => {
    const [answers, setAnswers] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();
    const [formResult, setFormResult] = useState<boolean | null>(null);

    const handleAnswerChange = (index: number, answer: string) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [`q${index + 1}`]: answer,
        }));
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('https://api-khiata-feira.onrender.com/forms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(answers),
            });
            if (response.ok) {
                enqueueSnackbar('Respostas enviadas com sucesso!', { variant: 'success', autoHideDuration: 2000 });
                await handleResult();
            } else {
                throw new Error('Erro de rede ao enviar respostas.');
            }
        } catch (error) {
            enqueueSnackbar('Erro de rede ao enviar respostas.', { variant: 'error', autoHideDuration: 2000 });
            console.log(error);
            
        } finally {
            setIsLoading(false);
        }
    };

    const handleResult = async () => {
        try {
            const response = await fetch('https://api-khiata-feira.onrender.com/IA', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                const result = await response.json();
                setFormResult(result.result);
            } else {
                throw new Error('Erro de rede ao verificar adequação.');
            }
        } catch (error) {
            enqueueSnackbar('Erro ao verificar adequação.', { variant: 'error', autoHideDuration: 2000 });
            console.log(error);
            
        }
    };

    return (
        isLoading ? <Loading isLoading={isLoading} fullScreen={true} /> : 
        formResult !== null ? (
            <S.Wrapper>
                <S.Container>
                    <AnimationComponent 
                        animation={formResult ? SuccessAnimation : NotSuitableAnimation} 
                        message={formResult 
                            ? "Legal! Parece que o nosso aplicativo é perfeito para você!" 
                            : "Aproveite a oportunidade para explorar o khiata!"} 
                    />
                </S.Container>
            </S.Wrapper>
        ) : (
            <S.Wrapper>
                <S.Container>
                    <S.Title>Pesquisa de Campo - Khiata</S.Title>
                    {questions.map((q, index) => (
                        <FormCard
                            key={index}
                            question={q.question}
                            values={q.values}
                            onAnswerChange={(answer) => handleAnswerChange(index, answer)}
                        />
                    ))}
                    <Button variant='contained' onClick={handleSubmit}>Enviar</Button>
                </S.Container>
            </S.Wrapper>
        )
    );
};
