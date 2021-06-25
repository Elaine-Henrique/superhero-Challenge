import styled from 'styled-components';

const Container = styled.div`
	pointer-events: none;
	width: 2.5em;
	height: 2.5em;
	border: 0.4em solid transparent;
	border-color: #d3d3d3;
	border-top-color: #d71232;
	border-radius: 50%;
	animation: loadingspin 1s linear infinite;

@keyframes loadingspin {
	100% {
		transform: rotate(360deg)
	}
}
`

export default Container;
