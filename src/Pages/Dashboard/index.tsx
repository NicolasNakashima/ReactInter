import * as S from './styles';
import { useEffect, useState } from 'react';

export const Dashboard = () => {
    const [iframeSrc, setIframeSrc] = useState<string>("");

    useEffect(() => {
        const updateIframeSrc = () => {
            setIframeSrc(
                window.innerWidth < 650
                    ? "https://app.powerbi.com/view?r=eyJrIjoiMTJiNzU5YWMtNDU2Yi00YjAwLWIwYmUtMTM3MTRiMjU2YjFjIiwidCI6ImIxNDhmMTRjLTIzOTctNDAyYy1hYjZhLTFiNDcxMTE3N2FjMCJ9"
                    : "https://app.powerbi.com/view?r=eyJrIjoiOWViY2Q5ODgtY2Q2Ni00Zjk5LTllYjQtNDBjZTAwN2Y2OTNjIiwidCI6ImIxNDhmMTRjLTIzOTctNDAyYy1hYjZhLTFiNDcxMTE3N2FjMCJ9"
            );
        };

        updateIframeSrc();
        window.addEventListener('resize', updateIframeSrc);
        return () => window.removeEventListener('resize', updateIframeSrc);

    }, []);

    return (
        <S.Wrapper>
            <S.Container>
                <iframe title="Dashboard" width="100%" height="520" src={iframeSrc} allowFullScreen />
            </S.Container>
        </S.Wrapper>
    );
};
