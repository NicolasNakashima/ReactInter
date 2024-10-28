import styled, { css } from 'styled-components'
import { ILoadingProps } from '.'

export const ContainerLoad = styled.div<ILoadingProps>(
  ({ fullScreen }) => css`
    background: ${fullScreen ? 'rgba(0, 0, 0, .40)' : 'transparent'};
    width: 100%;
    height: ${fullScreen ? '100%' : 'auto'};

    position: ${fullScreen ? 'fixed' : 'absolute'};
    top: ${fullScreen && '0'};
    left: ${fullScreen && '0'};
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  `
)
