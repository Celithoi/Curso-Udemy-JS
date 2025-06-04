import { Container } from './styled';

type loadingProps = {
  isLoading: boolean;
};

export default function Loading({ isLoading = false }: loadingProps) {
  if (!isLoading) return <></>;
  return (
    <Container>
      <div />
      <span>Carregando....</span>
    </Container>
  );
}
