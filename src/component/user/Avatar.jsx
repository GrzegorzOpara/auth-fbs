import React from 'react'
import { useState, useEffect } from 'react';
import { Container, Form, Button, Stack, Image, Accordion  } from 'react-bootstrap'
import { storage } from '../../firebase'
import { UserAuth } from '../../context/AuthContext';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const Avatar = () => {

    const { user, updateUser } = UserAuth();
    const [ avatar, setAvatar ] = useState(user.photoURL)
    const [ error, setError ] = useState(null)

    const handleAvatarFileChange = (e) => { 
        try {
                if (e.target.files[0]) {
                    setAvatar(e.target.files[0])
                }
            }
        catch (e) {
            alert(e.message)
        }
    }

    const handleSubmit = async (e) => { 
        e.preventDefault()

        try {
            if (avatar.size > 1000000) {
                throw Error(`File size ${avatar.size / 1000000} MB exeeds the limit of 1MB.`)
            }
            else {
                const avatarRef = ref(storage, `avatar-${user.uid}`);
                const snapshot = await uploadBytes(avatarRef, avatar)
                const url = await getDownloadURL(snapshot.ref)
                await updateUser({photoURL: url})
                setAvatar(url)
            }
        } catch (e) {
            alert(e.message)
        }

    }

    useEffect(() => {
        
    }, [user.photoURL, avatar]) 

    return (
        <Container>
            {user.photoURL && <Image className="mb-3" src={user.photoURL} rounded width={200} height={200} />}
            <Accordion className="mb-3">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Change avatar</Accordion.Header>
                    <Accordion.Body>
                        <Form className="mb-3" onSubmit={(e) => handleSubmit(e)}>
                            
                            <Stack direction="horizontal" gap={2}>
                                <Form.Control type="file" size="sm" onChange={(e) => handleAvatarFileChange(e)}/>
                                <Button variant="primary" type="submit">Save</Button>         
                            </Stack>    
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    )
}

export default Avatar