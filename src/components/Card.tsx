import React from 'react'
import DefaultPicture from '@/assets/profile.png'
import styled from 'styled-components'
import { colors } from '@/utils/style'
import { Theme, useThemeContext } from '@/contexts'

type CardType = { jobTitle: string; name: string; picture: string }

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  background-color: ${({ theme }) =>
    theme === 'light' ? colors.backgroundLight : colors.backgroundDark};
  border-radius: 30px;
  width: 300px;
  height: 300px;
  transition: 200ms;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }

  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    margin: auto;
  }

  span:first-child {
    /* color: #5843e4; */
    color: ${({ theme }) =>
      theme === Theme.LIGHT ? colors.primary : '#ffffff'};
    font-size: 22px;
    font-weight: bold;
  }

  span:last-child {
    text-align: center;
    font-size: 1.4rem;
    padding-bottom: 16px;
    color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  }
`

export const Card: React.FC<CardType> = ({
  jobTitle: label,
  name: title,
  picture = DefaultPicture
}) => {
  const { theme } = useThemeContext()

  return (
    <CardWrapper theme={theme}>
      <span>{label}</span>
      <img src={picture} alt="freelance" />
      <span>{title}</span>
    </CardWrapper>
  )
}
