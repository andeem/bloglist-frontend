import React from 'react'
import {shallow} from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe.only('<SimpleBlog />', () => {
    it('renders title, author and likes', () => {
        const blog = {
            title: 'Huippu blogi',
            author: "Blogisti",
            likes: 10
        }

        const SimpleBlogComponent = shallow(<SimpleBlog blog={blog} />)
        const blogDiv = SimpleBlogComponent.find('.blog')
        const likeDiv = SimpleBlogComponent.find('.likes')

        expect(blogDiv.text()).toContain(`${blog.title} ${blog.author}`)
        expect(likeDiv.text()).toContain('10')
    })

    it('clicking like twice calls eventhandler twice', () => {
        const blog = {
            title: 'Huippu blogi',
            author: "Blogisti",
            likes: 10
        }

        const mockHandler = jest.fn()
        const SimpleBlogComponent = shallow(<SimpleBlog blog={blog} onClick={mockHandler}/>)

        const button = SimpleBlogComponent.find('button')
        button.simulate('click')
        button.simulate('click')

        expect(mockHandler.mock.calls.length).toBe(2)

    })

    
})