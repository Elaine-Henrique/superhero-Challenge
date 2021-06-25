import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const FormContent = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 840px;
  padding: 20px;

  input {
    flex: 4;
    margin-right: 1rem;
		padding: 0 1.5rem;
		height: 3rem;
		border-radius: 0.25rem;

		border: 1px solid #d7d7d7;
		background: var(--shape);
	
		font-weight: 400;
		font-size: 1rem;

		&::placeholder {
			color: var(--grey-light);
		}

		&::active {
			border: 1px solid red
		}
  }
`