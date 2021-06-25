import styled from 'styled-components';

export const InputStyle = styled.div`
  input {
    flex: 4;
    margin-right: 1rem;
		padding: 0 1.5rem;
		height: 3rem;
		border-radius: 0.25rem;

		border: 1px solid #d7d7d7;
		background: #e7e9ee;
	
		font-weight: 400;
		font-size: 1rem;

		&::placeholder {
			color: var(--text-body);
		}

		&::active {
			border: 1px solid red
		}
  }
`