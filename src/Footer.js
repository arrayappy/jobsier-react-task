import { Flex,  Text } from '@chakra-ui/react';

const Footer = (props) => {
	return (
		<Flex
			as='nav'
			align='center'
			justify='center'
			paddingTop='20rem'
		>
		<Text> All rights reserved.</Text>
		</Flex>
	);
};

export default Footer;
