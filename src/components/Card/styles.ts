import { colors } from '@/styles/colors';
import { spacing } from '@/styles/spacing';
import { typography } from '@/styles/typography';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 100%;
  height: fit-content;
  background-color: ${colors.white[100]};
  padding: ${spacing.xl} ${spacing.lg};
  border-radius: 1rem;
  box-shadow: rgb(18 18 18 / 2%) 0px 24px 60px 0px, rgb(18 18 18 / 4%) 0px 0px 40px 0px;
`;

interface SessionFirstProps {
  status: boolean
}

export const SessionFirst = styled.div<SessionFirstProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;

    ${ props => props.status ? css`
      background-color: ${colors['bg-positive'][50]};
      color: ${colors['content-positive'][800]};
    ` : css`
      background-color: ${colors['bg-negative'][50]};
      color: ${colors['content-negative'][800]};
    `}

    border-radius: 0.75rem;
    padding: ${spacing.xxs};
    min-width: 3rem;
    max-height: 0.75rem;

    > span {
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      font-size: ${typography.xxs};
      line-height: 0.75rem;
    }
  }
`;

export const SessionSecund = styled.div`
  margin-top: ${spacing.xxs};
  font-size: ${typography.sd};
`;

export const SessionThird = styled.div`
  margin-top: ${spacing.xs};
  font-size: ${typography.md};

  > span:first-child {
    color: ${colors['content-card'][50]};
    margin-right: ${spacing.sm};
  }
`;

export const SessionFourth = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${spacing.lg};

  > span:first-child {
    font-size: ${typography.xxxs};
    color: ${colors['content-card'][75]};
  }

  > span:last-child {
    margin-top: ${spacing.xxs};
    font-size: ${typography.xxs};
  }
`;
