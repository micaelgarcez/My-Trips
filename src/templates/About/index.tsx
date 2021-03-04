import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import LinkWrapper from 'components/LinkWrapper'

import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
        error nemo minus sit omnis, alias a blanditiis magnam at veritatis! Unde
        sit eius ratione sed sint, nulla cumque dolorem aut?
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
