import React, { Component } from 'react'
import { Table, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { User, UserInput } from '../../../src/interfaces/user'
import { deleteUser, getUsers } from '../../../src/services'
import CreateUserModal from '../CreateUserModal'
import UpdateUserModal from '../../hooks/UpdateUserModal'

interface State {
    users: User[],
    updateUser: User
    isCreateUserModalOpen: boolean,
    isUpdateUserModalOpen: boolean,
}

class UserList extends Component<{}, State> {
    constructor(props: any) {
        super(props)
        this.state = {
            users: [],
            updateUser: null,
            isCreateUserModalOpen: false,
            isUpdateUserModalOpen: false,
        }
    }

    componentDidMount() {
        this.updateList()
    }

    updateList = () => {
        getUsers().then(users => {
            this.setState({
                users
            })
        })
    }

    handleUpdateItemClick = (user: User) => {
        this.setState({
            updateUser: user
        })
        this.handleUpdateUserModalToggle()
    }

    handleDeleteItemClick = async (userID: number) => {
        await deleteUser(userID)
        this.updateList()
    }

    handleCreateUserModalToogle = () => {
        this.setState({
            isCreateUserModalOpen: !this.state.isCreateUserModalOpen
        })
    }

    handleUpdateUserModalToggle = () => {
        this.setState({
            isUpdateUserModalOpen: !this.state.isUpdateUserModalOpen
        })
    }

    render() {
        const { users, updateUser, isCreateUserModalOpen, isUpdateUserModalOpen } = this.state
        return (
            <div className='d-flex flex-column'>
                <Button className='ml-auto' variant='outline-danger' onClick={this.handleCreateUserModalToogle}>Create User</Button>

                <Table className='mt-3' striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>createdAt</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users && users.map(user => (
                                <tr key={user.userID}>
                                    <td>{user.userID}</td>
                                    <td>{user.userName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.createdAt}</td>
                                    <td className='d-flex'>
                                        <FontAwesomeIcon className='m-auto cursor-pointer' icon={faPen} size='lg' onClick={() => this.handleUpdateItemClick(user)} />
                                        <FontAwesomeIcon className='m-auto cursor-pointer' icon={faTrash} size='lg' onClick={() => this.handleDeleteItemClick(user.userID)} />
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>

                <CreateUserModal
                    isOpen={isCreateUserModalOpen}
                    toggle={this.handleCreateUserModalToogle}
                    success={this.updateList} />

                <UpdateUserModal
                    isOpen={isUpdateUserModalOpen}
                    toggle={this.handleUpdateUserModalToggle}
                    user={updateUser as UserInput}
                    userID={updateUser ? updateUser.userID : -1}
                    success={this.updateList} />
            </div>
        )
    }
}

export default UserList