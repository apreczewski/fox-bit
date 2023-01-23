import { css } from 'styled-components';

export const scrollbar = css`
  &::-webkit-scrollbar-track {
    background: #dddddd;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
  }
  scrollbar-color: rgba(0, 0, 0, 0.25) rgba(0, 0, 0, 0.15);
  scrollbar-width: thin;
  -webkit-overflow-scrolling: touch;
`;

export const scrollbarThin = css`
  &::-webkit-scrollbar-track {
    background: #dddddd;
    border-radius: 9px;
    height: 6px;
  }
  &::-webkit-scrollbar {
    width: 6px;
    height: 9px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.25);
    border-radius: 9px;
  }
  scrollbar-color: rgba(0, 0, 0, 0.25) rgba(0, 0, 0, 0.15);
  scrollbar-width: thin;
  -webkit-overflow-scrolling: touch;
`;

export const scrollbarHover = css`
  &::-webkit-scrollbar-track {
    visibility: hidden;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar {
    width: 4px;
    background-color: transparent;
  }
  &::-webkit-scrollbar-thumb {
    visibility: hidden;
    background-color: #f5f5f5;
  }
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  &:hover {
    &::-webkit-scrollbar-thumb {
      visibility: visible;
    }
    &::-webkit-scrollbar-track {
      visibility: visible;
    }
    scrollbar-color: rgba(0, 0, 0, 0.3) rgba(0, 0, 0, 0.3);
  }
`;
