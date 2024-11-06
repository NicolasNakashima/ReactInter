/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import * as S from "./styles";
import { ApprovalCard } from "../../components/ApprovalCard";
import { AnimationComponent } from "../../components/AnimationComponent";
import NotFoundCard from "../../assets/animations/NotFoundCard.json";
import { Loading } from "../../components/Loading";
import { useSnackbar } from "notistack";


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
  

    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    const { enqueueSnackbar } = useSnackbar();

    const fetchUsers = async () => {
      setIsLoading(true)
      try {
        const response = await fetch('https://apikhiata.onrender.com/api/users/selecionar/awaiting-premium');
        // const response = await fetch('http://localhost:16334/api/users/selecionar/awaiting-premium');
        const result = await response.json();
        setData(result);
      } catch (error) {
        setData([])
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false)
      }
    };

    const updateUserStatus = async (userId: number) => {
      setIsLoading(true)
      try {
        const response = await fetch(`https://apikhiata.onrender.com/api/users/atualizar/${userId}`, {
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
        enqueueSnackbar("Status atualizado com sucesso", { variant: "success", autoHideDuration: 2000 });
      } catch (error) {
        console.error("Erro ao atualizar status do usuário:", error);
        enqueueSnackbar("Erro ao atualizar status do usuário", { variant: "error", autoHideDuration: 2000 });
      } finally {
        fetchUsers();
        setIsLoading(false)
      }
    };
    

  useEffect(() => {
    fetchUsers();
  }, []);


    return (
      <>
      <S.Wrapper>
            <S.Container>  
                
                {data.length > 0 ? 
                <>
                <S.Title>Usuários Esperando Aprovação:</S.Title>
                {
                  data.map((item: IUser) => (
                    <ApprovalCard 
                    name={item.name} 
                    email={item.email} 
                    handleClickApproval={() => 
                      updateUserStatus(item.id)
                    } />
                  ))
                }
                </>
                : (
                  <AnimationComponent animation={NotFoundCard} message="Nenhum Usuário Encontrado" />
                )}
            </S.Container>
        </S.Wrapper>
        <Loading isLoading={isLoading} fullScreen={true} />
      </>
        
    )
}