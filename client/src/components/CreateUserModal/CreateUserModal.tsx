import React, { Component } from 'react'
import { UserInput } from '../../interfaces/user'
import { postUser } from '../../services'
import { Modal, Button, Form } from 'react-bootstrap'

interface Props {
    isOpen: boolean,
    toggle: () => void,
    success: () => void,
}

interface State {
    user: UserInput
}

class UserList extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            user: null
        }
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        postUser(this.state.user)
            .then(state => {
                this.props.success()
                this.props.toggle()
                this.setState({
                    user: null
                })
            })
            .catch(error => {
                // nofify
            })
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.currentTarget.name
        const value = e.currentTarget.value
        this.setState({
            user: {
                ...this.state.user,
                [name]: value,
            }
        })
    }

    render() {
        const { user } = this.state
        return (
            <Modal show={this.props.isOpen} onHide={this.props.toggle} centered>
                <Modal.Header closeButton>Create User Info</Modal.Header>
                <Form onSubmit={this.handleSubmit}>
                    <Modal.Body>
                        <Form.Group controlId='formName'>
                            <Form.Label>Name</Form.Label>
                            <Form.Control type='text' name='userName' placeholder='Enter Name' value={user && user.userName ? user.userName : ''} onChange={this.handleChange} checked />
                        </Form.Group>
                        <Form.Group controlId='formEmail'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type='email' name='email' placeholder='Enter email' value={user && user.email ? user.email : ''} onChange={this.handleChange} />
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button color='primary' type='submit'>Post</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        )
    }
}

export default UserList
