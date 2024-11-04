
export const firstQuestion = [
    "21-30",
    "31-40",
    "41-50",
    "51-60",
    "61-70",
    "Acima de 70",
]

export const secondQuestion = [
    "Sim",
    "Não"
]

export const thirdQuestions = [
    "Baixo",
    "Médio",
    "Alta"
]

export const forthQuestion = [
    "Semanalmente",
    "Mensalmente",
    "Anualmente",
    "Nunca comprei"
]

export const fifthQuestion = [
    "Sim",
    "Não"
]

export const sixthQuestion = [
    "Cerâmica e Porcelana",
    "Vestuário e Acessórios",
    "Artesanato em Metais",
    "Textiles",
    "Outro",
    "Nenhum"
]

export const seventhQuestion = [
    "0-50 reais",
    "51-100 reais",
    "101-200 reais",
    "Acima disso"
]

export const eighthQuestion = [
    "Sim",
    "Não"
]

export const questionsAnswers = [
    firstQuestion,
    secondQuestion,
    thirdQuestions,
    forthQuestion,
    fifthQuestion,
    sixthQuestion,
    seventhQuestion,
    eighthQuestion
]

// `questions` centraliza todas as perguntas e valores
export const questions = [
    { question: 'Digite a sua faixa etária', values: firstQuestion },
    { question: 'Você já consumiu algum produto artesanal?', values: secondQuestion },
    { question: 'Qual seu nível de interesse em relação a produtos feitos à mão?', values: thirdQuestions },
    { question: 'Com que frequência você compra produtos artesanais?', values: forthQuestion },
    { question: 'Você já utilizou um aplicativo/plataforma para comprar produtos artesanais?', values: fifthQuestion },
    { question: 'Qual tipo de produto artesanal você mais se interessa?', values: sixthQuestion },
    { question: 'Qual a faixa de preço que você estaria disposto(a) a pagar por um produto artesanal?', values: seventhQuestion },
    { question: 'Utilizaria um app que une o cliente a costureira?', values: eighthQuestion }
];

