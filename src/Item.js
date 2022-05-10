import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs';
import {
	Heading,
	Flex,
	Text,
	Image,
	Menu,
	IconButton,
	MenuButton,
	MenuItem,
	MenuList,
  useDisclosure
} from '@chakra-ui/react';
export const Item = ({blog, index, deleteBlog, editBlogButton}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex ml='8px' key={index}>
							<Flex flexDirection={'column'}>
								<Image
									src={blog.image}
									h='200px'
									w='200px'
									borderRadius={'5px'}
								/>
								<Menu isOpen={isOpen}>
									<MenuButton
										sx={{
											mt: '-200px',
											ml: '160px',
											width: 'fit-content',
											backgroundColor: 'white',
										}}
										boxShadow={'none !important'}
										as={IconButton}
										icon={<BsThreeDotsVertical />}
										variant='outline'
										onMouseEnter={onOpen}
										onMouseLeave={onClose}
									/>
									<MenuList
										onMouseEnter={onOpen}
										onMouseLeave={onClose}
										minWidth='148px'
									>
										<MenuItem onClick={() => editBlogButton(blog._id)}>
											{' '}
											Edit{' '}
										</MenuItem>
										<MenuItem onClick={() => deleteBlog(blog._id)}>
											{' '}
											Delete{' '}
										</MenuItem>
									</MenuList>
								</Menu>
								<Flex>
									<Flex>
										<Heading
											size='sm'
											m='4px'
											backgroundColor={'white'}
											borderRadius={'3px'}
											mt='174px'
										>
											{blog.title}
										</Heading>
										<Flex mt='174px'>
											<Text fontSize={'14px'}>{blog.date}</Text>
										</Flex>
									</Flex>
								</Flex>
								<Flex ml={'4px'}>
									<Text fontSize={'12px'}>{blog.content}</Text>
								</Flex>
							</Flex>
						</Flex>
  )
}
