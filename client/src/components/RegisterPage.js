import { useState } from "react"

export default function RegisterPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function handleRegister(e) {
        e.preventDefault()
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: {'Content-Type':'application/json'},
        });
        if (response.status === 200) {
            alert('registration successful');
        } else {
            alert('registration failed');
        }
    }

    return (
        <form className="register" onSubmit={handleRegister}>
            <h1>REGISTER</h1>
            <input 
                type="text" 
                placeholder="Username" 
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button>REGISTER</button>
        </form>
    )
}