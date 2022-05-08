import { Flex,  Heading } from '@chakra-ui/react';

const Header = (props) => {
	return (
		<Flex
			as='nav'
			align='center'
			justify='center'
			padding='16px'
			paddingBottom='3rem'
		>
		<Heading>Jobsier CRUD Task</Heading>
		
		</Flex>
	);
};

export default Header;
