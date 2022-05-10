import React, { useEffect, useRef, useState } from 'react';
import { Layout } from './Layout';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setBlogs } from './store/slices/blogSlice';
import {
	Button,
	Heading,
	Flex,
	SimpleGrid,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Input,
	FormControl,
} from '@chakra-ui/react';
import { Item } from './Item';
export const Blog = () => {
	const {
		isOpen: isOpen1,
		onOpen: onOpen1,
		onClose: onClose1,
	} = useDisclosure();
	const {
		isOpen: isOpen2,
		onOpen: onOpen2,
		onClose: onClose2,
	} = useDisclosure();
	const title = useRef();
	const content = useRef();
	const date = useRef();
	const image = useRef();
	const title1 = useRef();
	const content1 = useRef();
	const date1 = useRef();
	const image1 = useRef();
	const [editId, setEditId] = useState('');
	const [editState, setEditState] = useState({});
	const ctx = useSelector((state) => state.blog);
	const dispatch = useDispatch();
	const API_KEY = '481b52b963904d0cab65c9cbbd5a0546';
	useEffect(() => {
		//default posting 1 blog data at each page load
		axios(
		    {
		      method: "post",
		      url: `https://crudcrud.com/api/${API_KEY}/blogs`,
		      data:{
		        "title": "test1",
		        "content": "test1 description",
		        "date": "2020-01-01",
		        "image": "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
		      },
		      options: origin,
		    },
		    { timeout: 1000 }
		  )
		    .then((res) => {
		      console.log(res);
		  })
		    .catch((e) => {
		      console.log(e);
		  });

		axios.get(`https://crudcrud.com/api/${API_KEY}/blogs`).then((res) => {
			dispatch(setBlogs(res.data));
		});
	}, []);

	const deleteBlog = (blogId) => {
		axios.delete(`https://crudcrud.com/api/${API_KEY}/blogs/${blogId}`);
		const newBlogs = [...ctx.blogs];
		newBlogs.forEach((element, idx) => {
			if (element._id === blogId) {
				newBlogs.splice(idx, 1);
			}
		});
		dispatch(setBlogs(newBlogs));
	};

	const editBlogButton = (blogId) => {
		setEditId(blogId);
		onOpen2();
		setEditState(ctx.blogs.find((blog) => blog._id === blogId));
	};

	const editBlog = () => {
		const editData = {
			_id: editId,
			title: title1.current.value,
			content: content1.current.value,
			date: date1.current.value,
			image: image1.current.value,
		};
		fetch(`https://crudcrud.com/api/${API_KEY}/blogs/${editId}`, {
			headers: { 'Content-Type': 'application/json' },
			method: 'PUT',
			mode: 'no-cors',
			body: JSON.stringify({
				_id: editId,
				title: title1.current.value,
				content: content1.current.value,
				date: date1.current.value,
				image: image1.current.value,
			}),
		}).then((response) => console.log(response));
		console.log('reached');
		dispatch(
			setBlogs(ctx.blogs.map((blog) => (blog._id === editId ? editData : blog)))
		);
		onClose2();
	};

	const addBlog = () => {
		onClose1();
		axios(
			{
				method: 'post',
				url: `https://crudcrud.com/api/${API_KEY}/blogs`,
				data: {
					title: title.current.value,
					content: content.current.value,
					date: date.current.value,
					image: image.current.value,
				},
				options: origin,
			},
			{ timeout: 1000 }
		)
			.then((res) => {
				console.log(res);
			})
			.catch((e) => {
				console.log(e);
			});
		dispatch(
			setBlogs([
				...ctx.blogs,
				{
					title: title.current.value,
					content: content.current.value,
					date: date.current.value,
					image: image.current.value,
				},
			])
		);
		console.log(
			title.current.value,
			content.current.value,
			date.current.value,
			image.current.value
		);
	};

	useEffect(() => {
		console.log(ctx.blogs);
	});

	return (
		<Layout>
			<Flex
				backgroundColor='white'
				h='250px'
				w='1280px'
				m='32px'
				borderRadius={'4px'}
				flexDirection='column'
			>
				<Flex>
					<Heading size='md' mt='4px' mr='8px'>
						{' '}
						Blogs{' '}
					</Heading>
					<Button size={'sm'} mb='8px' onClick={onOpen1}>
						Add Blog
					</Button>
					<Modal isOpen={isOpen1} onClose={onClose1}>
						<ModalOverlay />
						<ModalContent>
							<ModalHeader>Blog details</ModalHeader>
							<ModalCloseButton />
							<ModalBody>
								<form onSubmit={onClose1}>
									<FormControl>
										<Input
											name='title'
											placeholder='Title'
											type='text'
											mb='4px'
											ref={title}
										/>
										<Input
											name='content'
											placeholder='Description'
											type='text'
											mb='4px'
											ref={content}
										/>
										<Input
											name='date'
											placeholder='Date: YYYY-MM-DD'
											type='text'
											mb='4px'
											ref={date}
										/>
										<Input
											name='image'
											placeholder='Image URL'
											type='text'
											mb='4px'
											ref={image}
										/>
									</FormControl>
								</form>
							</ModalBody>
							<ModalFooter>
								<Button colorScheme='blue' mr={3} onClick={addBlog}>
									Add
								</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>
				</Flex>

				<Flex>
					{/* <Heading size='md' mt='4px' mr='8px'>
									{' '}
									Edit Blog{' '}
								</Heading> */}
					{/* <Button size={'sm'} mb='8px' onClick={onOpen2}>Add Blog</Button> */}
					<Modal isOpen={isOpen2} onClose={onClose2}>
						<ModalOverlay />
						<ModalContent>
							<ModalHeader>Edit Blog</ModalHeader>
							<ModalCloseButton />
							<ModalBody>
								<form onSubmit={onClose2}>
									<FormControl>
										<Input
											name='title'
											placeholder='Title'
											type='text'
											mb='4px'
											defaultValue={editState.title}
											ref={title1}
										/>
										<Input
											name='content'
											placeholder='Description'
											type='text'
											mb='4px'
											defaultValue={editState.content}
											ref={content1}
										/>
										<Input
											name='date'
											placeholder='Date: YYYY-MM-DD'
											type='text'
											mb='4px'
											defaultValue={editState.date}
											ref={date1}
										/>
										<Input
											name='image'
											placeholder='Image URL'
											type='text'
											mb='4px'
											defaultValue={editState.image}
											ref={image1}
										/>
									</FormControl>
								</form>
							</ModalBody>
							<ModalFooter>
								<Button colorScheme='blue' mr={3} onClick={editBlog}>
									Save
								</Button>
							</ModalFooter>
						</ModalContent>
					</Modal>
				</Flex>
				<SimpleGrid columns={6}>
					{ctx.blogs.slice(-5).map((blog, index) => (
						<Item blog={blog} index={index} deleteBlog={deleteBlog} editBlogButton={editBlogButton}/>
					))}
				</SimpleGrid>
			</Flex>
		</Layout>
	);
};
