/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { FormCard } from '../../components/FormCard';
import * as S from './styles';
import { questions } from './mock'; // importe o array de perguntas
import { Button } from '@mui/material';
import { useSnackbar } from 'notistack';
import { Loading } from '../../components/Loading';

export const Form = () => {

    const [answers, setAnswers] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { enqueueSnackbar } = useSnackbar();

    const handleAnswerChange = (index: number, answer: string) => {
        setAnswers((prevAnswers) => ({
            ...prevAnswers,
            [`q${index + 1}`]: answer,
        }));
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://interdisciplinarr.onrender.com/forms', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(answers),
            });
            if (response.ok) {
                enqueueSnackbar('Respostas enviadas com sucesso!', { variant: 'success', autoHideDuration: 2000 });
            } else {
                enqueueSnackbar('Erro ao enviar respostas.', { variant: 'error', autoHideDuration: 2000 });
            }
        } catch (error) {
            enqueueSnackbar('Erro de rede ao enviar respostas.', { variant: 'error', autoHideDuration: 2000 });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
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
        <Loading isLoading={isLoading} fullScreen={true} />
        </>
    );
};
