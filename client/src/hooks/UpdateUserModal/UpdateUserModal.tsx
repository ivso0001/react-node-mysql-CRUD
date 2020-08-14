import React, { useState, useEffect } from 'react'
import { UserInput } from '../../interfaces/user'
import { putUser } from '../../services'
import { Modal, Button, Form } from 'react-bootstrap'

interface Props {
    isOpen: boolean,
    toggle: () => void,
    user: UserInput,
    userID: number,
    success: () => void,
}

const UpdateUserModal = (props: Props) => {
    const [user, setUser] = useState<UserInput>(null)
    const [willUpdate, setWllUpdate] = useState(true)

    useEffect(() => {
        if (props.isOpen) {
            if (willUpdate) {
                setWllUpdate(false)
                setUser(props.user)
            }
        } else {
            setWllUpdate(true)
        }
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        putUser(user, props.userID)
            .then(state => {
                props.success()
                props.toggle()
                setUser(null)
            })
            .catch(error => {
                // nofify
            })
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log('e: ', e)
        const name = e.currentTarget.name
        const value = e.currentTarget.value
        setUser({
            ...user,
            [name]: value,
        })
    }

    return (
        <Modal show={props.isOpen} onHide={props.toggle} centered>
            <Modal.Header closeButton>Update User Info</Modal.Header>
            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <Form.Group controlId='formName'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' name='userName' placeholder='Enter Name' value={user && user.userName ? user.userName : ''} onChange={handleChange} />
                    </Form.Group>
                    <Form.Group controlId='formEmail'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' name='email' placeholder='Enter email' value={user && user.email ? user.email : ''} onChange={handleChange} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button color='primary' type='submit'>Post</Button>
                </Modal.Footer>
            </Form>
        </Modal>
    )
}


export default UpdateUserModal