import CircularProgress from '@mui/material/CircularProgress'
import * as S from './styles.ts'

interface ILoadingProps {
  isLoading?: boolean
  fullScreen?: boolean
}

const Loading = (props: ILoadingProps) => {
  return props.isLoading ? (
    <S.ContainerLoad fullScreen={props.fullScreen}>
      <CircularProgress/>
    </S.ContainerLoad>
  ) : (
    <></>
  )
}

export { Loading }
export type { ILoadingProps }
