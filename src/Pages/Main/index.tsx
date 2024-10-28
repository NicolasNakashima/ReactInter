/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { ApprovalCard } from "../../components/ApprovalCard";
import * as S from "./styles";
import { AnimationComponent } from "../../components/AnimationComponent";
import NotFound from "../../assets/animations/NotFound.json";


export const Main = () => {

  interface IUser {
    id: number;
    name: string;
    cpf: string;
    genderId: number;
    age: number;
    isDressmaker: boolean;
    premiumStatus: number;
    phones: string;
    imageURL: string | null;
    password: string;
    email: string;
    profilePictureUrl: string | null;
    addresses: any[];
  }
  


    const [data, setData] = useState([]);

    const fetchUsers = async () => {
      try {
        const response = await fetch('https://apikhiata.onrender.com/api/users/selecionar/awaiting-premium');
        // const response = await fetch('http://localhost:16334/api/users/selecionar/awaiting-premium');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const updateUserStatus = async (userId: number) => {
      try {
        const response = await fetch(`http://localhost:16334/api/users/atualizar/${userId}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ premiumStatus: 1 }),
        });

        if (!response.ok) {
          throw new Error("Erro ao atualizar status do usuário");
        }
    
        console.log("Status atualizado com sucesso");
        fetchUsers();
      } catch (error) {
        console.error("Erro ao atualizar status do usuário:", error);
      }
    };
    

  useEffect(() => {
    fetchUsers();
  }, []);

  console.log(data)


    return (
        <S.Wrapper>
            <S.Container>  
                <S.Title>Usuários Esperando Aprovação:</S.Title>
                {data ? 
                data.map((item: IUser) => (
                    <ApprovalCard name={item.name} email={item.email} handleClickApproval={() => updateUserStatus(item.id)} />
                )) : (
                  <AnimationComponent animation={NotFound} message="Nenhum Usuário Encontrado" />
                ) }
            </S.Container>
        </S.Wrapper>
    )
}