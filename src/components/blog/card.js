import React from "react";
import styled from 'styled-components';
import { Link } from "gatsby";

//Images
import agenda from '../../images/images/agenda.svg';

// styles
const Container = styled.div`
	padding-bottom: ${props => props.slider && '3.513rem'};
	display: flex;
	flex-direction:  ${props => props.slider && 'column'};
	margin-right: 64px;
	width: ${props => props.slider && '26%'};
`;

const Image = styled.img`
	width: ${props => !props.slider && '50%'};
`;

const Content = styled.div`
	padding-left: ${props => !props.slider && '2.813rem'};
	width: ${props => !props.slider && '29.563rem'};
`;

const ContentDate = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: ${props => props.slider ? '1.54rem 0 0.5rem 0' : '1.25rem 0'};
`;

const Date = styled.p`
	font-size: 1rem;
	color: #0F2B92;
	font-family: "usual";
`;

const Status = styled.p`
	padding: 0 1.188rem;
	height: 2.063rem;
	font-size: 1rem;
	color: #FF611E;
	font-family: "usual";
	text-transform: uppercase;
	border: 1px solid #FF611E;
	border-radius: 19px;
	display: flex;
	align-items: center;
`;

const Title = styled(Link)`
	font-size:  ${props => props.slider ? '1.875rem' : '2.75rem'};
	font-weight: 700;
	color: #272727;
	font-family: "usual";
	text-decoration: none;
	cursor: pointer;

	:hover {
		color: #0F2B92;
		text-decoration: underline;
	}
`;

const Description = styled.p`
	padding-top: .688rem;
	font-size: 1.125rem;
	color: #272727;
	font-family: "usual";
	line-height: 1.75rem;
`;

const formatMonth = (month) => {
	switch (month) {
		case '01':
			return 'Janeiro';
		case '02':
			return 'Fevereiro';
		case '03':
			return 'Março';
		case '04':
			return 'Abril';
		case '05':
			return 'Maio';
		case '06':
			return 'Junho';
		case '07':
			return 'Julho'
		case '08':
			return 'Agosto';
		case '09':
			return 'Setembro';
		case '10':
			return 'Outubro';
		case '11':
			return 'Novembro';
		case '12':
			return 'Dezembro';
		default:
			return month;
			break;
	}
}

const formatDate = (date) => {
	let renderDate = date;
	let day = renderDate.slice(8, 10);
	let month = renderDate.slice(5, 7);
	let year = renderDate.slice(0, 4);

	return <Date>{day} de {formatMonth(month)} · {year}</Date>
}

const PostList = ({ data, slider }) => {
	return (
		<Container slider={slider}>
			<Image src={agenda} alt='Agenda' slider={slider} />
			<Content slider={slider}>
				<ContentDate slider={slider}>
					{formatDate(data.publishedAt)}
					<Status>{data.tags && data?.tags[0].name}</Status>
				</ContentDate>
				<Title to={'/blog/postBlog/'} state={{ postBlog: data }} slider={slider}>{data.title}</Title>
				<Description>{data.excerpt}</Description>
			</Content>
		</Container>
	)
}

export default PostList;